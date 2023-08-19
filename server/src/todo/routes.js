import express from "express";
var app = express.Router();

import {
  addTodo,
  retrieveTodo,
  retrieveTodos,
  deleteTodo,
  updateTodo,
} from "./controller/index.js";

// Projects Functions
app.post("/add", addTodo);
app.get("/retrieveAll", retrieveTodos);
app.get("/retrieveOne/:id", retrieveTodo);
app.delete("/delete/:id", deleteTodo);
app.put("/update/:id", updateTodo);

export default app;
