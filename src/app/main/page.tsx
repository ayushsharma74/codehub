"use client";

import StatBar from "@/components/main/statBar";
import SheetData from "@/components/main/sheetData";


export default function MainPage(): React.ReactNode {
    return (
        <main className="w-screen max-w-[100vw] h-fit pt-7 bg-zinc-800 px-5 py-5">
            <div className="container w-full h-full bg-black rounded-lg">
                
                {/* <StatBar /> */}

                {/* menu */}
                
                
                <SheetData />

            </div>

        </main>
       
    );
}
