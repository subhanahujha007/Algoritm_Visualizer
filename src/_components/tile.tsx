import {
  MAX_ROWS,
} from "../_utils/constants";
interface MouseFunction {
  (row: number, col: number): void;
}

export function Tile({
  row,
  col,
  isStart,
  isEnd,
  isTraversed,
  isWall,
  isPath,
  handleMouseDown,
  handleMouseUp,
  handleMouseEnter,
}: {
  row: number;
  col: number;
  isStart: boolean;
  isEnd: boolean;
  isTraversed: boolean;
  isWall: boolean;
  isPath: boolean;
  handleMouseDown: MouseFunction;
  handleMouseUp: MouseFunction;
  handleMouseEnter: MouseFunction;
}) {
  let backgroundColor;

  if (isStart) {
    backgroundColor = "green"; // START_TILE_STYLE color
  } else if (isEnd) {
    backgroundColor = "red"; // END_TILE_STYLE color
  } else if (isWall) {
    backgroundColor = "gray"; // WALL_TILE_STYLE color
  } else if (isPath) {
    backgroundColor = "darkgreen"; // PATH_TILE_STYLE color
  } else if (isTraversed) {
    backgroundColor = "cyan"; // TRAVERSED_TILE_STYLE color
  } else {
    backgroundColor = "white"; // TILE_STYLE color
  }

  const borderBottom = row === MAX_ROWS - 1 ? "1px solid black" : "none";
  const borderLeft = col === 0 ? "1px solid black" : "none";

  return (
    <div
      style={{
        minWidth: "15px",
        minHeight: "15px",
        border:"1px solid black",
        backgroundColor,
      }}
      onMouseDown={() => handleMouseDown(row, col)}
      onMouseUp={() => handleMouseUp(row, col)}
      onMouseEnter={() => handleMouseEnter(row, col)}
      id={`${row}-${col}`}
    />
  );
}
