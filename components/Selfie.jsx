import React from "react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const Selfie = () => {
  return (
    <div className="text-white py-[200px]">
      <ul className="">
        <li className=" animate-spain">
          <SiJavascript />
        </li>
        <li>
          <FaReact />
        </li>
        <li>
          <SiNextdotjs />
        </li>
        <li>
          <SiTailwindcss />
        </li>
      </ul>
    </div>
  );
};

export default Selfie;
