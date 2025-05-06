import { MongoClient } from "mongodb";

const DB_URI = process.env.DB_URI as string;

let cachedClient: MongoClient | null = null;

const connectDB = async () => {
  try {
    if (!cachedClient) {
      const client = new MongoClient(DB_URI);
      cachedClient = await client.connect();
    }
    return cachedClient;
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};

export default connectDB;
