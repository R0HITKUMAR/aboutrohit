import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
  {
    Name: String,
    Phone: String,
    Email: String,
    Message: String,
    Status: { type: String, default: "Submitted" },
  },
  {
    timestamps: true,
  }
);

const Query = new mongoose.model("Query", querySchema);

export default Query;
