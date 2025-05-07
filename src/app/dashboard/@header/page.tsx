"use client";

import { LayoutDataContext } from "@/components/contexts/LayoutData";
import { useContext } from "react";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const { setNavOpen, user } = useContext(LayoutDataContext);

  if (!user) throw new Error("Session not found");

  return (
    <header className="col-span-2 flex items-center justify-center gap-2">
      <h1 className="dashboard-section flex w-fit items-center justify-center gap-2 text-xl font-extrabold">
        <button
          onClick={() => {
            setNavOpen(true);
          }}
        >
          <HiMenu className="size-5" />
        </button>
        Morrow
      </h1>
      <h1 className="dashboard-section max-w-fit truncate text-xl font-extrabold">
        Welcome {user.name}
      </h1>
    </header>
  );
};

export default Header;
