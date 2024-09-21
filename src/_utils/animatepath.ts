import {
    EXTENDED_SLEEP_TIME,
    PATH_TILE_STYLE,
    SLEEP_TIME,
    SPEEDS,
    TRAVERSED_TILE_STYLE,
  } from "./constants";
  import { isEqual } from "./helpers";
  import { SpeedType, Tiletype } from "./types";
  
  export const animatePath = (
    traversedTiles: Tiletype[],
    path: Tiletype[],
    startTile: Tiletype,
    endTile: Tiletype,
    speed: SpeedType
  ) => {
    for (let i = 0; i < traversedTiles.length; i++) {
      setTimeout(() => {
        const tile = traversedTiles[i];
        if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
          document.getElementById(
            `${tile.row}-${tile.col}`
          )!.className = `${TRAVERSED_TILE_STYLE} animate-traversed`;
        }
      }, SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value); // Calculate delay based on speed
    }
  
    setTimeout(() => {
      for (let i = 0; i < path.length; i++) {
        setTimeout(() => {
          const tile = path[i];
          if (!isEqual(tile, startTile) && !isEqual(tile, endTile)) {
            document.getElementById(
              `${tile.row}-${tile.col}`
            )!.className = `${PATH_TILE_STYLE} animate-path`;
          }
        }, EXTENDED_SLEEP_TIME * i * SPEEDS.find((s) => s.value === speed)!.value); // Calculate delay based on speed
      }
    }, SLEEP_TIME * traversedTiles.length * SPEEDS.find((s) => s.value === speed)!.value); // Calculate delay based on the total traversal time
  };