import React from "react";
import { motion } from "framer-motion";

const ShowCase = ({
  src,
  ui,
  metaFramework,
  cms,
  css,
  title,
  hasCMS = true,
  cloudPlatform,
}) => {
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
            title={title}
            width={500}
            height={900}
            loading="eager"
            style={{ filter: "drop-shadow(0px 0px 5px)" }}
            src={src}
            className="border-slate-300 scale-[70%] border-[2px] rounded-2xl"
          ></iframe>
          <a
            className="absolute duration-300 hover:-translate-y-0.5 bottom-20 hover:text-slate-300 text-slate-500"
            href={src}
          >
            {src}
          </a>
        </motion.div>
      </div>
      <div className="grid min-h-screen px-7 place-content-center md:col-start-1 gap-y-7">
        <h1 colSpan={2} className="p-3 text-5xl text-left text-slate-100">
          {title}
        </h1>
        <table className="rounded-md table-fixed ">
          <tbody>
            <tr>
              <td className="p-3 border-t border-slate-300/30">UI Library</td>
              <td className="p-3 border-t border-slate-300/30">{ui}</td>
            </tr>
            <tr>
              <td className="p-3 border-t border-slate-300/30">
                Meta Framework
              </td>
              <td className="p-3 border-t border-slate-300/30">
                {metaFramework}
              </td>
            </tr>
            <tr>
              <td className="p-3 border-t border-slate-300/30">
                Cloud Platform
              </td>
              <td className="p-3 border-t border-slate-300/30">
                {cloudPlatform}
              </td>
            </tr>
            {hasCMS && (
              <tr>
                <td className="p-3 border-t border-slate-300/30">CMS</td>
                <td className="p-3 border-t border-slate-300/30">{cms}</td>
              </tr>
            )}
            <tr>
              <td className="p-3 border-t border-slate-300/30">CSS Library</td>
              <td className="p-3 border-t border-slate-300/30">{css}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowCase;
