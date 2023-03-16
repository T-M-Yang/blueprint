import React from "react";
import Link from "next/link";
import { AiOutlineFolderOpen, AiOutlineFolder } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

const Nav = () => {
  return (
    <nav className="fixed bottom-0 w-full">
      <div className="border w-1/2 mx-auto">
        <ul className="flex justify-center items-center gap-3 text-3xl">
          <li>
            <Link href="/Folders">
              <AiOutlineFolder />
            </Link>
          </li>
          <li>
            <Link href="/">
              <i>Ψ</i>
            </Link>
          </li>
          <li className="text-2xl">
            <Link href="/Notes">
              <BsPencilSquare />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
