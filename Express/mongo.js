import mongoose from "mongoose";
import { setServers } from "node:dns/promises";

setServers(["1.1.1.1", "8.8.8.8"]);


mongoose
  .connect(
    "mongodb+srv://tanmaytapre12345_0987:tuIXYnyOgJ9jNFi7@cluster01.hck3no2.mongodb.net/?appName=Cluster01",
  )
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB failed", err.message);
  });

const newSchema = new mongoose.Schema({
  msg: {
    type: String,
    required: true,
  },
});

const collection = mongoose.model("collection", newSchema);

export default collection;
