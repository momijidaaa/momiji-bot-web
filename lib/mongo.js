import { MongoClient } from "mongodb";

let client;
let db;

export async function connectDB() {
  if (!client) {
    client = new MongoClient(process.env.MONGO_URI);
    await client.connect();
    db = client.db("bot-dashboard");
    console.log("✅ MongoDB connected");
  }
  return db;
}