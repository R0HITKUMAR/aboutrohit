import express from "express";
var rohitserver = express.Router();

import {
  addQuery,
  retrieveAllQuery,
  deleteQuery,
  updateQuery,
} from "../API/Query.js";

// Query Functions
rohitserver.post("/add", addQuery);
rohitserver.get("/retrieveAll", retrieveAllQuery);
rohitserver.delete("/delete/:id", deleteQuery);
rohitserver.put("/update/:id/:Status", updateQuery);

export default rohitserver;
