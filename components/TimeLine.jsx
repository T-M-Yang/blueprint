import React from "react";
import { motion } from "framer-motion";
import { IoSchoolOutline } from "react-icons/io5";
import { FaFreeCodeCamp } from "react-icons/fa";
import { BsFilm } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";

const TimeLine = () => {
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
        <div className="space-y-3">
          <h2>7月 2017</h2>
          <h2 className="text-3xl">國立臺灣藝術大學</h2>
          <h3>電影系</h3>
        </div>
        <div className="text-7xl cursor-pointer hover:-translate-y-0.5 duration-300 ">
          <a href="https://www.youtube.com/watch?v=b0YdRmWP5KA" target="_blank">
            <IoSchoolOutline style={{ filter: "drop-shadow(0 0 10px)" }} />
          </a>
        </div>

        <p>
          隻身來到異鄉求學。過程中發現自己與電影系的格格不入，於是重拾兒時夢想——成為一名小說家。
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
        <div className="space-y-3">
          <h2>4月 2021</h2>
          <h2 className="text-3xl">小說家 / 編劇</h2>
          <div className="w-full h-full row-start-1 bg-slate-100"></div>
        </div>
        <div className="text-6xl cursor-pointer hover:-translate-y-0.5 duration-300 ">
          <a href="https://www.mirrorfiction.com/news/630" target="_blank">
            <BsFilm style={{ filter: "drop-shadow(0 0 10px)" }} />
          </a>
        </div>

        <p>
          很幸運地在大學的最後階段贏得了「鏡文學百萬影視小說」的評審獎，讓我如願以償地成為了一名小說家。同時我開始進入臺灣影視業界，開發影視劇本。
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
        <div className="space-y-3">
          <h2>3月 2022</h2>
          <h2 className="text-3xl">成為開發者</h2>
        </div>
        <div className="cursor-pointer hover:-translate-y-0.5 duration-300  text-8xl">
          <a href="https://www.freecodecamp.org/" target="_blank">
            <FaFreeCodeCamp style={{ filter: "drop-shadow(0 0 10px)" }} />
          </a>
        </div>

        <p>
          隨著我接觸越多有關Web
          Development的知識，我就越深刻地感覺到這才是我日後想要一直前進的方向。於是我決定是時候要放下已經達成了的夢想，踏進人生的下一個階段。
        </p>
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
        <div className="pt-10 text-[200px] cursor-pointer">
          <a href="https://www.freecodecamp.org/">
            <CgInfinity style={{ filter: "drop-shadow(0 0 10px)" }} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default TimeLine;
