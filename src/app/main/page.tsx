"use client";

import StatBar from "@/components/main/statBar";
import SheetData from "@/components/main/sheetData";
import SelectionBar from "@/components/main/SelectionBar";
import { Suspense } from "react";
import Loading from "./loading";
import { Skeleton } from "@/components/ui/skeleton";

export default function MainPage(): React.ReactNode {
    

  return (
    <main className="w-screen max-w-[100vw] h-fit pt-7 bg-black  ">
      <div className="container w-full h-full bg-black rounded-lg pb-5">
        <SelectionBar />
          <SheetData />
      </div>
    </main>
  );
}
