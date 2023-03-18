import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaQuestion } from "react-icons/fa";

const Bio = () => {
  const [isQuestionClicked, setIsQuestionClicked] = useState(false);
  return (
    <section className="p-7 max-w-screen snap-y">
      <div className="grid min-h-screen snap-center">
        <h1 className="self-end tracking-wider uppercase text-7xl">
          Welcome to my space
        </h1>
        <p className="mt-6 text-3xl row-s">
          My name is TieMing Yang, a self-taught Front-end Developer, you can
          call me
          <span className="italic underline cursor-pointer underline-offset-8">
            {" "}
            Snow
          </span>
          <span>.</span>
        </p>
      </div>

      <article className="grid min-h-screen place-content-center snap-center">
        <div className="space-y-6">
          <p className="">
            I was born in Shanghai , grow up in Macau and currently living in{" "}
            Taiwan
          </p>
          <div className="absolute float-left h-[200px] w-[200px] bg-gradient-to-br from-indigo-700/70 to-teal-700 rounded-full blur-md animate-spainMedium"></div>
          <div className="relative">
            <Image
              src="/selfie.png"
              width={200}
              height={200}
              alt="Me at Sapporo, Hokkaido, Japan"
              className="float-left object-cover object-center aspect-[1/1] rounded-full [shape-outside:circle()] mr-6"
            />
          </div>

          <span
            className="absolute text-2xl duration-300 -translate-x-20 translate-y-4 cursor-pointer text-indigo-700/70 hover:rotate-[20deg] hover:text-4xl hover:text-indigo-700"
            onClick={() => setIsQuestionClicked(!isQuestionClicked)}
          >
            <FaQuestion />
          </span>
          <p
            className={`${
              isQuestionClicked ? "block" : "hidden"
            } w-32 p-2 absolute duration-300 text-xs -translate-y-[60px] translate-x-[160px]  rounded-2xl bg-slate-700/90 backdrop-blur-3xl `}
          >
            I like snow too much, so I changed my English name to Snow.
          </p>

          <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
            magni sed iure fugiat sit maxime dicta optio culpa et maiores
            consectetur, aspernatur tenetur inventore, nemo aut veniam vitae
            sunt. Ea necessitatibus voluptates omnis atque nam quod, voluptatum
            iusto repudiandae unde mollitia odio. Ut in mollitia enim, labore
            inventore dolorem nobis?
          </p>
        </div>
      </article>
    </section>
  );
};

export default Bio;
