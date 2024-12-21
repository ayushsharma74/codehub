import React from "react";
import { AnimatedShinyTextDemo } from "./LandingShinyText";
import { RainbowButton } from "./ui/rainbow-button";
import WordFadeIn from "./ui/word-fade-in";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";


const roboto = Roboto({ weight: "500", subsets: ["latin"] });

type Props = {
  HeadingText: string;
  SubHeadingText: string;
  ButtonText: string;
};

const LandingContent = (props: Props) => {
  return (
    <div className="flex min-w-[300px] items-center gap-4 justify-center flex-col text-white z-10 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <AnimatedShinyTextDemo />
      <WordFadeIn
        words={props.HeadingText}
        className={` ${roboto.className} text-3xl md:text-5xl lg:text-7xl text-center text-white`}
      />

      
      <p className="text-center font-semibold text-xs md:text-sm lg:text-base">
      Solve <RoughNotation type="box" show={true} color="yellow"> 1,000+ Problems  </RoughNotation> with video solutions asked in various companies here and crack coding interviews at your dream companies<RoughNotation type="underline" show={true} color="yellow"> completely FREE.</RoughNotation> 
        </p>
       
        <Link href={"/main"}>
      <RainbowButton className=" rounded-[7px] mt-3 text-lg text-black font-semibold hover:animate-color-change" style={{ padding: "10px 20px" , background: "#d3dbd5"}}>
        {/* <Button ></Button> */}
        {props.ButtonText}
        {/* </Button> */}
      </RainbowButton>
      </Link>
    </div>
  );
};

export default LandingContent;
