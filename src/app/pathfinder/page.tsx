"use client"
import { useRef } from 'react'
import { Nav } from '@/_components/nav'
import { Grid } from '@/_components/grid'
import React from 'react'
 const Page = () => {
    const isvisualizedref=useRef(false)
    return (
      <div className="min-w-full min-h-[100vh] justify-center flex-col flex items-center ">
        <Nav isvisualizedref={isvisualizedref} />
    <Grid  isvisualizedref={isvisualizedref} />
    <div className='fixed left-3'>
      <h1 className='font-bold'>How To Use</h1>
      <h3 className='font-semibold'>1. Choose an Maze</h3>
      <h5 className='font-medium'>*if its no maze then you can draw your own maze</h5>
      <h3 className='font-semibold'>2. Pick an Algorithm</h3>
      <h3 className='font-semibold'>3. Choose your speed</h3>
      <h4 className='font-semibold'>4. Click on Start</h4>
      <h4 className='font-semibold'>5. Now click on the restart button</h4>
      <p className='font-bold'>If things not working fine please refresh the page</p>
    </div>
    </div>
    );
  
}
export default Page