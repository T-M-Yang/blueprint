import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid py-16 bg-slate-900 text-slate-300 place-content-center">
      <div className="grid border-t p-7 gap-y-5 place-items-center">
        <ul className="flex text-xl gap-x-16">
          <il>
            <a
              className="cursor-pointer "
              href="https://github.com/snow-t-m-yang"
            >
              <BsGithub />
            </a>
          </il>
          <il>
            <a
              className="cursor-pointer "
              href="https://www.linkedin.com/in/t-m-yang/"
            >
              <BsLinkedin />
            </a>
          </il>
          <il>
            <a
              className="text-xl cursor-pointer"
              href="https://dev.to/snowyang"
            >
              <FaDev />
            </a>
          </il>
        </ul>
        <a
          className="pb-3 cursor-pointer"
          href="mailto:ytm199891@gmail.com"
          target="_blank"
        >
          ytm199891@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
