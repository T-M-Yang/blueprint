import React from "react";
import { motion } from "framer-motion";
import { IoSchoolOutline } from "react-icons/io5";
import { FaFreeCodeCamp } from "react-icons/fa";
import { BsFilm } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";

const TimeLine = ({ useTranslation }) => {
  return (
    <div className="grid min-h-screen grid-cols-1 py-64 place-items-center place-content-center snap-center mx-w-5xl">
      {/* college period */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="grid grid-cols-3 row-start-1 place-items-center"
      >
        <div className="space-y-3 md:space-y-7">
          <h2>{useTranslation("Bio:monthNtua")}</h2>

          <h2 className="text-2xl md:text-5xl">
            {useTranslation("Bio:student")}
          </h2>
          <h3>{useTranslation("Bio:ntuaDepartment")}</h3>
        </div>
        <div className="text-7xl md:text-9xl cursor-pointer hover:-translate-y-0.5 duration-300 ">
          <a href="https://www.youtube.com/watch?v=b0YdRmWP5KA" target="_blank">
            <IoSchoolOutline style={{ filter: "drop-shadow(0 0 10px)" }} />
          </a>
        </div>

        <p className="text-xs md:text-lg">
          {useTranslation("Bio:studentDescription")}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="grid row-start-2 place-items-center"
      >
        <div
          className="w-[1px] h-64 bg-slate-100"
          style={{ filter: "drop-shadow(0 0 10px)" }}
        ></div>
      </motion.div>

      {/* writer period */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="grid grid-cols-3 row-start-3 place-items-center"
      >
        <div className="space-y-3 md:space-y-7">
          <h2>{useTranslation("Bio:monthWriter")}</h2>
          <h2 className="text-2xl md:text-5xl">
            {useTranslation("Bio:writer")}
          </h2>
          <div className="w-full h-full row-start-1 bg-slate-100"></div>
        </div>
        <div className="text-5xl cursor-pointer hover:-translate-y-0.5 duration-300  md:text-8xl ">
          <a href="https://www.mirrorfiction.com/news/630" target="_blank">
            <BsFilm style={{ filter: "drop-shadow(0 0 10px)" }} />
          </a>
        </div>
        <p className="text-xs md:text-lg">
          {useTranslation("Bio:writerDescription")}
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="grid grid-cols-1 row-start-4 place-items-center"
      >
        <div
          className="w-[1px] h-64 bg-slate-100"
          style={{ filter: "drop-shadow(0 0 10px)" }}
        ></div>
      </motion.div>

      {/* developer period */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="grid grid-cols-3 row-start-5 place-items-center"
      >
        <div className="space-y-3 md:space-y-7">
          <h2>{useTranslation("Bio:monthDeveloper")}</h2>
          <h2 className="text-2xl md:text-5xl">
            {useTranslation("Bio:developerDescription")}
          </h2>
        </div>
        <div className="cursor-pointer hover:-translate-y-0.5 duration-300  text-7xl  md:text-9xl">
          <a href="https://www.freecodecamp.org/" target="_blank">
            <FaFreeCodeCamp style={{ filter: "drop-shadow(0 0 10px)" }} />
          </a>
        </div>

        <p className="text-xs md:text-lg">{useTranslation("Bio:developer")}</p>
      </motion.div>
      {/* Future */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="grid grid-cols-1 row-start-6 place-items-center"
      >
        <div
          className="w-[1px] h-64 bg-slate-100"
          style={{ filter: "drop-shadow(0 0 10px)" }}
        ></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="grid grid-cols-1 row-start-7 place-items-center"
      >
        <div className="pt-10 md:text-[300px] text-[200px] cursor-pointer">
          <CgInfinity style={{ filter: "drop-shadow(0 0 10px)" }} />
        </div>
      </motion.div>
    </div>
  );
};

export default TimeLine;
