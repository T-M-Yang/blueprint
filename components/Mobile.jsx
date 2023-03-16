import React from "react";
import Nav from "../components/Nav";

const Mobile = () => {
  return (
    <section className="grid h-screen xs:w-2/3 xs:min-h-2/3 xs:max-h-10">
      <div className=" bg-slate-800/50 backdrop-blur-sm">
        <Nav />
      </div>
    </section>
  );
};

export default Mobile;
