"use client";

import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import Particles from '@/components/ui/particles';
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { FaYoutube } from "react-icons/fa";

import axios from "axios"
import Link from "next/link";




export default function MainPage() {

    // const records = getDSAData() || [];
    const [records, setRecords] = useState<any>();
    useEffect(() => {
        const get = async () => {
            const data = await axios.get("/api/dsa_data?page=1&limit=25", {method:"GET"}).then(e=>{return e.data.items}).catch(e=>console.log(e))
            setRecords(data);
        }
        get();
        
    }, [])
    const { resolvedTheme } = useTheme();
    const [color, setColor] = useState("#ffffff");

    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#fff");
    }, [resolvedTheme]);




    return (
        <main className="w-screen max-w-[100vw] h-fit bg-gray-950 px-3">
            
            <div className="container w-full h-full ">
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
                        <progress value={(21 * 100) / 75} max={100} className="w-full " title={(21*100)/75 + "%"}></progress>
                    </div>


                </div>

                {/* menu */}
                <div className="w-full flex justify-start gap-4 text-white h-16 glassmorph-lg rounded-lg bg-transparent">
                    <div className="flex items-center w-1/3 px-3" cmdk-input-wrapper="">
                        <Search className=" h-[2.6rem] rounded-l-sm border-white  text-white py-2 w-10 border-2 shrink-0 opacity-50" />
                        <Input
                            className={
                                "flex h-10 w-full rounded-r-sm bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                            }
                            placeholder="Search..."
                        />
                    </div>
                    <ToggleGroup type="single" variant="outline" className="justify-start w-1/2 gap-5">
                        <ToggleGroupItem value="Company" className="rounded-sm" aria-label="Toggle Company">
                            Company &lt;&gt;
                        </ToggleGroupItem>
                        <ToggleGroupItem value="Topic" className="rounded-sm" aria-label="Toggle Topic">
                            Topic &lt;&gt;
                        </ToggleGroupItem>
                        <ToggleGroupItem value="Sheet" className="rounded-sm" aria-label="Toggle Sheet">
                            Sheet &lt;&gt;
                        </ToggleGroupItem>
                    </ToggleGroup>
                </div>

                <div className="data grid grid-cols-7 justify-items-center h-fit w-full px-3 gap-4 text-white py-4">
                    <h2>ID</h2>
                    <h2>Name</h2>
                    <h2>Difficulty</h2>
                    <h2>Topic</h2>
                    <h2>Companies</h2>
                    <h2>Acceptance</h2>
                    <h2>Solution</h2>
                </div>

                    {records?.map((row: any, index: any) => (
                <div key={index} className="data hover:bg-[#fff3] glassmorph grid grid-cols-7 justify-items-start h-fit w-full px-3 gap-4 text-white py-4">
                        
                            {Object?.values(row).map((value: any, i) => (
                                i == 0 ?
                                    <h3 key={i} className="id">{row["Question ID"]}</h3>
                                    :
                                    i == 1 ?
                                        <h3 key={i} className="name">{row["Question Title"]}</h3>
                                        : 
                                        i == 3 ?
                                            <h3 key={i} className="difficulty">{row["Difficulty Level"]}</h3>
                                            :
                                            i == 4 ? 
                                                <h3 key={i} className="topic">{row["Topic Tagged text"]}</h3>
                                                :
                                                i == 5 ?
                                                    <h3 key={i} className="companies">NO YET</h3>
                                                    :
                                                    i == 6 ?
                                                        <h3 key={i} className="acceptance">{row["Success Rate"]}%</h3>
                                                        :
                                                        i == 7 ?
                                                            <Link className="solution relative" href={row["YouTube_Link"]} target="_blank"><FaYoutube color="#FF0033" className="youtube-icon" size={30}/></Link>
                                                            : ""
                                // <>
                                //     <h3 key={i} className="topic">{row["Question ID"]}</h3>
                                //     {/* <h3 key={i} className="id">{row["Question ID"]}</h3>
                                //     <h3 key={i} className="id">{row["Question ID"]}</h3>
                                //     <h3 key={i} className="id">{row["Question ID"]}</h3>
                                //     <h3 key={i} className="id">{row["Question ID"]}</h3>
                                //     <h3 key={i} className="id">{row["Question ID"]}</h3>
                                //     <h3 key={i} className="id">{row["Question ID"]}</h3> */}
                                // </>
                            ))}
                </div>
                    ))}


                {/* <Table className=" text-white">
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">ID</TableHead>
                            <TableHead className="">Name</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead>Topic</TableHead>
                            <TableHead className="">Companies</TableHead>
                            <TableHead>Acceptance</TableHead>
                            <TableHead>Solution</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {records?.map((row:any, index:any) => (
                            <TableRow key={index}>
                                {Object?.values(row).map((value: any, i) => (
                                    i == 0 || i == 1 ? <TableCell key={i}>{value}</TableCell> :
                                        i == 4 ? <TableCell className="topic" key={i}>{value}</TableCell> :" "
                                ))}
                            </TableRow>
                        ))}
                        {/* <TableRow>
                            <TableCell className="font-medium">INV001</TableCell>
                            <TableCell>Paid</TableCell>
                            <TableCell>Credit Card</TableCell>
                            <TableCell className="text-right">$250.00</TableCell>
                        </TableRow> */}
                    {/* </TableBody>
                </Table> */} 

            </div>

        </main>
       
        // <div>
        //     <h1>CSV Data</h1>
        //     <table border={1}>
        //         <thead>
        //             <tr>
        //                 {Object.keys(records[0] || {}).map((key) => (
        //                     <th key={key}>{key}</th>
        //                 ))}
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {records?.map((row, index) => (
        //                 <tr key={index}>
        //                     {Object.values(row).map((value: any, i) => (
        //                         <td key={i}>{value}</td>
        //                     ))}
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    );
}
