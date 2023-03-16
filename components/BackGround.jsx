import React from "react";

const BackGround = ({ children }) => {
  return (
    <div className="">
      <div className="bg-slate-900/70 backdrop-blur-xl">
        <div className="flex items-center justify-center">
          {/* <div className="xs:hidden">
            <div className="absolute w-64 h-64 rounded-full opacity-50 top-15 blur-lg mix-blend-multiply -left-4 bg-violet-400 animate-blob"></div>
            <div className="absolute w-64 h-64 rounded-full opacity-50 top-1/2 mix-blend-multiply right-15 blur-lg bg-sky-400 animate-blob animation-delay-2000"></div>
            <div className="absolute w-64 h-64 bg-pink-400 rounded-full opacity-50 mix-blend-multiply top-13 left-20 blur-lg animate-blob animation-delay-4000"></div>
          </div> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default BackGround;