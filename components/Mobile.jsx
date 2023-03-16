import React from "react";
import Nav from "../components/Nav";
import Selfie from "@/components/Selfie";
import BackGround from "./BackGround";

const Mobile = () => {
  return (
    <section>
      <BackGround>
        <Selfie />
        <Nav />
      </BackGround>
    </section>
  );
};

export default Mobile;
