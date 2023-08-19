import mongoose from "mongoose";

const newsletterSchema = new mongoose.Schema(
  {
    Email_ID: String,
  },
  {
    timestamps: true,
  }
);

const Newsletter = new mongoose.model("Newsletter", newsletterSchema);

export default Newsletter;
