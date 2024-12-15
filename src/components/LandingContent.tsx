import React from "react";
// import RippleButton from "./ui/ripple-button";
// import AnimatedShinyText from "./ui/animated-shiny-text";
import { AnimatedShinyTextDemo } from "./LandingShinyText";
import PulsatingButton from "@/components/ui/pulsating-button";
import { RainbowButton } from "./ui/rainbow-button";

type Props = {};

const LandingContent = () => {
  return (
    <div className="flex items-center gap-4 justify-center flex-col text-white z-10 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <AnimatedShinyTextDemo/>
      <h1 className="text-7xl font-bold text-center">Ab DSA hogi easy, bas shuru karo yahin se!</h1>
      <p className="text-center font-semibold">
        Solve 5,000+ Problems from most famous sheets asked in various companies
        here
      </p>
      <RainbowButton className=" rounded-[7px] bg-zinc-60 mt-3 text-lg font-semibold">Get Started</RainbowButton>
    </div>
  );
};

export default LandingContent;
