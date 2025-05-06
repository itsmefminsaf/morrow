"use server";

import { redirect } from "next/navigation";
import connectDB from "../connectDB";
import createSession from "../createSession";
import { formState } from "../types/signIn";
import comparePassword from "../comparePassword";

const signIn = async (prevState: formState, formData: FormData) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const formState: formState = {
    values: {
      email,
      password,
    },
  };

  try {
    const users = (await connectDB())?.db("auth").collection("users");
    const existingUser = await users?.findOne({ email });

    if (!existingUser) {
      formState.error = "User not found";
      return formState;
    }

    const validPassword = await comparePassword(
      password,
      existingUser.password,
    );

    if (!validPassword) {
      formState.error = "Invalid password";
      return formState;
    }
    await createSession(email);
  } catch (error) {
    console.log("Error in sign-up action: ", error);
    return formState;
  }

  redirect("/");
};

export default signIn;
