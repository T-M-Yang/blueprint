import React from "react";

const BackGround = ({ children }) => {
  return (
    <div className="max-h-screen overflow-hidden max-w-screen">
      <div className="bg-slate-900/90 backdrop-blur-3xl">
        <div className="flex items-center justify-center">
          <div className="blur-3xl">
            <div className="absolute rounded-full opacity-40 w-[2000px] h-[2000px] top-15 blur-lg mix-blend-multiply -left-4 bg-violet-700 animate-blob"></div>
            <div className="absolute rounded-full opacity-40 w-[2000px] h-[2000px] top-20 mix-blend-multiply left-4 blur-lg bg-sky-700 animation-delay-3 animate-blob"></div>
            <div className="absolute bg-pink-700 rounded-full opacity-40 w-[2000px] h-[2000px] mix-blend-multiply top-13 left-20 blur-lg animation-delay-6 animate-blob"></div>
            <div className="absolute top-0 bg-green-700 rounded-full opacity-40 w-[2000px] h-[2000px] mix-blend-multiply left-15 blur-lg animation-delay-9 animate-blob"></div>
            <div className="absolute rounded-full opacity-40 w-[2000px] h-[2000px] top-15 blur-lg mix-blend-multiply -left-4 bg-violet-700 animate-blob animation-delay-11"></div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default BackGround;
