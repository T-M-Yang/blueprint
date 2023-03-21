import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuestion } from "react-icons/fa";
import TimeLine from "./TimeLine";

const Bio = ({ useTranslation }) => {
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);
  return (
    <section className="tracking-wide p-7 max-w-screen snap-y snap-mandatory">
      <div className="grid min-h-screen space-y-12 snap-center">
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
      </div>

      <article className="grid min-h-screen md:mx-auto md:max-w-xl place-content-center snap-center">
        <div className="space-y-6">
          <div className="absolute float-left translate-y-5 h-[200px] w-[200px] bg-gradient-to-br from-indigo-700/70 to-teal-700 rounded-full blur-md animate-spainMedium "></div>
          <div className="relative">
            <Image
              src="/selfie.png"
              width={200}
              height={200}
              alt="Me at Sapporo, Hokkaido, Japan"
              className="float-left object-cover object-center aspect-[1/1] rounded-full [shape-outside:circle()] mr-8"
            />
          </div>

          <span
            className="absolute text-2xl hover:-translate-y-0.5 duration-300 -translate-x-20 translate-y-4 cursor-pointer text-indigo-500 hover:rotate-[20deg] hover:text-4xl hover:text-indigo-700"
            onClick={() => setIsQuestionClicked(!isQuestionClicked)}
          >
            <FaQuestion />
          </span>
          <p
            className={`${
              isQuestionClicked ? "block" : "hidden"
            } w-32 p-2 absolute duration-300 text-xs -translate-y-[60px] translate-x-[160px]  rounded-2xl bg-slate-700 `}
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
