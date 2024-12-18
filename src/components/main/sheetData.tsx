// pages/sheetData.tsx
"use client";
import { use, useEffect, useState } from "react";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";
import { FileVideo, Search, SquarePen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ScrollArea } from "../ui/scroll-area";
import Pagination from "../Pagination";

interface Item {
  "Question ID": string;
  "Question Title": string;
  "Difficulty Level": string;
  "Topic Tagged text": string;
  "Success Rate": string;
  YouTube_Link: string;
}
interface Data {
  items: Item[];
  page: number;
  limit: number;
  total: number;
}

export default function SheetData(): React.ReactNode {
  const [records, setRecords] = useState<Array<Item>>([]);
  const [page, setPage] = useState<number>(1); //Start from page 1
  const [limit, setLimit] = useState<number>(25);
  const [total, setTotal] = useState<number>(0);
  const { getUser, isAuthenticated } = getKindeServerSession();

  const getData = async () => {
    try {
      const res = await axios.get(`/api/dsa_data?page=${page}&limit=${limit}`);
      console.log(res.data);
      const data = res.data as Data;
      setRecords(data.items);
      setTotal(data.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [page, limit]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="w-full flex justify-start mb-5 gap-2">
        <Select>
          <SelectTrigger className="w-[180px] hover:bg-zinc-800 text-white border border-zinc-800 rounded-lg ">
            <SelectValue placeholder="Status " />
          </SelectTrigger>
          <SelectContent className="text-white border border-zinc-800 bg-black rounded-lg">
            <SelectItem value="Default" className="cursor-pointer  ">
              All
            </SelectItem>
            <SelectItem value="light" className="cursor-pointer  ">
              Solved
            </SelectItem>
            <SelectItem value="dark" className="cursor-pointer ">
              Unsolved
            </SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] hover:bg-zinc-800 text-white border border-zinc-800 rounded-lg ">
            <SelectValue placeholder="Difficulty " />
          </SelectTrigger>
          <SelectContent className="text-white border border-zinc-800 bg-black rounded-lg">
            <SelectItem value="Default" className="cursor-pointer  ">
              All Difficulties
            </SelectItem>
            <SelectItem value="light" className="cursor-pointer  ">
              Easy
            </SelectItem>
            <SelectItem value="dark" className="cursor-pointer ">
              Medium
            </SelectItem>
            <SelectItem value="system" className="cursor-pointer ">
              Hard
            </SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] hover:bg-zinc-800 text-white border border-zinc-800 rounded-lg ">
            <SelectValue placeholder="Company " />
          </SelectTrigger>
          <SelectContent className="text-white border border-zinc-800 bg-black rounded-lg">
            <SelectItem value="Default" className="cursor-pointer  ">
              All Companies
            </SelectItem>
            {/* TODO : COMPANY SORT */}
            <SelectItem value="light" className="cursor-pointer  ">
              Easy
            </SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] hover:bg-zinc-800 text-white border border-zinc-800 rounded-lg ">
            <SelectValue placeholder="Topic " />
          </SelectTrigger>
          <SelectContent className="text-white border border-zinc-800 bg-black rounded-lg">
            <SelectItem value="Default" className="cursor-pointer  ">
              All Topics
            </SelectItem>
            <SelectItem value="light" className="cursor-pointer  ">
              Array
            </SelectItem>
            <SelectItem value="dark" className="cursor-pointer ">
              Linked lIst
            </SelectItem>
            <SelectItem value="system" className="cursor-pointer ">
              Two Pointer
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-xl border border-zinc-800">
        <Table className=" ">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-white border-b border-r border-zinc-800">
                Status
              </TableHead>
              <TableHead className="text-white border-b border-r border-zinc-800">
                Problem
              </TableHead>
              <TableHead className="text-white text-center border-b border-r border-zinc-800 w-[70px]">
                Article
              </TableHead>
              <TableHead className="text-center text-white border-b border-r border-zinc-800 w-[70px]">
                Video
              </TableHead>
              <TableHead className="text-white border-b border-r border-zinc-800 text-center">
                Difficulty
              </TableHead>
              <TableHead className="text-white border-b border-zinc-800">
                Topics
              </TableHead>
              <TableHead className="text-white border-b border-l text-center border-zinc-800">
                Companies
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="font-semibold">
            {records?.map((item: Item, index: number) => (
              <TableRow
                key={index}
                className="border border-zinc-800 hover:bg-zinc-900 transition-colors duration-300"
              >
                <TableCell className=" flex mt-1 items-center justify-center w-[50px] h-[70px] text-white">
                  <Checkbox id={`checkbox-${index}`} />
                </TableCell>
                <TableCell className="border border-zinc-800 text-white w-[400px]">
                  <Link
                    href={`${item["url"]}`}
                    className="hover:text-zinc-400 transition-colors duration-300 ml-2"
                  >
                    {item["title"]}
                  </Link>
                </TableCell>
                <TableCell className="border border-zinc-800 translate-x-3 text-white w-[70px]  ">
                  <Link href={`https://leetcode.com${item["solution_link"]}`} className="hover:text-zinc-400 transition-colors duration-300">
                    <SquarePen />
                  </Link>
                </TableCell>
                <TableCell className=" text-white translate-x-3 ">
                  {" "}
                  {item.YouTube_Link && (
                    <Link href={item.YouTube_Link} target="_blank" className="hover:text-red-800 text-red-500 transition-colors duration-300">
                      <FileVideo />
                    </Link>
                  )}
                </TableCell>
                <TableCell className="border border-zinc-800 text-white">
                  <div className="flex items-center justify-center">
                    {item["difficulty"] === "Easy" ? (
                      <span className="text-green-200 rounded-lg bg-green-800 px-3 py-[3px] text-xs font-semibold">
                        {item["difficulty"]}
                      </span>
                    ) : item["difficulty"] === "Medium" ? (
                      <span className="text-yellow-200 rounded-lg bg-yellow-800 px-3 py-[3px] text-xs font-semibold">
                        {item["difficulty"]}
                      </span>
                    ) : (
                      <span className="text-red-200 rounded-lg bg-red-800 px-3 py-[3px] text-xs font-semibold">
                        {item["difficulty"]}
                      </span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="border border-zinc-800 text-white">
                  {item["related_topics"]?.split(",").map((topic, idx) => {
                    // Generate a random bright color
                    const generateBrightColor = () => {
                      let color;
                      do {
                        color = `#${Math.floor(
                          Math.random() * 16777215
                        ).toString(16)}`;
                      } while (isDarkColor(color)); // Regenerate if the color is too dark
                      return color;
                    };

                    // Function to check if a color is too dark
                    const isDarkColor = (hex: string) => {
                      const rgb = parseInt(hex.slice(1), 16); // Convert hex to RGB
                      const r = (rgb >> 16) & 0xff;
                      const g = (rgb >> 8) & 0xff;
                      const b = rgb & 0xff;
                      // Calculate perceived brightness (simple heuristic)
                      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
                      return brightness < 128; // Consider it dark if brightness is below 128
                    };

                    const randomColor = generateBrightColor();

                    return (
                      <span
                        key={idx}
                        className="inline-block text-emerald-200 bg-emerald-800 font-semibold px-3 py-[2px] rounded-lg m-1 text-xs"
                      >
                        {topic.trim()}
                      </span>
                    );
                  })}
                </TableCell>
                <TableCell className="border border-zinc-800 text-white text-center h-[60px]">
                  {item["companies"]?.split(",").map((company, idx) => {
                    // Function to generate a random light color
                    const generateLightColor = () => {
                      const getRandomValue = () =>
                        Math.floor(Math.random() * 100) + 100; // Values from 155–255 for light colors
                      return `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
                    };

                    const lightColor = generateLightColor();

                    return (
                      <span
                        key={idx}
                        className="inline-block px-3 bg-sky-900 text-sky-300 py-[2px] rounded-lg m-1 text-xs font-semibold"
                      >
                        {company.trim()}
                      </span>
                    );
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 flex justify-center items-center">
         <Pagination
        currentPage={page}
        totalPages={Math.ceil(total / limit)}
        onPageChange={handlePageChange}
        itemsPerPage={limit}
        />
      </div>
    </>
  );
}
