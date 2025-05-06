import crypto from "crypto";

import connectDB from "./connectDB";
import { cookies } from "next/headers";

const createSession = async (email: string) => {
  try {
    const session_id = crypto.randomBytes(256).toString("hex").normalize();

    const sessions = (await connectDB())?.db("auth").collection("sessions");
    await sessions?.insertOne({ session_id, email });
    (await cookies()).set("session_id", session_id);
  } catch (error) {
    console.log("Error creating session: ", error);
  }
};

export default createSession;
