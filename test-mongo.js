import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

async function test() {
  const client = new MongoClient(process.env.MONGO_URL);
  await client.connect();
  console.log("MongoDB connected!");

  const db = client.db("sm_beauty");
  const result = await db.collection("reviews").insertOne({ message: "Hello from Node" });
  console.log("Inserted document:", result.insertedId);

  const docs = await db.collection("reviews").find().toArray();
  console.log("All documents:", docs);

  await client.close();
}

test();
