// pages/sheetData.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FileVideo, SquarePen } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import axios from "axios";
import Pagination from "../Pagination";
import { companies, topics } from "@/lib/constants";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";

interface Item {
  id: string;
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

interface CheckBoxStatus {
  [key: string]: boolean; // Use a string index signature to access by question ID
}

export default function SheetData(): React.ReactNode {
  const [records, setRecords] = useState<Array<Item>>([]);
  const [page, setPage] = useState<number>(1);
  const limit = 25;
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [difficulty, setDifficulty] = useState<string>("default");
  const [topic, setTopic] = useState<string>("default");
  const [company, setCompany] = useState<string>("default");
  const [checkboxes, setCheckboxes] = useState<CheckBoxStatus>({});
  // const [search, setSearch] = useState<string>("null");

  useEffect(() => {
    const storedState = localStorage.getItem('checkboxState');
    if (storedState) {
      try {
        setCheckboxes(JSON.parse(storedState));
      } catch (error) {
        console.error("Error parsing checkbox state", error)
      }
    }
  }, []);


  const getData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `/api/dsa_data?page=${page}&limit=${limit}&difficulty=${difficulty}&topic=${topic}&company=${company}`
      );
      const data = res.data as Data;
      setRecords(data.items);
      setTotal(data.total);
      //Initialize here as the values are available now, only if records are fetched
      setLoading(false);

    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const initializeCheckboxes = (items: Item[]) => {

         const newCheckboxes: CheckBoxStatus = {...checkboxes};
    items.forEach((item) => {
             if(!newCheckboxes[item.id]) {
        newCheckboxes[item.id] = false;
      }
    });
    setCheckboxes(newCheckboxes);
  }

  useEffect(() => {
       if(records.length > 0 ) {
      initializeCheckboxes(records);
    }
  }, [records])

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value);
  };

  const handleTopicChange = (value: string) => {
    setTopic(value);
  };
  const handleCompanyChange = (value: string) => {
    setCompany(value);
  };

  useEffect(() => {
    getData();
  }, [page, limit, difficulty, topic, company]);

  useEffect(() => {
    localStorage.setItem('checkboxState', JSON.stringify(checkboxes));
  }, [checkboxes]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleCheckedChange = (id: string, checked: boolean) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: checked,
    }));
  };

  if (loading) {
    return (
      <div className="w-screen h-screen transition-colors flex justify-center items-center">
        <div className=" w-full h-full animate-pulse bg-gray-600 rounded-lg"></div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full flex justify-start mb-5 gap-2">
        {/* <Input onChange={(e) => setSearch(e.target.value)}  className="border border-zinc-800 rounded-lg text-white" placeholder="Coming Soon...." />
        <Button onClick={getData} className="bg-black border-zinc-800 border px-3 hover:bg-zinc-800 transition-colors  text-white rounded-lg"><FaSearch /> */}
        {/* </Button> */}
        <Select onValueChange={handleDifficultyChange} value={difficulty}>
          <SelectTrigger className="w-[180px] hover:bg-zinc-800 text-white border border-zinc-800 rounded-lg font-semibold ">
            <SelectValue placeholder="Difficulty" />
          </SelectTrigger>
          <SelectContent className="text-white border border-zinc-800 bg-black rounded-lg font-semibold">
            <SelectItem
              value="default"
              className="cursor-pointer data-[highlighted]:bg-zinc-900 transition-colors duration-300"
            >
              All Difficulties
            </SelectItem>
            <SelectItem
              value="easy"
              className="cursor-pointer data-[highlighted]:bg-zinc-900 transition-colors duration-300"
            >
              Easy
            </SelectItem>
            <SelectItem
              value="medium"
              className="cursor-pointer data-[highlighted]:bg-zinc-900 transition-colors duration-300"
            >
              Medium
            </SelectItem>
            <SelectItem
              value="hard"
              className="cursor-pointer data-[highlighted]:bg-zinc-900"
            >
              Hard
            </SelectItem>
          </SelectContent>
        </Select>
        <Select onValueChange={handleCompanyChange} value={company}>
          <SelectTrigger className="w-[180px] hover:bg-zinc-800 text-white border border-zinc-800 rounded-lg font-semibold">
            <SelectValue placeholder="Company " />
          </SelectTrigger>
          <SelectContent className="text-white border border-zinc-800 bg-black rounded-lg font-semibold">
            <SelectItem value="default" className="cursor-pointer  data-[highlighted]:bg-zinc-900    ">
              All Companies
            </SelectItem>
            {companies.map((company, idx) => (
              <SelectItem key={idx} value={company} className="cursor-pointer   data-[highlighted]:bg-zinc-900   ">
                {company}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={handleTopicChange} value={topic}>
          <SelectTrigger className="w-[180px] hover:bg-zinc-800 text-white border border-zinc-800 rounded-lg font-semibold ">
            <SelectValue placeholder="Topic" />
          </SelectTrigger>
          <SelectContent className="text-white border border-zinc-800 bg-black rounded-lg font-semibold">
            <SelectItem key={"default"} value={"default"} className="cursor-pointer data-[highlighted]:bg-zinc-900  ">
              All Topics
            </SelectItem>
            {topics.map((topic, idx) => (
              <SelectItem key={idx} value={topic} className="cursor-pointer data-[highlighted]:bg-zinc-900  ">
                {topic}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {records.length > 0 ?
        <>
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
                      <Checkbox
                        id={`checkbox-${item.id}`}
                        checked={checkboxes[item.id] || false}
                        onCheckedChange={(checked: boolean) =>
                          handleCheckedChange(item.id, checked)
                        }
                      />
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
                      <Link
                        href={`https://leetcode.com${item["solution_link"]}`}
                        className="hover:text-zinc-400 transition-colors duration-300"
                      >
                        <SquarePen />
                      </Link>
                    </TableCell>
                    <TableCell className=" text-white translate-x-3 ">
                      {" "}
                      {item.YouTube_Link && (
                        <Link
                          href={item.YouTube_Link}
                          target="_blank"
                          className="hover:text-red-800 text-red-500 transition-colors duration-300"
                        >
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
                        return (
                          <span
                            key={idx}
                            className="inline-block text-emerald-200 bg-emerald-800 font-semibold px-3 py-[2px] rounded-lg m-1 text-xs"
                          >
                            {topic ? topic.trim() : "No Topic"}
                          </span>
                        );
                      })}
                    </TableCell>
                    <TableCell className="border border-zinc-800 text-white text-center h-[60px]">
                      {item["companies"]?.split(",").map((company, idx) => {
                        return (
                          <span
                            key={idx}
                            className="inline-block px-3 bg-sky-900 text-sky-300 py-[2px] rounded-lg m-1 text-xs font-semibold"
                          >
                            {company ? company.trim() : "No Company"}
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
        </> :
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-5xl sm:text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-400 to-yellow-400 bg-clip-text text-transparent">No Leetcode Problems Found </span>
          </h1>
          <h3
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-green-400 bg-clip-text text-transparent">Try using a different set of filters</span>
          </h3>
        </div>
      }
    </>
  );
}