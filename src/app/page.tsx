"use client"
import { Grid } from "@/_components/grid";
import { Nav } from "@/_components/nav";
import { useRef } from "react";
export default function Home() {
  const isvisualizedref=useRef(false)
  return (
    <div className="min-w-full min-h-[100vh] justify-center flex-col flex items-center border-2 border-black">
      <Nav isvisualizedref={isvisualizedref} />
  <Grid isvisualizedref={isvisualizedref} />
  </div>
  );
}
