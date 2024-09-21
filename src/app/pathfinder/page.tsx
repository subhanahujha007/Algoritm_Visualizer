"use client"
import { useRef } from 'react'
import { Nav } from '@/_components/nav'
import { Grid } from '@/_components/grid'
import React from 'react'
 const Page = () => {
    const isvisualizedref=useRef(false)
    return (
      <div className="min-w-full min-h-[100vh] justify-center flex-col flex items-center border-2 border-black">
        <Nav isvisualizedref={isvisualizedref} />
    <Grid isvisualizedref={isvisualizedref} />
    </div>
    );
  
}
export default Page