"use server";

import { redirect } from "next/navigation";
import { formState } from "../types/signUp";
import connectDB from "../connectDB";
import hashPassword from "../hashPassword";
import createSession from "../createSession";

const signUp = async (prevState: formState, formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const rePassword = formData.get("rePassword") as string;

  const formState: formState = {
    values: {
      name,
      email,
      password,
      rePassword,
    },
  };

  if (password !== rePassword) {
    formState.error = "Passwords must be same";
    return formState;
  }

  try {
    const users = (await connectDB())?.db("auth").collection("users");
    const existingUser = await users?.findOne({ email });

    if (existingUser) {
      formState.error = "Email is already used";
      return formState;
    }

    const { hash, salt } = await hashPassword(password);

    await users?.insertOne({
      name,
      email,
      password: { hash, salt },
    });

    await createSession(email);
  } catch (error) {
    console.log("Error in sign-up action: ", error);
    return formState;
  }

  redirect("/");
};

export default signUp;
