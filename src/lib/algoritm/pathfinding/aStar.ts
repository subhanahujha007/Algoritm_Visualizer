import { getUntraversedNeighbors } from "../../../_utils/getUntraversedNeighbors";
import { dropFromQueue, isEqual } from "../../../_utils/helpers";
import { initFunctionCost, initHeuristicCost } from "../../../_utils/heuristics";
import { Grid_Types, Tiletype } from "../../../_utils/types";

export const aStar = (
  grid: Grid_Types,
  startTile: Tiletype,
  endTile: Tiletype
) => {
  const traversedTiles = []; // Initialize an array to store traversed tiles
  const heuristicCost = initHeuristicCost(grid, endTile); // Initialize the heuristic cost for each tile
  const functionCost = initFunctionCost(); // Initialize the function cost for each tile
  const base = grid[startTile.row as number ][startTile.col as number ]; // Get the start tile from the grid
  base.distance = 0; // Set the distance of the start tile to 0
  functionCost[base.row as number ][base.col as number ] =
    base.distance as number + heuristicCost[base.row as number  ][base.col as number ]; // Calculate the initial function cost for the start tile
  base.isTraversed = true; // Mark the start tile as traversed
  const untraversedTiles = [base]; // Initialize the queue with the start tile

  while (untraversedTiles.length > 0) {
    // Continue while there are untraversed tiles
    untraversedTiles.sort((a, b) => {
      // Sort the queue by function cost
      if (functionCost[a.row as number][a.col as number] === functionCost[b.row as number][b.col as number]) {
        // In a tie, choose the path which has made the most progress
        // so far, i.e. the one with the shortest heuristic distance
        // remaining.
        return b.distance as number - (a.distance as number); // Sort by distance if function costs are equal
      }
      return functionCost[a.row as number][a.col as number] - functionCost[b.row as number][b.col as number]; // Sort by function cost
    });
    const currentTile = untraversedTiles.shift(); // Get the tile with the smallest function cost
    if (currentTile) {
      // If the current tile is valid
      if (currentTile.isWall) continue; // Skip if the tile is a wall
      if (currentTile.distance === Infinity) break; // Break if the tile's distance is infinity
      currentTile.isTraversed = true; // Mark the tile as traversed
      traversedTiles.push(currentTile); // Add the tile to the traversed tiles array
      if (isEqual(currentTile, endTile)) break; // Break if the tile is the end tile

      const neighbors = getUntraversedNeighbors(grid, currentTile); // Get untraversed neighbors of the tile
      for (let i = 0; i < neighbors.length; i += 1) {
        // Iterate through each neighbor
        const distanceToNeighbor = currentTile.distance as number + 1; // Calculate the distance to the neighbor
        if (distanceToNeighbor as number < (neighbors[i].distance as number)) {
          // Check if a shorter path is found
          dropFromQueue(neighbors[i], untraversedTiles); // Remove the neighbor from the queue
          neighbors[i].distance = distanceToNeighbor; // Update the neighbor's distance
          functionCost[neighbors[i].row as number][neighbors[i].col as number] =
            neighbors[i].distance as number +
            heuristicCost[neighbors[i].row as number ][neighbors[i].col as number]; // Update the function cost for the neighbor
          neighbors[i].parent = currentTile; // Set the neighbor's parent to the current tile
          untraversedTiles.push(neighbors[i]); // Add the neighbor to the queue
        }
      }
    }
  }

  const path = []; // Initialize an array to store the path
  let current = grid[endTile.row as number] [endTile.col as number]; // Start from the end tile
  while (current !== null) {
    current.isPath = true; // Mark the tile as part of the path
    path.unshift(current); // Add the tile to the path
    current = current.parent!; 
  }

  return { traversedTiles, path }; 
};