"use client"
import { EndTileConfiguration, StartTileConfiguration } from "@/_utils/constants";
import { Tiletype } from "@/_utils/types";
import { useState, createContext } from "react";

interface TileContextInterface {
  startTile: Tiletype;
  setStartTile: (startTile: Tiletype) => void;
  endTile: Tiletype;
  setEndTile: (endTile: Tiletype) => void;
}

export const TileContext = createContext<TileContextInterface | undefined>(undefined);

export const TileProvider = ({ children }: { children: React.ReactNode }) => {
  const [startTile, setStartTile] = useState<Tiletype>(StartTileConfiguration);
  const [endTile, setEndTile] = useState<Tiletype>(EndTileConfiguration);

  return (
    <TileContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile,
      }}
    >
      {children}
    </TileContext.Provider>
  );
};
