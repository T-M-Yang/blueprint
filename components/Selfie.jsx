import React from "react";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { TbWorldWww } from "react-icons/tb";

const Selfie = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex justify-center w-full h-full bg-transparent py-52">
        <div className="flex items-center justify-center w-full h-full web-system ">
          <div className="w-96 next-orbit orbit h-96 animate-spainFast">
            <div className="absolute -top-[15px] text-white text-3xl animate-spain">
              <SiNextdotjs style={{ filter: "drop-shadow(0 0 10px)" }} />
            </div>
            <div className="w-72 h-72 react-orbit orbit animate-spainMedium">
              <div className="absolute -top-[15px] text-sky-500 text-3xl animate-spain">
                <FaReact style={{ filter: "drop-shadow(0 0 10px)" }} />
              </div>
              <div className="w-48 h-48 js-orbit orbit animate-spainSlow">
                <div className="absolute -top-[13px] text-yellow-400 text-3xl animate-spain">
                  <SiJavascript
                    style={{
                      borderRadius: "50%",
                      filter: "drop-shadow(0 0 10px)",
                    }}
                  />
                </div>
                <div className="text-orange-500 text-9xl">
                  <TbWorldWww
                    style={{ filter: "drop-shadow(0px 0px 10px orangeRed)" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selfie;
