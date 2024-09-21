import { MAX_COLS, MAX_ROWS } from "./constants";
import { Grid_Types, Tiletype } from "./types";

const createRow=(row:number,starttile:Tiletype,endtile:Tiletype)=>{
const currentrow=[]
for(let col=0;col<MAX_COLS;col++){
currentrow.push({
    row,
    col,
    isEnd:row===endtile.row && col ===endtile.col ,
    isStart:row===starttile.row && col===starttile.col ,
    isWall:false,
    isPath:false,
    distance:Infinity,
    isTraversed:false,
    parent:null
})
}
return currentrow
}

export const creategrid=(starttile:Tiletype ,endtile:Tiletype)=>{
const grid:Grid_Types=[]
for(let row=0;row < MAX_ROWS;row++){
grid.push(createRow(row,starttile,endtile))
}
return grid
}
export const createGrid = (startTile: Tiletype, endTile: Tiletype) => {
    const grid: Grid_Types = [];
    for (let row = 0; row < MAX_ROWS; row++) {
      grid.push(createRow(row, startTile, endTile));
    }
    return grid;
  };
  
  export const checkIfStartOrEnd = (row: number, col: number) => {
    return (
      (row === 1 && col === 1) || (row === MAX_ROWS - 2 && col === MAX_COLS - 2)
    );
  };
  
  export const createNewGrid = (grid: Grid_Types, row: number, col: number) => {
    const newGrid = grid.slice();
    const newTile = {
      ...newGrid[row][col],
      isWall: !newGrid[row][col].isWall,
    };
  
    newGrid[row][col] = newTile;
    return newGrid;
  };
  
  export const isEqual = (a: Tiletype, b: Tiletype) => {
    return a.row === b.row && a.col === b.col;
  };
  
  export const isRowColEqual = (row: number, col: number, tile: Tiletype) => {
    return row === tile.row && col === tile.col;
  };
  
  export const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  
  export const getRandInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  export const checkStack = (tile: Tiletype, stack: Tiletype[]) => {
    for (let i = 0; i < stack.length; i++) {
      if (isEqual(stack[i], tile)) return true;
    }
    return false;
  };
  
  export const dropFromQueue = (tile: Tiletype, queue: Tiletype[]) => {
    for (let i = 0; i < queue.length; i++) {
      if (isEqual(tile, queue[i])) {
        queue.splice(i, 1);
        break;
      }
    }
  };