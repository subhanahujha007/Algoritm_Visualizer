import { MAX_COLS, MAX_ROWS } from "./constants";
import { Grid_Types, Tiletype } from "./types";

const createRow=(row:Number,starttile:Tiletype,endtile:Tiletype)=>{
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