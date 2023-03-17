import React from "react";
import Nav from "@/components/Nav";
import Selfie from "@/components/Selfie";
import BackGround from "@/components/BackGround";

const Mobile = () => {
  return (
    <section className="h-screen max-w-screen bg-gradient-to-tl from-slate-800 via-slate-500 to-slate-400 ">
      <BackGround>
        <Selfie />
        <Nav />
      </BackGround>
    </section>
  );
};

export default Mobile;
