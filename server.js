import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use(cors({
  origin: [
    "https://smbeautyexpert.netlify.app",
    "http://localhost:5500",
    "http://127.0.0.1:5500"
  ],
  methods: ["GET", "POST"],
  credentials: true
}));

const PORT = process.env.PORT || 4000;


const client = new MongoClient(process.env.MONGO_URL);
let reviewsCollection;

async function start() {
  await client.connect();
  const db = client.db("sm_beauty");
  reviewsCollection = db.collection("reviews");
  console.log("MongoDB Connected");
}
start();

app.post("/add-review", async (req, res) => {
  try {
    const data = req.body;
    data.created_at = new Date();

    const result = await reviewsCollection.insertOne(data);

    res.json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});

app.get("/reviews", async (req, res) => {
  try {
    const reviews = await reviewsCollection
      .find()
      .sort({ created_at: -1 })
      .toArray();

    res.json(reviews);
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


