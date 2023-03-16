import React from "react";
import Nav from "@/components/Nav";
import Selfie from "@/components/Selfie";
import BackGround from "@/components/BackGround";

const Mobile = () => {
  return (
    <section
      className="xs:w-[350px]  max-h-min xs:rounded-lg grid  
                        bg-gradient-to-tl from-neutral-400 via-blue-300 to-yellow-600
                        "
    >
      <BackGround>
        <Selfie />
        <Nav />
      </BackGround>
    </section>
  );
};

export default Mobile;
