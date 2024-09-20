import { TileContext } from "@/_context/Tile_Context"
import { useContext } from "react"

export const useTile=()=>{
    const context=useContext(TileContext)
    if(!context)throw new Error("Context must be used")
        return context
}