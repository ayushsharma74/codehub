"use client"
import { useEffect, useState } from "react";
import getSheetData from "../API_CALLS/getSheetData";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function SheetData (): React.ReactNode {
    const [records, setRecords] = useState<Array<Object>>();
    const [page, setPage] = useState<number>();
    const [limit, setLimit] = useState<number>();
    const [total, setTotal] = useState<number>();
    console.log(total);
    
    const getData = (page?: number, limit?: number): Object => getSheetData(page, limit).then(((data) => {
        setRecords(data["data"].items);
        setPage(data["data"].page);
        setLimit(data["data"].limit);
        setTotal(data["data"].total);
        console.log(data["data"]);
        
    ; return data })).catch(e => console.log(e));
    useEffect(() => {
        getData(page, limit)

    }, [page, limit]);
    const handlePage = (e:any) => {
        let p = e.target.value;
        console.log("PAGE: ",p);
        
        if (p > Math.round(total / limit)) p = Math.round(total / limit);
        else if (p < 1 || !p) p = 1;
        setTimeout(() => {
            setPage(p);
        }, 1000);
    }
    return (
        <>
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
                    <div className="flex justify-between items-center gap-2">
                        <span className="h-full w-7  hover:bg-slate-700 cursor-pointer flex justify-center text-center border border-zinc-300" onClick={() => { setPage(1); }}>&lt;&lt;</span>
                        <span className="h-full w-6 hover:bg-slate-700 cursor-pointer flex justify-center text-center border border-zinc-300" onClick={() => { setPage(page < 2 ? 1 : page - 1);  }}>&lt;</span>
                        <ToggleGroupItem value="1" className="rounded-sm px-0 w-5" aria-label="Toggle Sheet">
                            <input type="number" className="text-black w-full h-full text-center spin-none" min={1} value={page || 1} max={(Math.round(total || 1 / 25))} name="page" id="page" onChange={handlePage} />
                        </ToggleGroupItem>
                        <span className="h-full w-6 hover:bg-slate-700 cursor-pointer flex justify-center text-center border border-zinc-300" onClick={() => { setPage(page > (Math.round(total / limit) - 1) ? Math.round(total / limit) : page + 1); }}>&gt;</span>
                        <span className="h-full w-7  hover:bg-slate-700 cursor-pointer flex justify-center text-center border border-zinc-300" onClick={() => { setPage(Math.round(total / limit));}}>&gt;&gt;</span>

                    </div>
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
            { records?.map((row: Object, index: number) => (
                <div key={index} className="data hover:bg-[#fff3] glassmorph grid grid-cols-7 justify-items-start h-fit w-full px-3 gap-4 text-white py-4">
    
                    {Object?.values(row).map((value: Object, i: number) => (
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
                                                    <Link key={i} className="solution relative" href={row["YouTube_Link"]} target="_blank"><FaYoutube color="#FF0033" className="youtube-icon" size={30} /></Link>
                                                    : ""
                    ))}
                </div>
            ))
}
        </>
    )
}