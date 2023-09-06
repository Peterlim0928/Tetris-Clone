
import { generateTetromino, findIndexByColour, RNG, range } from "./utils";
import type { Cube, Cubes, Grid, State } from "./types";

export { Tick, MoveLeft, MoveRight, MoveDown, Rotate, HardDrop, Reset };

/** Constants */

const Viewport = {
  CANVAS_WIDTH: 200,
  CANVAS_HEIGHT: 400,
  PREVIEW_WIDTH: 160,
  PREVIEW_HEIGHT: 80,
} as const;

const Constants = {
  BASE_TICK_RATE_MS: 10,
  INITIAL_DROP_TICK: 500,
  MAX_SCORE_PER_LEVEL: 1000,
  GRID_WIDTH: 10,
  GRID_HEIGHT: 20,
  MAIN_GRID_X: 4,
  MAIN_GRID_Y: -2,
  PREVIEW_GRID_X: 3,
  PREVIEW_GRID_Y: 1
  
} as const;

const Block = {
  WIDTH: Viewport.CANVAS_WIDTH / Constants.GRID_WIDTH,
  HEIGHT: Viewport.CANVAS_HEIGHT / Constants.GRID_HEIGHT,
};

/** State processing */

/**
 * Calculates the drop tick
 * A drop tick is the amount of ticks needed per game tick
 * @param level the current level
 * @returns drop tick
 */
const calculateDropTick = (level: number) =>
  Math.round(
    (Constants.INITIAL_DROP_TICK * 5 ** (-0.1 * (level - 1))) /
      Constants.BASE_TICK_RATE_MS
  );

/**
 * state transducer
 * @param s input State
 * @param action type of action to apply to the State
 * @returns a new State 
 */
const reduceState = (s: State, a: Action): State => a.apply(s);

const initialRNG = Math.round(RNG.hash(Math.random() * 1000));
const initialState: State = {

  // Tick
  gameTick: 0,
  currentTick: 0,
  dropTick: Constants.INITIAL_DROP_TICK / Constants.BASE_TICK_RATE_MS,

  // Cubes
  currentCubes: [],
  mainGridCubes: [],
  previousMainGridCubes: [],
  previewGridCubes: generateTetromino(
    initialRNG,
    Constants.PREVIEW_GRID_X,
    Constants.PREVIEW_GRID_Y
  )('p'),

  // Game mechanics
  holdOnCooldown: false,
  updateGrid: false,
  rng: RNG.hash(initialRNG),
  level: 1,
  score: 0,
  linesCleared: 0,
  highScore: 0,
  gameEnd: false,

} as const;

/**
 * Check if current cubes collide with the main grid cubes
 * @param s state
 * @returns true if any of the blocks collide, false otherwise
 */
const isCollide = (s: State) =>
  s.currentCubes.filter(
    (cube: Cube) =>
      s.mainGridCubes.filter(
        (mainCube) => mainCube.x === cube.x && mainCube.y === cube.y
      ).length > 0 || cube.y >= Constants.GRID_HEIGHT
  ).length > 0;

/**
 * Check if current cubes are out of bound
 * @param s state
 * @returns true if the current cubes are out of bound, false otherwise
 */
const isOutOfBound = (s: State) =>
  s.currentCubes.filter(
    (cube) =>
      cube.x < 0 ||
      cube.x >= Constants.GRID_WIDTH ||
      cube.y >= Constants.GRID_HEIGHT
  ).length > 0;

const isValid = (s: State) => !isCollide(s) && !isOutOfBound(s) && !s.gameEnd;

/**
 * Generate new cubes based on the current cubes
 * @param currentCubes an array of current cubes
 * @param relativeX displacement of X
 * @param relativeY displacement of Y
 * @param id true if id needs to be updated
 * @returns updated array of current cubes
 */
const generateNewCubes = (
  currentCubes: Cubes,
  relativeX: number,
  relativeY: number,
  id?: boolean
) =>
  currentCubes.map((cube) => {
    return {
      x: cube.x + relativeX,
      y: cube.y + relativeY,
      colour: cube.colour,
      id: id ? `x${cube.x + relativeX}y${cube.y + relativeY}` : cube.id,
    };
  });

/**
 * Convert the main grid cubes into a 2D array
 * @param cubes an array of current cubes
 * @returns a grid of current cubes
 */
const convertTo2D = (cubes: Cubes) =>
  cubes.reduce(
    (grid: Grid, cube) =>
      grid.map((row, index) => (
        index === cube.y ? [...row, cube] : [...row]
      )),
    Array.from({ length: Constants.GRID_HEIGHT }, 
      () => <ReadonlyArray<Cube>>[])
  );

/**
 * Find all line numbers to be cleared
 * @param grid a 2D array of grid cubes
 * @returns an array consisting all line numbers to be cleared
 */
const findLinesToClear = (grid: Grid) =>
  grid
    .map((row) => (row.length === Constants.GRID_WIDTH ? row[0].y : -1))
    .filter((row) => row !== -1);

/**
 * Remove all cubes with corresponding line number
 * @param cubes an array of grid cubes
 * @param line an array consisting all line numbers to be cleared
 * @returns an array with all lines cleared
 */
const clearLines = (cubes: Cubes, line: number) =>
  cubes
    .filter((cube) => cube.y !== line)
    .map((cube) =>
      cube.y <= line
        ? { ...cube, y: cube.y + 1, id: `x${cube.x}y${cube.y + 1}` }
        : { ...cube }
    );

const shouldUpdateGrid = (s: State) =>
  (isCollide(s) || s.currentCubes.length === 0) && !s.gameEnd;

/**
 * Compares the current minMax array with the new number,
 * updates the array if it is the new minimum/maximum
 * @param minMaxArr array consisting the minimum and maximum number
 * @param num new number to be compared
 * @returns updated minMaxArr
 */
const findMinMaxNum = (
  minMaxArr: ReadonlyArray<number>,
  num: number
): ReadonlyArray<number> => {
  const 
    minNum = minMaxArr[0] < num ? minMaxArr[0] : num,
    maxNum = minMaxArr[1] > num ? minMaxArr[1] : num;

  return [minNum, maxNum];
}

/**
 * Calculate the new position of the cube after rotation
 * The rotation formula is found on this website: 
 * https://en.wikipedia.org/wiki/Rotation_(mathematics)#Two_dimensions
 * @param pivotPointPos the position of the pivot point 
 * @param currentPos the current position
 * @returns updated position
 */
const calculateRotation = (
  pivotPointPos: [number, number],
  currentPos: [number, number]
) => {
  const 
    relativeX = currentPos[0] - pivotPointPos[0],
    relativeY = currentPos[1] - pivotPointPos[1],
    rotatedX = -relativeY,
    rotatedY = relativeX;

  return [pivotPointPos[0] + rotatedX, pivotPointPos[1] + rotatedY];
}

/**
 * Actions modify state
 */
interface Action {
  apply(s: State): State;
}

class Tick implements Action {
  /**
   * calls gameTick's apply function whenever currentTick
   * reaches dropTick, updates dropTick when needed
   * @param s old state
   * @returns new state
   */
  apply(s: State): State {
    const 
      newCurrentTick = s.currentTick + 1 === s.dropTick 
          ? 0 
          : s.currentTick + 1,

      newState = newCurrentTick === 0
          ? {
              ...s,
              currentTick: newCurrentTick,
              dropTick: calculateDropTick(s.level),
              updateGrid: false,
            }
          : { 
              ...s, 
              currentTick: newCurrentTick, 
              updateGrid: false 
            };

    return newCurrentTick === 0 ? new GameTick().apply(newState) : newState;
  }
}

class GameTick implements Action {
  /**
   * internal tick for the game:
   * cubes move down automatically
   * check if any lines should be cleared
   * update text if neccessary
   * @param s old state
   * @returns new state
   */
  apply(s: State): State {
    const 
      // Generates new cubes assuming the current cubes are not colliding
      newCubes = generateNewCubes(s.currentCubes, 0, 1),
      newState = { ...s, currentCubes: newCubes },
      updatedID = generateNewCubes(s.currentCubes, 0, 0, true),

      // Verifies if the new cubes are colliding with the main grid
      updatedMainGridCubes = isCollide(newState)
        ? s.mainGridCubes.concat(updatedID)
        : s.mainGridCubes,

      // Check if any lines are cleared
      mainGridCubes2D = convertTo2D(updatedMainGridCubes),
      linesToClear = findLinesToClear(mainGridCubes2D),
      finalMainGridCubes =
        linesToClear.length > 0
          ? linesToClear.reduce(clearLines, updatedMainGridCubes)
          : updatedMainGridCubes,

      // Update state
      newScore = s.score + linesToClear.length * 100,
      gameOver = finalMainGridCubes.filter((cube) => cube.y < 0).length > 0;

    return {
      ...s,
      gameTick: s.gameTick + 1,
      currentCubes: shouldUpdateGrid(newState)
        ? generateTetromino(
            findIndexByColour(s.previewGridCubes[0].colour),
            Constants.MAIN_GRID_X,
            Constants.MAIN_GRID_Y
          )('c')
        : newCubes,
      mainGridCubes: s.gameEnd ? s.mainGridCubes : finalMainGridCubes,
      previousMainGridCubes: s.mainGridCubes,
      previewGridCubes: shouldUpdateGrid(newState)
        ? generateTetromino(
            RNG.scale(s.rng),
            Constants.PREVIEW_GRID_X,
            Constants.PREVIEW_GRID_Y
          )('p')
        : s.previewGridCubes,
      holdOnCooldown: shouldUpdateGrid(newState) ? false : s.holdOnCooldown,
      updateGrid: shouldUpdateGrid(newState),
      rng: shouldUpdateGrid(newState) ? RNG.hash(s.rng) : s.rng,
      level: Math.floor(newScore / Constants.MAX_SCORE_PER_LEVEL) + 1,
      score: newScore,
      linesCleared: s.linesCleared + linesToClear.length,
      highScore: s.highScore < newScore ? newScore : s.highScore,
      gameEnd: gameOver,
    };
  }
}

class MoveLeft implements Action {
  /**
   * move left unless cubes are already at the left bound,
   * or about to collide with other blocks
   * @param s old state
   * @returns new state
   */
  apply(s: State): State {
    const 
      newCubes = generateNewCubes(s.currentCubes, -1, 0),
      newState = { ...s, currentCubes: newCubes }

    return {
      ...s,
      currentCubes: isValid(newState) ? newCubes : s.currentCubes,
      updateGrid: false
    }
  }
}

class MoveRight implements Action {
  /**
   * move right unless cubes are already at the right bound,
   * or about to collide with other blocks
   * @param s old state
   * @returns new state
   */
  apply(s: State): State {
    const 
      newCubes = generateNewCubes(s.currentCubes, 1, 0),
      newState = { ...s, currentCubes: newCubes }
    
    return {
      ...s,
      currentCubes: isValid(newState) ? newCubes : s.currentCubes,
      updateGrid: false
    }
  }
}

class MoveDown implements Action {
  /**
   * move down unless cubes are already at the lower bound,
   * or about to collide with other blocks
   * @param s old state
   * @returns new state
   */
  apply(s: State): State {
    const 
      newCubes = generateNewCubes(s.currentCubes, 0, 1),
      newState = { ...s, currentCubes: newCubes }
    
    return {
      ...s,
      currentCubes: isValid(newState) ? newCubes : s.currentCubes,
      updateGrid: false
    }
  }
}

class Rotate implements Action {
  /**
   * rotates cubes, wall kick will be performed if
   * cubes went out of bounds after rotating
   * @param s old state
   * @returns new state
   */
  apply(s: State): State {
    // When there are no cubes, the tetromino cannot be rotated
    // Square tetromino cannot be rotated
    if (s.currentCubes.length === 0 || s.currentCubes[0].colour === "yellow")
      return s;

    const 
      initialPos: [number, number] = [
        s.currentCubes[0].x,
        s.currentCubes[0].y,
      ],
      newCubes = s.currentCubes.map((cube) => {
        const newRotation = calculateRotation(initialPos, [cube.x, cube.y]);
        return {
          x: newRotation[0],
          y: newRotation[1],
          colour: cube.colour,
          id: cube.id,
        };
      }),

      // Walk kick
      [minX, maxX] = newCubes.reduce((acc, { x }) => findMinMaxNum(acc, x),
          <ReadonlyArray<number>>[Constants.GRID_WIDTH, -1]),
      relativeX = minX < 0
          ? -minX
          : maxX >= Constants.GRID_WIDTH
          ? Constants.GRID_WIDTH - maxX - 1
          : 0,
      adjustedCubes = generateNewCubes(newCubes, relativeX, 0),
      newState = { ...s, currentCubes: adjustedCubes },
      finalCubes = isCollide(newState) ? s.currentCubes : adjustedCubes;

    return {
      ...s,
      currentCubes: finalCubes,
      updateGrid: false,
    };
  }
}

class HardDrop implements Action {
  /**
   * instantly moves the current cubes to the lowest possible spot
   * @param s old state
   * @returns new state
   */
  apply(s: State): State {
    
    const 
      // Calculate the min and max x values of current cube
      [minX, maxX] = s.currentCubes.reduce(
        (acc, { x }) => findMinMaxNum(acc, x),
        <ReadonlyArray<number>>[Constants.GRID_WIDTH, -1]
      ),

      // Group the current cubes into different arrays and
      // calculate the highest y value of each array
      currentCubesInRange = range(minX, maxX).map((x) =>
        s.currentCubes.filter((cube) => cube.x === x)
      ),
      highestCurrentYs = currentCubesInRange.map((cubeArr) =>
        cubeArr.reduce(
          (acc: number, { y }) => (y > acc ? y : acc),
          Constants.MAIN_GRID_Y
        )
      ),

      // Split the main grid cubes into different arrays and
      // calculate the lowest y value of each array
      gridCubesInRange = range(minX, maxX).map((x) =>
        s.mainGridCubes.filter((cube) => cube.x === x)
      ),
      lowestGridYs = gridCubesInRange.map((cubeArr) =>
        cubeArr.reduce(
          (acc: number, { x, y }) =>
            y < acc && y > highestCurrentYs[x - minX] ? y : acc,
          Constants.GRID_HEIGHT
        )
      ),

      // Calculate the relative y value to move the current cubes
      relativeY = lowestGridYs.reduce((acc: number, y, index) => {
        const newY = y - highestCurrentYs[index] - 1;
        return newY < acc ? newY : acc;
      }, Constants.GRID_HEIGHT),
      newCubes = generateNewCubes(s.currentCubes, 0, relativeY, true),
      updatedMainGridCubes = s.mainGridCubes.concat(newCubes),

      // Check if any lines are cleared
      mainGridCubes2D = convertTo2D(updatedMainGridCubes),
      linesToClear = findLinesToClear(mainGridCubes2D),
      finalMainGridCubes =
        linesToClear.length > 0
          ? linesToClear.reduce(clearLines, updatedMainGridCubes)
          : updatedMainGridCubes,

      // Update state
      newScore = s.score + linesToClear.length * 100,
      gameOver = finalMainGridCubes.filter((cube) => cube.y < 0).length > 0;

    return {
      ...s,
      currentCubes: generateTetromino(
        findIndexByColour(s.previewGridCubes[0].colour),
        Constants.MAIN_GRID_X,
        Constants.MAIN_GRID_Y
      )('c'),
      mainGridCubes: s.gameEnd ? s.mainGridCubes : finalMainGridCubes,
      previousMainGridCubes: s.mainGridCubes,
      previewGridCubes: generateTetromino(
        RNG.scale(s.rng),
        Constants.PREVIEW_GRID_X,
        Constants.PREVIEW_GRID_Y
      )('p'),
      holdOnCooldown: false,
      updateGrid: true,
      rng: RNG.hash(s.rng),
      level: Math.floor(newScore / Constants.MAX_SCORE_PER_LEVEL) + 1,
      score: newScore,
      linesCleared: s.linesCleared + linesToClear.length,
      highScore: s.highScore < newScore ? newScore : s.highScore,
      gameEnd: gameOver,
    };
  }
}

class Reset implements Action {
  /**
   * resets the game
   * @param s old state
   * @returns new state
   */
  apply(s: State): State {
    if (s.gameEnd) {
      return {
        ...s,
        gameTick: 0,
        currentTick: 0,
        currentCubes: [],
        mainGridCubes: [],
        previousMainGridCubes: s.mainGridCubes,
        previewGridCubes: s.previewGridCubes,
        updateGrid: false,
        level: 1,
        score: 0,
        linesCleared: 0,
        gameEnd: false
      }
    }
    return s;
  }
}

export { initialState, reduceState, Viewport, Constants, Block };