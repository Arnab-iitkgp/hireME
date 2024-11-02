// this is a one time run code for storing the data in the mongo .
const mongoose = require("mongoose");
const jobdata = require("./data/jobData.json");
const Joblist = require("./model/joblist");
require("dotenv").config();

const connectToMongo = async () => {
  try {
    const instance = await mongoose.connect("mongodb://localhost:27017/hireme");
    console.log("MONGO CONNECTED");
  } catch (error) {
    console.error("ERROR Mongo connect :", error);
  }
};
connectToMongo();
const seedJob = async () => {
  try {
    await Joblist.insertMany(jobdata);
    console.log("Job data seeded successfully!");
  } catch (error) {
    console.error("Error seeding job data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedJob();
// "send": "node seedData.js",
