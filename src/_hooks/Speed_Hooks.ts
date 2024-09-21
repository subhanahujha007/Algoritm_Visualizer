import { Speedcontext } from "@/_context/Speed_Context"
import { useContext } from "react"

export const UseSpeed=()=>{
    const context=useContext(Speedcontext)
    if(!context)throw new Error("context is required")
        return context
}