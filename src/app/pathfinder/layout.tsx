import { PathFindingProvider } from "@/_context/Path_Finding_Context";
import { SpeedProvider } from "@/_context/Speed_Context";
import { TileProvider } from "@/_context/Tile_Context";

export default function PathfinderLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
          <PathFindingProvider>
            <TileProvider>
              <SpeedProvider>
              {children}
              </SpeedProvider>
              </TileProvider>
          </PathFindingProvider>
    
    );
  }
  