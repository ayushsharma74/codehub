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
        <div className=" justify-center items-center h-fit bg-black mt-40 gap-2 flex-col hidden md:flex lg:flex">
          <h1 className="text-white text-3xl lg:text-5xl font-bold">
            Love from Twitter परिवार 🫶
          </h1>
          <div className="flex gap-1 mt-5 ">
            <div className="flex gap-1">
              <blockquote
                className="twitter-tweet"
                data-conversation="none"
                data-theme="dark"
              >
                <p lang="en" dir="ltr">
                  Wow so good🫶🏼
                </p>
                &mdash; _blink_forever_ (@blink13915){" "}
                <a href="https://twitter.com/blink13915/status/1870480182399652249?ref_src=twsrc%5Etfw">
                  December 21, 2024
                </a>
              </blockquote>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                // // charset="utf-8"
              ></script>
              <blockquote
                className="twitter-tweet"
                data-conversation="none"
                data-dnt="true"
                data-theme="dark"
              >
                <p lang="en" dir="ltr">
                  Incredible yaarrr sachmeeee, it&#39;s too good! 🔥
                </p>
                &mdash; Shivangi Sharma (@Shivangi_scene){" "}
                <a href="https://twitter.com/Shivangi_scene/status/1870491272231743879?ref_src=twsrc%5Etfw">
                  December 21, 2024
                </a>
              </blockquote>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                // // charset="utf-8"
              ></script>
              <blockquote
                className="twitter-tweet"
                data-conversation="none"
                data-theme="dark"
              >
                <p lang="en" dir="ltr">
                  looks cool! bhai keep it up
                </p>
                &mdash; Orca (@orca_x27){" "}
                <a href="https://twitter.com/orca_x27/status/1870684365195460843?ref_src=twsrc%5Etfw">
                  December 22, 2024
                </a>
              </blockquote>{" "}
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                // charset="utf-8"
              ></script>
            </div>
          </div>
          <div className="flex gap-1 ">
            <blockquote
              className="twitter-tweet"
              data-conversation="none"
              data-theme="dark"
            >
              <p lang="hi" dir="ltr">
                Nice bhai 💯
              </p>
              &mdash; Vedangi (@Vedangitt){" "}
              <a href="https://twitter.com/Vedangitt/status/1870443175879598566?ref_src=twsrc%5Etfw">
                December 21, 2024
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              // charset="utf-8"
            ></script>
            <blockquote
              className="twitter-tweet"
              data-conversation="none"
              data-theme="dark"
            >
              <p lang="tl" dir="ltr">
                Are bawal bna diye ho, nice bro 👌🏻🔥
              </p>
              &mdash; tushar💫 (@tushxr05){" "}
              <a href="https://twitter.com/tushxr05/status/1870442244194607133?ref_src=twsrc%5Etfw">
                December 21, 2024
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              // charset="utf-8"
            ></script>
            <blockquote
              className="twitter-tweet"
              data-conversation="none"
              data-theme="dark"
            >
              <p lang="hi" dir="ltr">
                Nice bhai 💯
              </p>
              &mdash; Vedangi (@Vedangitt){" "}
              <a href="https://twitter.com/Vedangitt/status/1870443175879598566?ref_src=twsrc%5Etfw">
                December 21, 2024
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              // charset="utf-8"
            ></script>
          </div>
          <div className="flex gap-1 ">
            <blockquote
              className="twitter-tweet"
              data-conversation="none"
              data-theme="dark"
            >
              <p lang="en" dir="ltr">
                Brooo. It is a lot of work.
                <br />
                And every bit of it is dope!
              </p>
              &mdash; Ashwani kr kaushik (@ashwani346){" "}
              <a href="https://twitter.com/ashwani346/status/1870497618184532287?ref_src=twsrc%5Etfw">
                December 21, 2024
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              // charset="utf-8"
            ></script>
            <blockquote
              className="twitter-tweet"
              data-conversation="none"
              data-theme="dark"
            >
              <p lang="en" dir="ltr">
                keep going good work .
              </p>
              &mdash; Anurag (@IamAxN){" "}
              <a href="https://twitter.com/IamAxN/status/1870724148055646444?ref_src=twsrc%5Etfw">
                December 22, 2024
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              // charset="utf-8"
            ></script>
            <blockquote
              className="twitter-tweet"
              data-conversation="none"
              data-theme="dark"
            >
              <p lang="en" dir="ltr">
                hey ayush just brilliant project
              </p>
              &mdash; Surya (@surya_iamsurya){" "}
              <a href="https://twitter.com/surya_iamsurya/status/1870494764786979027?ref_src=twsrc%5Etfw">
                December 21, 2024
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              // charset="utf-8"
            ></script>
          </div>
          <div className="flex gap-1">
            <blockquote
              className="twitter-tweet"
              data-conversation="none"
              data-theme="dark"
            >
              <p lang="tl" dir="ltr">
                bhai kaise banato ho yaar aysa ui damn bro ...
              </p>
              &mdash; Anshu Aditya (@AnshuAd14312398){" "}
              <a href="https://twitter.com/AnshuAd14312398/status/1870476614649176355?ref_src=twsrc%5Etfw">
                December 21, 2024
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              // charset="utf-8"
            ></script>
            <blockquote
              className="twitter-tweet"
              data-conversation="none"
              data-theme="dark"
            >
              <p lang="en" dir="ltr">
                Good one brother 💯
              </p>
              &mdash; Parth Lahoti (@parth540){" "}
              <a href="https://twitter.com/parth540/status/1870468724622594138?ref_src=twsrc%5Etfw">
                December 21, 2024
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              // charset="utf-8"
            ></script>
            <blockquote
              className="twitter-tweet"
              data-conversation="none"
              data-theme="dark"
            >
              <p lang="en" dir="ltr">
                Good project bhai
              </p>
              &mdash; Mani Yadla (@mani_yadla_){" "}
              <a href="https://twitter.com/mani_yadla_/status/1870460554067988689?ref_src=twsrc%5Etfw">
                December 21, 2024
              </a>
            </blockquote>{" "}
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              // // charset="utf-8"
            ></script>
          </div>
        </div>
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
