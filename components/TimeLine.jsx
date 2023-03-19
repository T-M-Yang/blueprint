import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoSchoolOutline } from "react-icons/io5";
import { FaFreeCodeCamp } from "react-icons/fa";
import { BsFilm } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";

const TimeLine = () => {
  return (
    <div className="grid min-h-screen grid-cols-1 py-64 place-items-center place-content-center snap-center">
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
        <div className="space-y-3">
          <h2>July 2017</h2>
          <h2 className="text-3xl">National Taiwan University of Art</h2>
          <h3>Department of Motion Pictures</h3>
        </div>
        <div className="text-7xl">
          <IoSchoolOutline style={{ filter: "drop-shadow(0 0 10px)" }} />
        </div>

        <div className="">
          <h3>atudying film</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            deserunt accusamus repudiandae illo iure error!
          </p>
        </div>
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
        <div className="space-y-3">
          <h2>April 2021</h2>
          <h2 className="text-3xl">Novelist / Scriptwriter</h2>
          <div className="w-full h-full row-start-1 bg-slate-100"></div>
        </div>
        <div className="text-6xl">
          <BsFilm style={{ filter: "drop-shadow(0 0 10px)" }} />
        </div>
        <motion.div className="">
          <h3>atudying film</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            deserunt accusamus repudiandae illo iure error!
          </p>
        </motion.div>
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
        <div className="space-y-3">
          <h2>March 2023</h2>
          <h2 className="text-3xl">Becoming a Developer</h2>
        </div>
        <div className=" text-8xl">
          <div>
            <FaFreeCodeCamp style={{ filter: "drop-shadow(0 0 10px)" }} />
          </div>
        </div>
        <div className="">
          <h3>atudying film</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            deserunt accusamus repudiandae illo iure error!
          </p>
        </div>
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
        <div className="pt-10 text-[200px]">
          <div>
            <CgInfinity style={{ filter: "drop-shadow(0 0 10px)" }} />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimeLine;
