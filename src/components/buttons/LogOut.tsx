"use client";

import logOut from "@/lib/actions/logOut";

const LogOut = () => {
  return (
    <button
      className="rounded-2xl bg-white px-4 py-2 text-2xl font-bold"
      onClick={logOut}
    >
      Log out
    </button>
  );
};

export default LogOut;
