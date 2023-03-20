import React from "react";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center max-w-5xl py-10 mx-auto md:leading-relaxed xs:h-screen min-w-screen">
      <div className="flex items-center justify-center">
        <div className="">
          <h2 className="text-6xl leading-loose text-transparent p-9 bg-clip-text bg-gradient-to-l from-violet-500 via-indigo-300 to-rose-500 md:text-8xl md:p-20">
            This is not a valid page, would you like to go back{" "}
            <Link href="/">
              <b className="p-1 border-b-2 ">HOME</b>?
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
