import { MAX_COLS , MAX_ROWS } from "./constants";
import { Grid_Types, Tiletype } from "./types";

export const getUntraversedNeighbors = (grid: Grid_Types, tile: Tiletype) => {
  const { row  , col   } = tile;
  const neighbors = [];

  if (row as number as number > 0) {
    neighbors.push(grid[row as number - 1][col as number]);
  }
  if (row as number < MAX_ROWS - 1) {
    neighbors.push(grid[row as number + 1][col as number]);
  }
  if (col as number > 0) {
    neighbors.push(grid[row as number][col as number - 1]);
  }
  if (col as number < MAX_COLS - 1) {
    neighbors.push(grid[row as number][col as number + 1]);
  }
  return neighbors.filter((neighbor) => !neighbor.isTraversed);
};