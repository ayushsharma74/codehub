"use client";

import StatBar from "@/components/main/statBar";
import SheetData from "@/components/main/sheetData";


export default function MainPage(): React.ReactNode {
    return (
        <main className="w-screen max-w-[100vw] h-fit bg-gray-950 px-3">
            <div className="container w-full h-full ">
                
                <StatBar />

                {/* menu */}
                
                
                <SheetData />

            </div>

        </main>
       
    );
}
