import React from "react"


// Under Development
export default function StatBar (){
    return (
        <div className="w-full max-w-full h-fit flex gap-5 px-2 py-2">
            <div className="glassmorph px-3 py-2 w-full flex flex-col gap-2 justify-center filter border-2 rounded-xl border-gray-800">
                <h1 className="text-white text-left text-4xl font-bold tracking-wide">Problems</h1>
                <h3 className="text-white text-left text-sm font-semibold tracking-wide">Solve and Suffer</h3>
            </div>
            <div className="glassmorph px-3 py-5 w-full flex flex-col gap-2 justify-center filter border-2 rounded-xl border-gray-800">
                <h1 className="text-white text-center text-7xl font-bold tracking-wide">Stats</h1>

            </div>

            <div className="glassmorph px-3 py-2 w-full flex flex-col gap-2 justify-center filter border-2 rounded-xl border-gray-800">
                <h3 className="text-white text-left text-sm font-semibold tracking-wide">Active Sheet : &lt;sheet&gt;</h3>
                <h3 className="text-white text-left text-sm font-semibold tracking-wide">Solved : 21/75</h3>
                <progress value={(21 * 100) / 75} max={100} className="w-full " title={(21 * 100) / 75 + "%"}></progress>
            </div>


        </div>
    )
}