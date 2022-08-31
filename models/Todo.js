import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: String,
  },
  {
    timestamps: true,
  }
);

const Todo = new mongoose.model("Todo", todoSchema);

export default Todo;
