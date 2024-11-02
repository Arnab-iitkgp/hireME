const mongoose = require("mongoose");
const joblistSchema = mongoose.Schema(
  {
    id: Number,
    jobTitle: {
      type: String,
      reqiured: true,
    },
    companyName: {
      type: String,
      reqiured: true,
    },
    location: {
      type: String,
      reqiured: true,
    },
    jobType: {
      type: String,
      enum: ["Part-Time", "Full-Time"],
      default: "Full-Time",
    },
    description: {
      type: String,
      reqiured: true,
    },
  },
  { timestamps: true }
);
const Joblist = mongoose.model("joblist", joblistSchema);
module.exports = Joblist;
