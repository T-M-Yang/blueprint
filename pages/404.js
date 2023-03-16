import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen bg-slate-900/70 backdrop-blur-xl">
      <div className="flex items-center justify-center">
        <div className="">
          <h2 className="text-6xl leading-loose text-transparent p-9 bg-clip-text bg-gradient-to-l from-violet-500 via-indigo-300 to-rose-500 md:text-8xl md:p-20">
            This is not a valid page, would you like to go back{" "}
            <Link href="/">
              <b className="p-1 duration-300 border-b-2 hover:border hover:text-5xl md:hover:text-9xl hover:capitalize">
                home?
              </b>
            </Link>
          </h2>
          <div className="absolute w-64 h-64 rounded-full opacity-50 top-15 blur-lg mix-blend-multiply -left-4 bg-violet-400 animate-bubble"></div>
          <div className="absolute w-64 h-64 rounded-full opacity-50 top-1/2 mix-blend-multiply right-15 blur-lg bg-sky-400 animation-delay-2000"></div>
          <div className="absolute w-64 h-64 bg-pink-400 rounded-full opacity-50 mix-blend-multiply top-13 left-20 blur-lg animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
