import { cookies } from "next/headers";
import connectDB from "./connectDB";

const findUser = async () => {
  try {
    const session_id = (await cookies()).get("session_id");

    if (!session_id) {
      return null;
    }

    const db = await connectDB();

    const sessions = db?.db("auth").collection("sessions");
    const email = await sessions?.findOne({ session_id: session_id.value });

    if (!email) {
      return null;
    }

    const users = db?.db("auth").collection("users");
    const user = await users?.findOne({ email: email.email });

    return user;
  } catch (error) {
    console.log("Error finding user: ", error);
  }
};

export default findUser;
