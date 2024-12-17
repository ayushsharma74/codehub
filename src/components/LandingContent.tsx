import React from "react";
import { AnimatedShinyTextDemo } from "./LandingShinyText";
import { RainbowButton } from "./ui/rainbow-button";
import WordFadeIn from "./ui/word-fade-in";
import { Roboto } from "next/font/google";
import Link from "next/link";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

type Props = {
  HeadingText: string;
  SubHeadingText: string;
  ButtonText: string;
};

const LandingContent = (props: Props) => {
  return (
    <div className="flex items-center gap-4 justify-center flex-col text-white z-10 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <AnimatedShinyTextDemo />
      {/* <h1 className={` ${roboto.className} text-7xl text-center`}>{props.HeadingText}</h1> */}
      <WordFadeIn
        words={props.HeadingText}
        className={` ${roboto.className} text-2xl md:text-5xl lg:text-7xl text-center text-white`}
      />

      <p className="text-center font-semibold text-xs md:text-sm lg:text-base">{props.SubHeadingText}</p>

      <RainbowButton className=" rounded-[7px] bg-zinc-60 mt-3 text-lg font-semibold">
        <Link href={"/main"}>{props.ButtonText}</Link>
      </RainbowButton>
    </div>
  );
};

export default LandingContent;
