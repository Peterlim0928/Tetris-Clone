export type { Key, Colour, Cube, Cubes, Grid, Coordinates, State };

type Key = 
  | "KeyS" 
  | "KeyA" 
  | "KeyD" 
  | "KeyW" 
  | "KeyR" 
  | "KeyE" 
  | "Space";

type Colour =
  | "yellow"
  | "blue"
  | "orange"
  | "red"
  | "green"
  | "purple"
  | "cyan";

type Cube = Readonly<{
  x: number;
  y: number;
  colour: Colour;
  id: string;
}>;

type Cubes = ReadonlyArray<Cube>;

type Grid = ReadonlyArray<Cubes>;

type Coordinates = ReadonlyArray<ReadonlyArray<number>>;

type State = Readonly<{
  gameTick: number;
  currentTick: number;
  dropTick: number;
  currentCubes: Cubes;
  mainGridCubes: Cubes;
  previousMainGridCubes: Cubes;
  previewGridCubes: Cubes;
  holdOnCooldown: boolean;
  updateGrid: boolean;
  rng: number;
  level: number;
  score: number;
  linesCleared: number;
  highScore: number;
  gameEnd: boolean;
}>;
