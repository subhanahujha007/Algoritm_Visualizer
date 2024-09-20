"use client"
import { SpeedType } from "@/_utils/types"
import { createContext, useState } from "react"

interface SpeedContext {
speed :SpeedType
setspeed:(speed:SpeedType)=>void
}
export const Speedcontext=createContext<SpeedContext | undefined>(undefined)

export const SpeedProvider=({children}:{children:React.ReactNode})=>{
    const [speed,setspeed]=useState<SpeedType>(1)
   return (
    <Speedcontext.Provider value={{
        speed, 
        setspeed
    }
    } >
        {children}
    </Speedcontext.Provider>
   ) 
}