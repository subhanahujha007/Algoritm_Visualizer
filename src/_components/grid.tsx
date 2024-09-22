"use client"
import { twMerge } from "tailwind-merge";
import { usePathFinding } from "../_hooks/Path_Finding_hooks";
import { MAX_COLS, MAX_ROWS } from "../_utils/constants";
import { Tile } from "./tile";
import { MutableRefObject, useState } from "react";
import { checkIfStartOrEnd, createNewGrid } from "@/_utils/helpers";

export function Grid({isvisualizedref}:{isvisualizedref:MutableRefObject<boolean>}) {
  const { grid, setgrid } = usePathFinding();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (row: number, col: number) => {
    if (isvisualizedref.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    setIsMouseDown(true);
    const newGrid = createNewGrid(grid, row, col);
    setgrid(newGrid);
  };

  const handleMouseUp = (row: number, col: number) => {
    if (isvisualizedref.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    setIsMouseDown(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isvisualizedref.current || checkIfStartOrEnd(row, col)) {
      return;
    }

    if (isMouseDown) {
      const newGrid = createNewGrid(grid, row, col);
      setgrid(newGrid);
    }
  };
  return (
    <div
      className={twMerge(
        "flex items-center flex-col fixed top-4 justify-center border-black border-2 mt-10",
        `lg:min-h-[${MAX_ROWS * 17}px]  md:min-h-[${
          MAX_ROWS * 15
        }px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
        `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${
          MAX_COLS * 8
        }px] w-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((r, rowIndex) => (
        <div key={rowIndex} className="flex">
          {r.map((tile, tileIndex) => {
            const { row, col, isEnd, isStart, isPath, isTraversed, isWall } =
              tile;
            return (
              <Tile
                key={tileIndex}
                row={tile.row as number }
                col={tile.col as number}
                isEnd={isEnd as boolean}
                isStart={isStart as boolean}
                isPath={isPath as boolean}
                isTraversed={isTraversed as boolean}
                isWall={isWall as boolean} 
                handleMouseDown={() => handleMouseDown(row as number, col as number)}
                handleMouseUp={() => handleMouseUp(row as number, col as number)}
                handleMouseEnter={() => handleMouseEnter(row as number, col as number)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}