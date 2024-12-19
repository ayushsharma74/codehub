"use client";
import SheetData from "@/components/main/sheetData";
import SelectionBar from "@/components/main/SelectionBar";

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
