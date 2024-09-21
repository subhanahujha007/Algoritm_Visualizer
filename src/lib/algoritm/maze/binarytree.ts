import { MAX_COLS, MAX_ROWS } from "../../../_utils/constants";
import { createWall } from "../../../_utils/createwall";
import { destroyWall } from "../../../_utils/destroyWall";
import { getRandInt, isEqual, sleep } from "../../../_utils/helpers";
import { Grid_Types, SpeedType, Tiletype } from "../../../_utils/types";

export const binaryTree = async (
  grid: Grid_Types,
  startTile: Tiletype,
  endTile: Tiletype,
  setIsDisabled: (disabled: boolean) => void,
  speed: SpeedType
) => {
  createWall(startTile, endTile, speed); 
  await sleep(MAX_ROWS * MAX_COLS); 
  for (const row of grid) {
    for (const node of row) {
      if (node.row as number % 2 === 0 || node.col as number % 2 === 0) {
        if (!isEqual(node, startTile) && !isEqual(node, endTile)) {
          node.isWall = true;
        }
      }
    }
  }

  for (let r = 1; r < MAX_ROWS; r += 2) {
    for (let c = 1; c < MAX_COLS; c += 2) {
      if (r === MAX_ROWS - 2 && c === MAX_COLS - 2) {
        continue;
      } else if (r === MAX_ROWS - 2) {
        await destroyWall(grid, r, c, 1, speed);
      } else if (c === MAX_COLS - 2) {
        await destroyWall(grid, r, c, 0, speed);
      } else {
        await destroyWall(grid, r, c, getRandInt(0, 2), speed);
      }
    }
  }
  setIsDisabled(false); 
};