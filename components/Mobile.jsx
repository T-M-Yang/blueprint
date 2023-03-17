import React from "react";
import Nav from "@/components/Nav";
import Selfie from "@/components/Selfie";
import BackGround from "@/components/BackGround";

const Mobile = () => {
  return (
    <section
      className="xs:w-[350px]  max-h-min xs:rounded-lg grid  
                         [background-size:400% 400%] 
                        bg-animate
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
