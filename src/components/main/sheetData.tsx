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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";

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

  return (
    <>
      <div className="rounded-xl border border-zinc-800">
        <Select>
          <SelectTrigger className="w-[180px] text-white ">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent className="text-white bg-black">
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
        <Table className=" ">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-white border-b border-r border-zinc-800">
                Status
              </TableHead>
              <TableHead className="text-white border-b border-r border-zinc-800">
                Problem
              </TableHead>
              <TableHead className="text-white border-b border-r border-zinc-800 w-[70px]">
                Article
              </TableHead>
              <TableHead className="text-center text-white border-b border-r border-zinc-800 w-[70px]">
                Video
              </TableHead>
              <TableHead className="text-white border-b border-r border-zinc-800">
                Difficulty
              </TableHead>
              <TableHead className="text-white border-b border-zinc-800">
                Companies
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="font-semibold">
            {records?.map((item: Item, index: number) => (
              <TableRow
                key={index}
                className="border border-zinc-800 hover:bg-zinc-900"
              >
                <TableCell className=" flex mt-1 items-center justify-center text-white">
                  <Checkbox id={`checkbox-${index}`} />
                </TableCell>
                <TableCell className="border border-zinc-800 text-white w-[400px]">
                  <Link
                    href={`https://leetcode.com/problems/${item["Question Slug"]}`}
                  >
                    {item["Question Title"]}
                  </Link>
                </TableCell>
                <TableCell className="border border-zinc-800 translate-x-3 text-white w-[70px] ">
                  <SquarePen />
                </TableCell>
                <TableCell className=" text-white  flex items-center justify-center">
                  {" "}
                  {item.YouTube_Link && (
                    <Link href={item.YouTube_Link} target="_blank">
                      <FileVideo />
                    </Link>
                  )}
                </TableCell>
                <TableCell className="border border-zinc-800 text-white">
                  {" "}
                  {item["Difficulty Level"]}{" "}
                </TableCell>
                <TableCell className="border border-zinc-800 text-white">
                  Coming Soon
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4  flex justify-between items-center gap-2">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="text-white px-7 border border-zinc-800 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-zinc-800"
        >
          Previous
        </button>
        <span className="text-zinc-500">Page: {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page >= Math.ceil(total / limit)}
          className="text-white px-7 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed border border-zinc-800 hover:bg-zinc-900 font-semibold "
        >
          Next
        </button>
      </div>
    </>
  );
}
