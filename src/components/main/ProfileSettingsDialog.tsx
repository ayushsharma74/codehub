import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { LogOut, Settings } from 'lucide-react';


const ProfileSettingsDialog = ({children}: {children: React.ReactNode}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-60 px-3 bg-black border font-semibold border-zinc-800 rounded-lg text-white">
        <DropdownMenuLabel className="border-b border-zinc-800 py-3">
          My Account ✨{" "}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="text-white fle">
            <DropdownMenuItem className="flex gap-3 hover:bg-zinc-900 cursor-pointer mb-2 px-4 py-3">
              <Settings strokeWidth={3} />
              Settings
            </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuItem className="flex gap-3 items-center hover:bg-zinc-900 cursor-pointer mb-2 px-4 py-3">
          <LogOut strokeWidth={3} />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileSettingsDialog