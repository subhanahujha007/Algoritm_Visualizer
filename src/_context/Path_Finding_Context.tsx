"use client"
import { EndTileConfiguration, StartTileConfiguration } from "@/_utils/constants";
import { creategrid } from "@/_utils/helpers";
import { ALGORITM_TYPES, Grid_Types, MAZE_TYPE } from "@/_utils/types";
import {  useState } from "react";
import { createContext } from "react";

interface PathFindindContextType {
    algorithm:ALGORITM_TYPES
    setalgoritm :(algorithm:ALGORITM_TYPES)=>void
    maze:MAZE_TYPE  
    setmaze:(maze:MAZE_TYPE)=>void
    grid:Grid_Types 
    setgrid:(grid:Grid_Types)=>void
    isgraphvisiualized:boolean
    setisgraphvisiualized:(isgraphvisiualized:boolean)=>void
}
export const PathFindindContext=createContext<PathFindindContextType | undefined>(undefined) 

export const PathFindingProvider=({children}:{children:React.ReactNode})=>{
    const [algorithm,setalgoritm]=useState<ALGORITM_TYPES>("BFS")
    const [maze,setmaze]=useState<MAZE_TYPE>("NONE")
    const [grid,setgrid]=useState<Grid_Types>(creategrid(StartTileConfiguration,EndTileConfiguration))
    const [isgraphvisiualized,setisgraphvisiualized]=useState<boolean>(false)
return(
<PathFindindContext.Provider  value={{
        algorithm,
        setalgoritm,
        maze,
        setmaze,
        grid,
        setgrid,
        isgraphvisiualized,
        setisgraphvisiualized
      }} >
{children}
</PathFindindContext.Provider>
)

}