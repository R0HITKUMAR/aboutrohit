import express from "express";
var rohitserver = express.Router();

import {
  addNewsletter,
  retrieveNewsletters,
  deleteNewsletter,
} from "../API/Newsletter.js";

// Query Functions
rohitserver.post("/add", addNewsletter);
rohitserver.get("/retrieveAll", retrieveNewsletters);
rohitserver.delete("/delete/:id", deleteNewsletter);

export default rohitserver;
