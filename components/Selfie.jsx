import React from "react";
import Image from "next/image";

const Selfie = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="relative h-76 w-76">
        <span className="absolute w-full h-full bg-white rounded-full blur-md "></span>
        <span className="absolute w-full h-full bg-blue-500 rounded-full "></span>
        <span className="absolute w-full h-full delay-300 bg-yellow-400 rounded-full "></span>
      </div>
    </div>
  );
};

export default Selfie;
