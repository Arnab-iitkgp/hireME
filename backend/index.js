const mongoose = require("mongoose");
const express = require("express");
const Joblist = require("./model/joblist");
const cors = require("cors");
const app = express();
const PORT = 8000;

const connectToMongo = async () => {
  try {
    const instance = await mongoose.connect("mongodb://localhost:27017/hireme");
    console.log("MONGO CONNECTED");
  } catch (error) {
    console.error("ERROR Mongo connect :", error);
  }
};

connectToMongo();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.get("/", async (req, res) => {
  const allJobs = await Joblist.find({});
  res.json(allJobs);
});

app.get("/api/jobs", (req, res) => res.send("hello"));

app.listen(PORT, () => console.log("Serve has started"));
