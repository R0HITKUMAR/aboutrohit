import express from "express";
var rohitserver = express.Router();

import {
  addTodo,
  retrieveTodo,
  retrieveTodos,
  deleteTodo,
  updateTodo,
} from "../API/Todo.js";

// Projects Functions
rohitserver.post("/add", addTodo);
rohitserver.get("/retrieveAll", retrieveTodos);
rohitserver.get("/retrieveOne/:id", retrieveTodo);
rohitserver.delete("/delete/:id", deleteTodo);
rohitserver.put("/update/:id", updateTodo);

export default rohitserver;
