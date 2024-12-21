"use client"
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex  items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-zinc-800  bg-zinc-900  text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-zinc-800 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center text-zinc-400 justify-center px-4 py-1 transition ease-out hover:text-zinc-400 hover:duration-100 text-xs font-semibold">
          <button >✨ Proudly OSS</button>

          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
