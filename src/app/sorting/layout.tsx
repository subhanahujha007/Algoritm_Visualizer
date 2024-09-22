
import { SortingAlgorithmProvider } from "@/_context/visualizer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <SortingAlgorithmProvider>{children}</SortingAlgorithmProvider>
  );
}