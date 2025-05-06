"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const logOut = async () => {
  (await cookies()).delete("session_i");
  redirect("/auth/sign-in");
};

export default logOut;
