"use server";

import { userType } from "@/components/contexts/LayoutData";
import connectDB from "./connectDB";

const getUserData = async (session: string): Promise<userType | null> => {
  try {
    const db = await connectDB();

    const sessions = db?.db("auth").collection("sessions");
    const email = await sessions?.findOne({ session_id: session });

    if (!email) {
      return null;
    }

    const users = db?.db("auth").collection("users");
    const user = await users?.findOne({ email: email.email });

    return { name: user?.name };
  } catch (error) {
    console.log("Error finding user: ", error);
    return null;
  }
};

export default getUserData;
