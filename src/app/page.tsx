import { LandingPage } from "@/components/LandingPage";
import BlurFade from "@/components/ui/blur-fade";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black h-[calc(100vh-58px)]">
      <LandingPage />
      <div className="bg-black relative bottom-16">
        <BlurFade delay={0.25 * 5}>
          <NeonGradientCard
            className="max-w-[1000px] h-fit mx-auto"
            borderSize={1}
            neonColors={{
              firstColor: "yellow , orange",
              secondColor: "blue, green",
            }}
          >
            <Image
              src={"/dashboard.png"}
              alt="Image"
              width={1920}
              height={1080}
            ></Image>
          </NeonGradientCard>
        </BlurFade>
        <div className="mt-20">
          <div className="flex bg-black w-full h-auto justify-between">
            <h1 className="text-xs md:text-sm lg:text-sm font-semibold text-white ml-3 mb-2">
              Developed With प्यार By{" "}
              <Link
                href={"https://x.com/ayusssshhhhhhh"}
                className="underline hover:no-underline hover:text-zinc-400 transition-colors duration-200"
                target="_blank"
              >
                {" "}
                ayush{" "}
              </Link>
            </h1>
            <div className="text-2xl font-semibold text-white flex gap-3 mr-2 mb-2">
              <Link
                href={"https://twitter.com/ayusssshhhhhhh"}
                className="underline hover:text-zinc-400 transition-colors duration-200"
                target="_blank"
              >
                <FaXTwitter />
              </Link>
              <Link
                href={"https://discord.gg/butxCZyntw"}
                className="underline hover:text-zinc-400 transition-colors duration-200"
                target="_blank"
              >
                <FaDiscord />
              </Link>
              <Link
                href={"https://github.com/ayushsharma74"}
                className="underline hover:text-zinc-400 transition-colors duration-200"
                target="_blank"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
