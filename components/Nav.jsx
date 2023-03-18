import React from "react";
import Link from "next/link";
import { AiOutlineFolderOpen, AiOutlineFolder } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { FaRegSnowflake } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <nav className="fixed bottom-0 z-50 w-full">
      <div className="grid place-content-center">
        <ul className="flex items-center justify-center gap-5 py-5 text-3xl text-slate-200">
          <li className="relative group">
            <div
              className={`${
                isOpen ? "opacity-70" : "opacity-0"
              } absolute text-xs duration-300 opacity-0  -top-[17px]`}
            >
              <ul className="flex flex-col underline">
                <li>
                  <Link href="/Projects">Projects</Link>
                </li>
              </ul>
            </div>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer ">
              {isOpen ? (
                <div className="text-4xl opacity-70">
                  <AiOutlineFolderOpen />
                </div>
              ) : (
                <div className="text-4xl opacity-70">
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
              <FaRegSnowflake className="opacity-70" />
            </Link>
          </li>
          <li className="relative group">
            <Link href="/Notes">
              <p className="absolute text-xs duration-200 opacity-0 group-hover:opacity-70 -top-5">
                Notes
              </p>
              <CgNotes className="opacity-70" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
