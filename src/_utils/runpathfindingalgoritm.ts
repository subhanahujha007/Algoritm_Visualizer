import { aStar } from "../lib/algoritm/pathfinding/aStar";
import { bfs } from "@/lib/algoritm/pathfinding/bfs";
import { dfs } from "../lib/algoritm/pathfinding/dfs";
import { dijkstra } from "../lib/algoritm/pathfinding/dijkstra";
import { ALGORITM_TYPES, Grid_Types, Tiletype } from "./types";

export const runPathfindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: ALGORITM_TYPES;
  grid: Grid_Types;
  startTile: Tiletype;
  endTile: Tiletype;
}) => {
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    case "DFS":
      return dfs(grid, startTile, endTile);
    case "DIJKSTRA":
      return dijkstra(grid, startTile, endTile);
    case "A_STAR":
      return aStar(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
};