import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    title: String,
    url: String,
  },
  {
    timestamps: true,
  }
);

const URL = new mongoose.model("URL", urlSchema);

export default URL;
