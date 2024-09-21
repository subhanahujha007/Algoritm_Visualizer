"use client"
import { useContext } from "react";
import { PathFindindContext } from "@/_context/Path_Finding_Context";

export const usePathFinding = () => {
  const context = useContext(PathFindindContext);
  if (!context) throw new Error("Context must be used within a PathFindingProvider");
  return context;
};
