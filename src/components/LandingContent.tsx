import React from "react";
// import RippleButton from "./ui/ripple-button";
// import AnimatedShinyText from "./ui/animated-shiny-text";
import { AnimatedShinyTextDemo } from "./LandingShinyText";
import { RainbowButton } from "./ui/rainbow-button";
import WordFadeIn from "./ui/word-fade-in";
import {Roboto} from "next/font/google"
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";

const roboto = Roboto({weight: "500", subsets: ["latin"]})

type Props = {
    HeadingText: string,
    SubHeadingText: string
    ButtonText: string
};

const LandingContent = (props: Props) => {
  return (
    <div className="flex items-center gap-4 justify-center flex-col text-white z-10 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <AnimatedShinyTextDemo/>
      {/* <h1 className={` ${roboto.className} text-7xl text-center`}> */}
        <WordFadeIn words={props.HeadingText} className={` ${roboto.className} text-7xl text-center text-white`} />
        
        {/* </h1> */}
      <p className="text-center font-semibold">
        {props.SubHeadingText}
      </p>
      <RainbowButton className=" rounded-[7px] bg-zinc-60 mt-3 text-lg font-semibold"><RegisterLink postLoginRedirectURL="/home">Get Started</RegisterLink></RainbowButton>
    </div>
  );
};

export default LandingContent;
