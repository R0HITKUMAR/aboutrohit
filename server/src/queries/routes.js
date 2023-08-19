import express from "express";
var app = express.Router();

import {
  addQuery,
  retrieveAllQuery,
  deleteQuery,
  updateQuery,
} from "./controller/index.js";
import validateAuth from "../../middlewares/validateAuth.js";

// Query Functions
app.post("/add", addQuery);
app.get("/retrieveAll",validateAuth, retrieveAllQuery);
app.delete("/delete/:id",validateAuth, deleteQuery);
app.get("/update/:id/:Status",validateAuth, updateQuery);

export default app;
