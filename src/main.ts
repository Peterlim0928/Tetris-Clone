/**
 * Inside this file you will use the classes and functions from rx.js
 * to add visuals to the svg element in index.html, animate them, and make them interactive.
 *
 * Study and complete the tasks in observable exercises first to get ideas.
 *
 * Course Notes showing Asteroids in FRP: https://tgdwyer.github.io/asteroids/
 *
 * You will be marked on your functional programming style
 * as well as the functionality that you implement.
 *
 * Document your code!
 */

import "./style.css";

import { fromEvent, interval, merge } from "rxjs";
import { map, filter, scan } from "rxjs/operators";
import { reduceState, initialState, Viewport, Constants, Block, Tick, MoveLeft, MoveRight, MoveDown, Rotate, HardDrop, Reset } from "./state";
import type { Key, Cube, Cubes, State } from "./types";

/**
 * Displays a SVG element on the canvas. Brings to foreground.
 * @param elem SVG element to display
 */
const show = (elem: SVGGraphicsElement) => {
  elem.setAttribute("visibility", "visible");
  elem.parentNode!.appendChild(elem);
};

/**
 * Hides a SVG element on the canvas.
 * @param elem SVG element to hide
 */
const hide = (elem: SVGGraphicsElement) =>
  elem.setAttribute("visibility", "hidden");

/**
 * Creates an SVG element with the given properties.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/SVG/Element for valid
 * element names and properties.
 *
 * @param namespace Namespace of the SVG element
 * @param name SVGElement name
 * @param props Properties to set on the SVG element
 * @returns SVG element
 */
const createSvgElement = (
  namespace: string | null,
  name: string,
  props: Record<string, string> = {}
) => {
  const elem = document.createElementNS(namespace, name) as SVGElement;
  Object.entries(props).forEach(([k, v]) => elem.setAttribute(k, v));
  return elem;
};

/**
 * This is the function called on page load. Your main game loop
 * should be called here.
 */
export function main() {
  // Canvas elements
  const svg = document.querySelector("#svgCanvas") as SVGGraphicsElement &
    HTMLElement;
  const preview = document.querySelector("#svgPreview") as SVGGraphicsElement &
    HTMLElement;
  const gameover = document.querySelector("#gameOver") as SVGGraphicsElement &
    HTMLElement;
  const container = document.querySelector("#main") as HTMLElement;

  svg.setAttribute("height", `${Viewport.CANVAS_HEIGHT}`);
  svg.setAttribute("width", `${Viewport.CANVAS_WIDTH}`);
  preview.setAttribute("height", `${Viewport.PREVIEW_HEIGHT}`);
  preview.setAttribute("width", `${Viewport.PREVIEW_WIDTH}`);

  // Text fields
  const levelText = document.querySelector("#levelText") as HTMLElement;
  const scoreText = document.querySelector("#scoreText") as HTMLElement;
  const highScoreText = document.querySelector("#highScoreText") as HTMLElement;

  /** User input */

  const key$ = fromEvent<KeyboardEvent>(document, "keypress");

  const fromKey = (keyCode: Key) =>
    key$.pipe(
      filter(({ code }) => code === keyCode)
    );

  /** Observables */

  const left$ = fromKey("KeyA").pipe(map(_ => new MoveLeft()));
  const right$ = fromKey("KeyD").pipe(map(_ => new MoveRight()));
  const down$ = fromKey("KeyS").pipe(map(_ => new MoveDown()));
  const rotate$ = fromKey("KeyW").pipe(map(_ => new Rotate()));
  const hardDrop$ = fromKey("Space").pipe(map(_ => new HardDrop()));
  const reset$ = fromKey("KeyR").pipe(map(_ => new Reset()));

  /** Determines the rate of time steps */

  const tick$ = interval(Constants.BASE_TICK_RATE_MS).pipe(
    map((_) => new Tick())
  );

  /** Rendering */

  const renderCube = (cube: Cube, svg: SVGGraphicsElement) => {
    const elem = createSvgElement(svg.namespaceURI, "rect", {
      height: `${Block.HEIGHT}`,
      width: `${Block.WIDTH}`,
      x: `${Block.WIDTH * cube.x}`,
      y: `${Block.HEIGHT * cube.y}`,
      style: `fill: ${cube.colour}`,
      id: `${cube.id}`
    });
    return elem
  }
  
  const showAllElements = (
    elementArray: Cubes,
    svg: SVGGraphicsElement
  ) =>
    elementArray
      .map((cube) => renderCube(cube, svg))
      .forEach((cube) => svg.appendChild(cube));

  const removeAllElements = (
    elementArray: Cubes,
    svg: SVGGraphicsElement
  ) =>
    elementArray
      .map((cube) => document.getElementById(cube.id))
      .forEach((elem) => (elem ? svg.removeChild(elem) : null));

  /**
   * Renders the current state to the canvas.
   *
   * In MVC terms, this updates the View using the Model.
   *
   * @param s Current state
   */
  const render = (s: State) => {

    if (!s.gameEnd) {
      if (s.updateGrid || s.gameTick === 0) {
        removeAllElements(s.previousMainGridCubes, svg);
        removeAllElements(s.previewGridCubes, preview);
        showAllElements(s.mainGridCubes, svg);
        showAllElements(s.previewGridCubes, preview);
      }

      removeAllElements(s.currentCubes, svg);
      showAllElements(s.currentCubes, svg);
    }

    levelText.innerHTML = `${s.level}`
    scoreText.innerHTML = `${s.score}`
    highScoreText.innerHTML = `${s.highScore}`
  };

  const 
    source$ = merge(tick$, left$, right$, down$, 
      rotate$, hardDrop$, reset$)
      .pipe(
        scan(reduceState, initialState)
      )
      .subscribe((s: State) => {
        render(s);
        s.gameEnd ? show(gameover) : hide(gameover)
      });
}

// The following simply runs your main function on window load.  Make sure to leave it in place.
if (typeof window !== "undefined") {
  window.onload = () => {
    main();
  };
}