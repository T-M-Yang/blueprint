import React from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const BackGround = ({ children }) => {
  return (
    <div className="overflow-x-hidden ">
      <Nav />
      <div className="bg-slate-900 backdrop-blur-2xl text-slate-300 ">
        <div className="">
          <div className="blur-3xl">
            <div className="fixed rounded-full w-96 h-96 opacity-40 top-15 blur-md mix-blend-multiply -left-4 bg-violet-700 animate-blob "></div>
            <div className="fixed rounded-full w-96 h-96 opacity-40 top-20 mix-blend-multiply left-4 blur-md bg-sky-700 animation-delay-3 animate-blob"></div>
            <div className="fixed bg-pink-700 rounded-full w-96 h-96 opacity-40 mix-blend-multiply top-13 left-20 blur-md animation-delay-6 animate-blob"></div>
            <div className="fixed top-0 bg-green-700 rounded-full w-96 h-96 opacity-40 mix-blend-multiply left-15 blur-md animation-delay-9 animate-blob"></div>
            <div className="fixed bg-yellow-700 rounded-full bottom-15 w-96 h-96 opacity-40 blur-md mix-blend-multiply left-4 animate-blob animation-delay-11"></div>
            <div className="fixed bg-indigo-500 rounded-full -top-15 w-96 h-96 opacity-40 blur-md mix-blend-multiply left-4 animate-blob animation-delay-13"></div>
          </div>
          <div className="max-w-5xl mx-auto">{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BackGround;
