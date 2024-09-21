export type ALGORITM_TYPES= "DIJKSTRA" | "A_STAR" | "BFS" | "DFS" ;

export type MAZE_TYPE= "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION"

export type Tiletype={
    row:number 
    col:number
    isEnd:boolean
    isStart:boolean
    isWall:boolean
    isTraversed:boolean
    parent:Tiletype | null
    isPath:boolean
    distance:number
}

export type SpeedType= 2 | 1 | 0.5


export type Grid_Types=Tiletype[][]

export interface SpeedSelectType {
    name: string;
    value: SpeedType;
  }

  export interface MazeSelectType {
    name: string;
    value: MAZE_TYPE;
  }
  
  export interface AlgorithmSelectType {
    name: string;
    value: ALGORITM_TYPES;
  }
    