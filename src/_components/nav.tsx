import { MutableRefObject, useState } from "react";
import { usePathFinding } from "../_hooks/Path_Finding_hooks";
import { useTile } from "../_hooks/Tile_hooks";
import {
  EXTENDED_SLEEP_TIME,
  MAZES,
  PATHFINDING_ALGORITHMS,
  SLEEP_TIME,
  SPEEDS,
} from "../_utils/constants";
import { resetGrid } from "../_utils/resetgrid";
import { ALGORITM_TYPES, MAZE_TYPE, SpeedType } from "../_utils/types";
import { Select } from "./select";
import { UseSpeed } from "../_hooks/Speed_Hooks";
import { runMazeAlgorithm } from "../_utils/runmazealgoritm";
import { PlayButton } from "./Playbutton";
import { runPathfindingAlgorithm } from "../_utils/runpathfindingalgoritm";
import { animatePath } from "../_utils/animatepath";

export function Nav({
  isvisualizedref,
}: {
  isvisualizedref: MutableRefObject<boolean>;
}) {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const {
    maze,
    setmaze,
    grid,
    setgrid,
    isgraphvisiualized,
    setisgraphvisiualized,
    algorithm,
    setalgoritm,
  } = usePathFinding();
  const { startTile, endTile } = useTile();
  const { speed, setspeed } = UseSpeed();

  const handleGenerateMaze = (maze: MAZE_TYPE) => {
    if (maze === "NONE") {
      setmaze(maze);
      resetGrid({ grid, startTile, endTile });
      return;
    }

    setmaze(maze);
    setIsDisabled(true);
    runMazeAlgorithm({
      maze,
      grid,
      startTile,
      endTile,
      setIsDisabled,
      speed,
    });
    const newGrid = grid.slice();
    setgrid(newGrid);
    setisgraphvisiualized(false);
  };

  const handlerRunVisualizer = () => {
    if (isgraphvisiualized) {
      setisgraphvisiualized(false);
      resetGrid({ grid: grid.slice(), startTile, endTile });
      return;
    }

    const { traversedTiles, path } = runPathfindingAlgorithm({
      algorithm,
      grid,
      startTile,
      endTile,
    });

    animatePath(traversedTiles, path, startTile, endTile, speed);
    setIsDisabled(true);
    isvisualizedref.current = true;
    setTimeout(() => {
      const newGrid = grid.slice();
      setgrid(newGrid);
      setisgraphvisiualized(true);
      setIsDisabled(false);
      isvisualizedref.current = false;
    }, 
    SLEEP_TIME * (traversedTiles.length + SLEEP_TIME * 2) + 
    EXTENDED_SLEEP_TIME * (path.length + 60) * SPEEDS.find((s) => s.value === speed)!.value);
  };

  return (
    <div className="flex fixed top-0 items-center justify-center min-h-[4.5rem] shadow-gray-600 sm:px-5 px-0">
      <div className="flex items-center lg:justify-between justify-center w-full sm:w-[52rem]">
        <h1 className="lg:flex hidden w-[40%] text-2xl pl-1">
          Pathfinding Visualizer
        </h1>
        <div className="flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4">
          <Select
            label="Maze"
            value={maze}
            options={MAZES}
            isDisabled={isDisabled}
            onChange={(e) => {
              handleGenerateMaze(e.target.value as MAZE_TYPE);
            }}
          />
          <Select
            label="Graph"
            value={algorithm}
            isDisabled={isDisabled}
            options={PATHFINDING_ALGORITHMS}
            onChange={(e) => {
              setalgoritm(e.target.value as ALGORITM_TYPES);
            }}
          />
          <Select
            label="Speed"
            value={speed}
            options={SPEEDS}
            isDisabled={isDisabled}
            onChange={(e) => {
              setspeed(parseInt(e.target.value) as SpeedType);
            }}
          />
          <PlayButton
            isDisabled={isDisabled}
            isGraphVisualized={isgraphvisiualized as boolean}
            handlerRunVisualizer={handlerRunVisualizer}
          />
        </div>
      </div>
    </div>
  );
}
