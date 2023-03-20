import React from "react";
import Link from "next/link";
import { AiOutlineFolderOpen, AiOutlineFolder } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { FaRegSnowflake } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useScrollDetect } from "../pages/hooks";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolling = useScrollDetect();

  const router = useRouter();
  useEffect(() => {
    const handleRounteChane = () => {
      setIsOpen(false);
    };
    router.events.on("routeChangeComplete", handleRounteChane);
    return () => {
      router.events.off("routeChangeComplete", handleRounteChane);
    };
  }, [router.events]);

  return (
    <nav className="fixed bottom-0 z-50 w-full duration-300">
      <div className="grid py-3 place-content-center ">
        <ul
          className={`${
            isScrolling
              ? "bg-slate-500/30 backdrop-blur-2xl shadow-2xl shadow-slate-800"
              : ""
          } flex items-center justify-center gap-5  text-3xl text-slate-200 p-3 rounded-3xl duration-300 `}
        >
          <li className="relative group">
            <div
              className={`${
                isOpen ? "opacity-100" : "opacity-0"
              } absolute w-fit bg-slate-300/90 rounded-md p-[5px] z-20 backdrop-blur-3xl text-xs duration-300 opacity-0  -top-[45px]`}
            >
              <ul className="flex flex-col space-y-1 underline text-slate-900">
                <li className="group/blog">
                  <Link href="/Blog">
                    <span className="italic transition-all duration-200 group-hover/blog:text-indigo-500">
                      Blog
                    </span>
                  </Link>
                </li>
                <li className="group/portfolio">
                  <Link href="/Portfolio">
                    <span className="italic transition-all duration-200 group-hover/portfolio:text-indigo-500">
                      Portfolio
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer ">
              <p className="absolute text-xs duration-200 opacity-0 -top-4 group-hover:opacity-70">
                Projects
              </p>
              {isOpen ? (
                <div className="text-4xl duration-300 opacity-70 hover:opacity-100">
                  <AiOutlineFolderOpen />
                </div>
              ) : (
                <div className="text-4xl duration-300 opacity-70 hover:opacity-100">
                  <AiOutlineFolder />
                </div>
              )}
            </div>
          </li>
          <li className="relative group">
            <Link href="/">
              <p className="absolute text-xs duration-200 opacity-0 -top-5 group-hover:opacity-70">
                Home
              </p>
              <FaRegSnowflake className="duration-300 opacity-70 hover:opacity-100" />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/Notes">
              <p className="absolute text-xs duration-200 opacity-0 group-hover:opacity-70 -top-5">
                Notes
              </p>
              <CgNotes className="duration-300 opacity-70 hover:opacity-100" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
