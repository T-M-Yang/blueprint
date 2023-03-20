import React from "react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="max-w-5xl min-h-screen mx-auto md:grid md:grid-flow-col md:place-content-center md:place-items-center">
      <div className="grid min-h-screen place-content-center place-items-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative flex flex-col items-center justify-center"
        >
          <iframe
            title="A blog website that I made for my friend."
            width={500}
            height={900}
            loading="eager"
            style={{ filter: "drop-shadow(0px 0px 7px)" }}
            src="https://wynns.vercel.app/"
            className="border-slate-300 scale-[70%] border-[2px] rounded-2xl"
          ></iframe>
          <a
            className="absolute duration-300 hover:-translate-y-0.5 bottom-20 hover:text-slate-300 text-slate-500"
            href="https://wynns.vercel.app/"
          >
            https://wynns.vercel.app/
          </a>
        </motion.div>
      </div>
      <div className="grid min-h-screen px-7 place-content-center md:col-start-1 gap-y-7">
        <h1 colSpan={2} className="p-3 text-5xl text-left">
          A Blog site that I made for my Malaysian friend
        </h1>
        <table className="rounded-md table-fixed ">
          <tbody>
            <tr>
              <td className="p-3 border-t border-slate-300/30">UI Library</td>
              <td className="p-3 border-t border-slate-300/30">React.js</td>
            </tr>
            <tr>
              <td className="p-3 border-t border-slate-300/30">
                Meta Framework
              </td>
              <td className="p-3 border-t border-slate-300/30">Next.js</td>
            </tr>
            <tr>
              <td className="p-3 border-t border-slate-300/30">CMS</td>
              <td className="p-3 border-t border-slate-300/30">Sanity</td>
            </tr>
            <tr>
              <td className="p-3 border-t border-slate-300/30">CSS Library</td>
              <td className="p-3 border-t border-slate-300/30">Tailwind</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blog;
