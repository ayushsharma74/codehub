import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
type Props = {}

const SelectionBar = (props: Props) => {
  return (
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
  )
}

export default SelectionBar