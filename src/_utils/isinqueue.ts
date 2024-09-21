import { isEqual } from "./helpers";
import { Tiletype } from "./types";

export function isInQueue(tile: Tiletype, queue: Tiletype[]) {
  for (let i = 0; i < queue.length; i++) {
    if (isEqual(tile, queue[i])) return true;
  }
  return false;
}