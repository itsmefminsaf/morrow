"use client";

import { LayoutDataContext } from "@/components/contexts/LayoutData";
import { useContext } from "react";
import { HiX } from "react-icons/hi";

const Nav = () => {
  const { navOpen, setNavOpen } = useContext(LayoutDataContext);
  return (
    <nav
      className={`${navOpen ? "flex" : "hidden"} fixed top-0 left-0 h-screen min-w-72 list-none flex-col gap-5 bg-zinc-800/50 p-5 pt-16 text-white backdrop-blur-2xl`}
    >
      <button
        onClick={() => {
          setNavOpen(false);
        }}
      >
        <HiX className="absolute top-4 right-4 size-5" />
      </button>
      <li>Overview</li>
      <li>Tasks</li>
      <li>Profile</li>
      <li>About morrow</li>
    </nav>
  );
};

export default Nav;
