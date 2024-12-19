"use client";
import React from "react";
import { RainbowButton } from "./ui/rainbow-button";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AccountSettingsDropdownMenu } from "./main/DropdownMenu";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import BlurFade from "./ui/blur-fade";
import WordFadeIn from "./ui/word-fade-in";

const Navbar = () => {
  return (
    <nav className="bg-black flex border-b-2 border-zinc-900  justify-between items-center p-2">
      <Link href={"/"} className="text-white flex gap-2">
        <h1 className="font-semibold text-2xl ml-2">CodeHub</h1>
        <Image
          src={"/coffee-svgrepo-com.svg"}
          alt="logo"
          width={25}
          height={25}
          />
      </Link>
      <div className="text-white flex gap-3 items-center">
        {/* TODO: ADD GITHUB ICON HERE */}
        <RainbowButton className="flex gap-2 font-seminold h-10 text-sm tracking-wider px-4">
          Star on GitHub
          <Image
            src={"/star-svgrepo-com.svg"}
            width={17}
            height={17}
            alt="star"
          />
        </RainbowButton>
        <AccountSettingsDropdownMenu>
          <SignedIn>
              <UserButton />
            </SignedIn>
        </AccountSettingsDropdownMenu>
      </div>
    </nav>
  );
};

export default Navbar;
