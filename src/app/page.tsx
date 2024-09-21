"use client"
import Link from "next/link";
import {FaGithub} from "react-icons/fa"
export default function Home() {
  return (
    <div className="min-w-full min-h-[100vh] items-center flex-row flex ">
<div className="flex flex-col justify-center min-w-[40vw] text-white min-h-[100vh] items-center bg-[#000048]">
<h1 className="text-3xl font-bold p-6">Algorithm Visualier</h1>
<p>Understanding popular algoritms in a visual format </p>
</div>
<div className="flex flex-col min-w-[50vw] min-h-[90vh] items-center justify-between">
<Link href="pathfinder">
<div className="bg-yellow-400 px-3 flex flex-col justify-around items-center h-[280px] top-32 rounded-lg rotate-37 w-[200px]">
<h1 className="font-bold ml-3">Path Finding Algorithm</h1>
<p className="tracking-wider">visual demonstartion of varoius path finding algoritms with beautiful animations  A-Star BFS DFS DIJKSTRA </p>
</div></Link>
<div className="bg-yellow-400 flex px-3 flex-col justify-center items-center h-[280px] ml-32 rounded-lg rotate-37 w-[200px]">
<h1 className="font-bold">Sorting Algorithm</h1>
<p>visual demonstartion of varoius path Sorting algoritms with beautiful animations </p>
<p className="font-bold">work in progress</p>
</div>
<Link href="https://github.com/subhanahujha007" className="mr-[300px]"><FaGithub size={40}/>
</Link>
</div>
  </div>
  );
}
