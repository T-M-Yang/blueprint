import React from "react";
import Link from "next/link";
import { AiOutlineFolderOpen, AiOutlineFolder } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { FaRegSnowflake } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

const Nav = () => {
  return (
    <nav className="fixed bottom-0 w-full">
      <div className="grid place-content-center">
        <ul className="flex items-center justify-center gap-5 py-5 text-3xl text-slate-300 ">
          <li className="relative group">
            <Link href="/Folders" className="">
              <p className="absolute text-xs duration-200 opacity-0 group-hover:opacity-70 -top-5">
                Projects
              </p>
              <AiOutlineFolder className="text-4xl" />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/">
              <p className="absolute text-xs duration-200 opacity-0 -top-5 group-hover:opacity-70">
                Home
              </p>
              <FaRegSnowflake />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/Notes">
              <p className="absolute text-xs duration-200 opacity-0 group-hover:opacity-70 -top-5">
                Notes
              </p>
              <CgNotes />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
