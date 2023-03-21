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
          <span>。</span>
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
            } w-32 p-2 absolute duration-300 text-xs -translate-y-[60px] translate-x-[160px]  rounded-2xl bg-slate-700/90 backdrop-blur-3xl`}
          >
            因為我實在太喜歡雪了，所以我把英文名字改成了Snow。
          </p>

          <p className="mr-3 text-lg leading-10 tracking-wider">
            <span style={{ filter: "drop-shadow(0 0 10px)" }}>
              編程改變了我的人生。
            </span>
            身為一名從小就不擅長數學的文科生，我一直以為編程不可能與自己有所交集。但是就在2022年3月13號那一天，我不知道是那一根筋不對，第一次在VScode中用HTML敲下了
            <code className="bg-slate-700">
              &lt;h1&gt;Hello World!&lt;/h1&gt;
            </code>
            後，我發現自己踏進了新世界的大門，一去不復返。
          </p>
        </div>
      </article>
      <TimeLine />
    </section>
  );
};

export default Bio;
