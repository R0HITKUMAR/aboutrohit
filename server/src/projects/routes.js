import express from "express";
var app = express.Router();
import {
  addProject,
  retrieveProject,
  retrieveProjects,
  deleteProject,
  updateProject,
} from "./controller/index.js";
import validateAuth from "../../middlewares/validateAuth.js";

// Projects Functions
app.post("/add",validateAuth, addProject);
app.get("/retrieveAll", retrieveProjects);
app.get("/retrieveOne/:id", retrieveProject);
app.delete("/delete/:id",validateAuth, deleteProject);
app.put("/update/:id",validateAuth, updateProject);

export default app;
