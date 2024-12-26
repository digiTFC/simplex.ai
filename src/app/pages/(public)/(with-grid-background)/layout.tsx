import GridPattern from "@/components/ui/grid-pattern";
import { ReactNode } from "react";

export default function GridLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex flex-col gap-8 text-white items-center justify-center w-full h-[100vh]">
        <GridPattern className="opacity-50 z-40 text-white"></GridPattern>
        <div className="text-center">{children}</div>
      </div>
    </>
  );
}
