export const MAX_ROWS=39
export const MAX_COLS=39

export const StartTileConfiguration={
    row:1,
    col:1,
    isStart:false,
    isEnd:false,
    isWall:false,
    distance:0,
    isTraversed:false,
    parent:null,
    isPath:false
}

export const EndTileConfiguration={
    row:MAX_ROWS-2,
    col:MAX_COLS-2,
    isStart:false,
    isEnd:false,
    isWall:false,
    distance:0,
    isTraversed:false,
    parent:null,
    isPath:false
}