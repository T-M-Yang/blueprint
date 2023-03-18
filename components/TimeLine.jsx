import React from "react";
import { motion } from "framer-motion";

const variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    rotate: 0,
    transition: {
      type: "spring",
      duration: 1.3,
    },
  },
};
const TimeLine = () => {
  return (
    <motion.div
      initial="opacity: 0 "
      whileInView="opacity: 1"
      viewport={{ once: false, amount: 0.3 }}
      className="grid min-h-screen grid-cols-3 py-64 text-xl place-items-center place-content-center gap-y-48 snap-center"
    >
      <div className="row-start-1">
        <h2>2017</h2>
        <h2 className="text-3xl">ntua</h2>
      </div>
      <div className="row-start-2">
        <h2>2021</h2>
        <h2 className="text-3xl">Writer</h2>
      </div>
      <div className="row-start-3">
        <h2>2022</h2>
        <h2 className="text-3xl">Developer</h2>
      </div>

      <div className="w-full h-full row-start-1 bg-slate-100"></div>
      <div className="row-start-2"></div>
      <div className="row-start-3"></div>

      <motion.div className="row-start-1 text-sm">
        <h3>studying film</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          deserunt accusamus repudiandae illo iure error!
        </p>
      </motion.div>
      <motion.div className="row-start-2 text-sm">
        <h3>Being a writer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          deserunt accusamus repudiandae illo iure error!
        </p>
      </motion.div>
      <motion.div className="row-start-3 text-sm">
        <h3>becoming a developer</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          deserunt accusamus repudiandae illo iure error!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TimeLine;
