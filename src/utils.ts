import type { Colour, Coordinates } from "./types";

export { generateTetromino, findIndexByColour, RNG, range };

/** Utility functions */

/**
 * create a general tetromino
 * @param colour the colour of the tetromino
 * @param coordinates coordinates of each individual cubes
 * @param group the group that the cube belongs to
 * @returns an array of cubes representing a tetromino
 */
const createTetromino =
  (colour: Colour) => (coordinates: Coordinates) => (group: string) =>
    [
      { x: coordinates[0][0], y: coordinates[0][1], colour: colour, id: `${group}1` },
      { x: coordinates[1][0], y: coordinates[1][1], colour: colour, id: `${group}2` },
      { x: coordinates[2][0], y: coordinates[2][1], colour: colour, id: `${group}3` },
      { x: coordinates[3][0], y: coordinates[3][1], colour: colour, id: `${group}4` },
    ];

const 
  createYellowTetromino = (x: number, y: number) =>
    createTetromino("yellow")([
      [x, y],
      [x + 1, y],
      [x, y + 1],
      [x + 1, y + 1],
    ]),
  createBlueTetromino = (x: number, y: number) =>
    createTetromino("blue")([
      [x, y + 1],
      [x + 1, y + 1],
      [x - 1, y + 1],
      [x - 1, y],
    ]),
  createOrangeTetromino = (x: number, y: number) =>
    createTetromino("orange")([
      [x, y + 1],
      [x + 1, y + 1],
      [x - 1, y + 1],
      [x + 1, y],
    ]),
  createRedTetromino = (x: number, y: number) =>
    createTetromino("red")([
      [x, y],
      [x - 1, y],
      [x, y + 1],
      [x + 1, y + 1],
    ]),
  createGreenTetromino = (x: number, y: number) =>
    createTetromino("green")([
      [x, y],
      [x + 1, y],
      [x, y + 1],
      [x - 1, y + 1],
    ]),
  createPurpleTetromino = (x: number, y: number) =>
    createTetromino("purple")([
      [x, y + 1],
      [x + 1, y + 1],
      [x - 1, y + 1],
      [x, y],
    ]),
  createCyanTetromino = (x: number, y: number) =>
    createTetromino("cyan")([
      [x, y],
      [x - 1, y],
      [x + 1, y],
      [x + 2, y],
    ]);

/**
 * generates a tetromino based on the tetromino index
 * @param index tetromino index
 * @param x x coordinate
 * @param y y coordinate
 * @returns an array of cubes representing a tetromino
 */
const generateTetromino = (index: number, x: number, y: number) => {
  const tetrominos = [
    createYellowTetromino,
    createBlueTetromino,
    createOrangeTetromino,
    createRedTetromino,
    createGreenTetromino,
    createPurpleTetromino,
    createCyanTetromino,
  ];
  return tetrominos[RNG.scale(index)](x, y);
};

/**
 * find tetromino index based on colour given 
 * @param colour the colour of the tetromino
 * @returns tetromino index
 */
const findIndexByColour = (colour: string) => {
  const colours = [
    "yellow",
    "blue",
    "orange",
    "red",
    "green",
    "purple",
    "cyan",
  ];
  return colours.indexOf(colour);
};

/**
 * A random number generator which provides two pure functions
 * `hash` and `scaleToRange`.  Call `hash` repeatedly to generate the
 * sequence of hashes.
 * 
 * Copied and modified from given code of tutorial 4
 */
abstract class RNG {
  // LCG using GCC's constants
  private static m = 0x80000000; // 2**31
  private static a = 1103515245;
  private static c = 12345;

  /**
   * Call `hash` repeatedly to generate the sequence of hashes.
   * @param seed
   * @returns a hash of the seed
   */
  public static hash = (seed: number) => (RNG.a * seed + RNG.c) % RNG.m;

  /**
   * Takes hash value and scales it to whole number in range [0, 6]
   */
  public static scale = (hash: number) => hash % 7;
}

/**
 * Returns an array of numbers in the range from start to end (inclusive)
 * @param start start of the range
 * @param end end of the range (inclusive)
 * @returns an array of numbers in the range [start, end]
 */
const range = (start: number, end: number) =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
