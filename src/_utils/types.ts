export type ALGORITM_TYPES= "DIJSKTRA" | "A_STAR" | "BFS" | "DFS" ;

export type MAZE_TYPE= "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION"

export type Tiletype={
    row:Number 
    col:Number
    isEnd:Boolean
    isStart:Boolean
    isWall:Boolean
    isTraversed:Boolean
    parent:Tiletype | null
    isPath:Boolean
    distance:Number
}

export type SpeedType= 2 | 1 | 0.5


export type Grid_Types=Tiletype[][]