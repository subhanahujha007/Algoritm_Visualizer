import { PathFindindContext } from "@/_context/Path_Finding_Context"
import {  useContext } from "react"

export const usePathFinding=()=>{
  const context=useContext(PathFindindContext)
  if(!context)throw new Error("Context mst be used")
    return context
}