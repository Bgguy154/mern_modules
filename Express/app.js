import express from "express";
import collection from "./mongo.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("API running");
});

app.post("/", async (req, res) => {
  const { msg } = req.body;

  await collection.insertMany([{ msg }]);

  res.status(201).json({ message: "Data saved" });
});

app.listen(8000, () => {
  console.log("Port connected on 8000");
});
