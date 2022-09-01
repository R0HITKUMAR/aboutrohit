import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: String,
    img: String,
    domain: String,
    technology: String,
    duration: String,
    learn1: String,
    learn2: String,
    learn3: String,
    learn4: String,
    des1: String,
    des2: String,
    des3: String,
    url: String,
    hash: String,
    report: String,
  },
  {
    timestamps: true,
  }
);

const Project = new mongoose.model("Project", projectSchema);

export default Project;
