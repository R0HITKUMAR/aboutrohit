import express from "express";
var app = express.Router();

import {
  addNewsletter,
  retrieveNewsletters,
  deleteNewsletter,
} from "./controller/index.js";
import validateAuth from "../../middlewares/validateAuth.js";

// Query Functions
app.post("/add", addNewsletter);
app.get("/retrieveAll",validateAuth, retrieveNewsletters);
app.delete("/delete/:id",validateAuth, deleteNewsletter);

export default app;
