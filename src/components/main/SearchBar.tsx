// import React from 'react'
// import { Search } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

// type Props = {}

// const SearchBar = (props: Props) => {
//   return (
//     <div>

// <div className="w-full flex justify-start gap-4 text-white h-16 glassmorph-lg rounded-lg bg-transparent">
//                 <div className="flex items-center w-1/3 px-3" cmdk-input-wrapper="">
//                     <Search className=" h-[2.6rem] rounded-l-sm border-white  text-white py-2 w-10 border-2 shrink-0 opacity-50" />
//                     <Input
//                         className={
//                             "flex h-10 w-full rounded-r-sm bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
//                         }
//                         placeholder="Search..."
//                     />
//                 </div>
//                 <ToggleGroup type="single" variant="outline" className="justify-start w-1/2 gap-5">
//                     <ToggleGroupItem value="Company" className="rounded-sm" aria-label="Toggle Company">
//                             Company &lt;&gt;
//                         </ToggleGroupItem>
//                         <ToggleGroupItem value="Topic" className="rounded-sm" aria-label="Toggle Topic">
//                             Topic &lt;&gt;
//                         </ToggleGroupItem>
//                         <ToggleGroupItem value="Sheet" className="rounded-sm" aria-label="Toggle Sheet">
//                             Sheet &lt;&gt;
//                         </ToggleGroupItem>
//                     <div className="flex justify-between items-center gap-2">
//                         <span className="h-full w-7  hover:bg-slate-700 cursor-pointer flex justify-center text-center border border-zinc-300" onClick={() => { setPage(1); }}>&lt;&lt;</span>
//                         <span className="h-full w-6 hover:bg-slate-700 cursor-pointer flex justify-center text-center border border-zinc-300" onClick={() => { setPage(page < 2 ? 1 : page - 1);  }}>&lt;</span>
//                         <ToggleGroupItem value="1" className="rounded-sm px-0 w-5" aria-label="Toggle Sheet">
//                             <input type="number" className="text-black w-full h-full text-center spin-none" min={1} value={page || 1} max={(Math.round(total || 1 / 25))} name="page" id="page" onChange={handlePage} />
//                         </ToggleGroupItem>
//                         <span className="h-full w-6 hover:bg-slate-700 cursor-pointer flex justify-center text-center border border-zinc-300" onClick={() => { setPage(page > (Math.round(total / limit) - 1) ? Math.round(total / limit) : page + 1); }}>&gt;</span>
//                         <span className="h-full w-7  hover:bg-slate-700 cursor-pointer flex justify-center text-center border border-zinc-300" onClick={() => { setPage(Math.round(total / limit));}}>&gt;&gt;</span>

//                     </div>
//                 </ToggleGroup>
//             </div>
//     </div>
//   )
// }

// export default SearchBar