import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3Full } from "react-icons/di";
import { motion } from "framer-motion";
import Link from "next/link";

const WebSystem = () => {
  return (
    <motion.div
      className="w-full min-h-screen"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.5,
        delay: 0.7,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="flex justify-center w-full h-full bg-transparent">
        <div className="flex items-center justify-center w-full h-full web-system ">
          <div className="w-96 xl:w-[700px] xl:h-[700px] next-orbit orbit h-96 animate-spainFast">
            <div className="absolute -top-[15px] text-white text-3xl animate-spainXFast cursor-pointer">
              <Link href="https://nextjs.org/">
                <SiNextdotjs style={{ filter: "drop-shadow(0 0 10px)" }} />
              </Link>
            </div>
            <div className="w-72 xl:w-[550px]  xl:h-[550px] h-72 react-orbit orbit animate-spainMedium">
              <div className="absolute xl:text-[50px] xl:-top-[25px]  -top-[15px] text-sky-500 text-3xl animate-spainXLFast cursor-pointer">
                <Link href="https://react.dev/">
                  <FaReact style={{ filter: "drop-shadow(0 0 10px)" }} />
                </Link>
              </div>

              <div className="w-48 xl:w-[400px] xl:h-[400px]  h-48 js-orbit orbit animate-spainSlow">
                <div className="absolute xl:text-[70px] xl:-top-[30px]  -top-[13px] text-yellow-400 text-3xl animate-spainXLFast cursor-pointer">
                  <Link href="https://tc39.es/">
                    <SiJavascript
                      style={{
                        borderRadius: "50%",
                        filter: "drop-shadow(0 0 10px)",
                      }}
                    />
                  </Link>
                </div>
                <div className="absolute xl:text-3xl top-[90px] left-[10px] text-orange-700 text-2xl animate-spain cursor-pointer">
                  <Link href="https://tc39.es/">
                    <BsGit
                      style={{
                        filter: "drop-shadow(0 0 10px)",
                        borderRadius: "50%",
                      }}
                    />
                  </Link>
                </div>
                <div className="absolute text-xl text-blue-500 xl:-top-[0px] xl:left-[120px] xl:text-[39px] -top-[33px] left-[70px] cursor-pointer animate-spainXFast">
                  <Link href="https://www.typescriptlang.org/">
                    <SiTypescript
                      style={{
                        borderRadius: "50%",
                        filter: "drop-shadow(0 0 10px)",
                      }}
                    />
                  </Link>
                </div>

                <div className="absolute xl:text-7xl xl:-bottom-[40px] -bottom-[13px] text-yellow-500 text-3xl animate-spain cursor-pointer">
                  <Link href="https://www.w3.org/html/">
                    <AiFillHtml5
                      style={{
                        filter: "drop-shadow(0 0 10px)",
                      }}
                    />
                  </Link>
                </div>
                <div className="absolute xl:text-7xl xl:-bottom-[5px]  right-[50px] -bottom-[9px] text-sky-500 text-3xl animate-spain cursor-pointer">
                  <Link href="https://www.w3.org/Style/CSS/Overview.en.html">
                    <DiCss3Full
                      style={{
                        filter: "drop-shadow(0 0 10px)",
                      }}
                    />
                  </Link>
                </div>
                <div className="absolute xl:text-5xl xl:-bottom-[40px]  -bottom-[27px] right-[50px] text-sky-500 text-xl animate-spainXFast cursor-pointer">
                  <Link href="https://tailwindcss.com/">
                    <SiTailwindcss
                      style={{ filter: "drop-shadow(0 0 10px)" }}
                    />
                  </Link>
                </div>
                <div className="text-red-500 animate-spainFast xl:text-[300px] cursor-pointer text-9xl ">
                  <Link href="https://www.w3.org/">
                    <TbWorldWww
                      style={{ filter: "drop-shadow(0px 0px 10px red)" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WebSystem;
