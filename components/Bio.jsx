import React from "react";
import { useState } from "react";
import Image from "next/image";
import { FaQuestion } from "react-icons/fa";
import TimeLine from "./TimeLine";
import { motion } from "framer-motion";

const Bio = ({ useTranslation }) => {
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);
  return (
    <section className="tracking-wide p-7 max-w-screen snap-y snap-mandatory">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="grid min-h-screen space-y-12 snap-center"
      >
        <h1
          className="self-end tracking-wider uppercase text-7xl"
          style={{ filter: "drop-shadow(0 0 10px)" }}
        >
          {useTranslation("Bio:welcome")}
        </h1>
        <p className="text-3xl row-s">
          {useTranslation("Bio:intro")}
          <span className="italic underline cursor-pointer underline-offset-8">
            {" "}
            Snow
          </span>
          <span>.</span>
        </p>
      </motion.div>

      <article className="grid min-h-screen md:mx-auto md:max-w-xl place-content-center snap-center">
        <div className="space-y-6">
          <div className="-translate-x-[5px] translate-y-[18px]">
            <div className="absolute h-[210px] w-[210px] bg-gradient-to-br from-indigo-700/70 to-teal-700 rounded-full blur-sm animate-spainXFast "></div>
          </div>
          <div className="relative">
            <Image
              src="/selfie.png"
              width={200}
              height={200}
              alt="Me at Sapporo, Hokkaido, Japan"
              className=" float-left object-cover object-center aspect-[1/1] rounded-full [shape-outside:circle()] mr-8"
            />
          </div>

          <span
            className="absolute text-2xl hover:-translate-y-[1px] duration-300 -translate-x-20 translate-y-4 cursor-pointer text-indigo-100 hover:rotate-[20deg] hover:text-4xl hover:text-indigo-100"
            onClick={() => setIsQuestionClicked(!isQuestionClicked)}
          >
            <FaQuestion />
          </span>
          <p
            className={`${
              isQuestionClicked ? "block" : "hidden"
            } w-32 p-2 absolute duration-300 text-xs -translate-y-[90px] translate-x-[160px]  rounded-2xl bg-slate-700 `}
          >
            {useTranslation("Bio:whySnow")}
          </p>

          <p className="mr-3 text-lg leading-10 tracking-wider">
            {useTranslation("Bio:bioStart")}
            <code className="bg-indigo-500/70">
              &lt;h1&gt;Hello World!&lt;/h1&gt;
            </code>
            {useTranslation("Bio:bioEnd")}
          </p>
        </div>
      </article>
      <TimeLine useTranslation={useTranslation} />
    </section>
  );
};

export default Bio;
