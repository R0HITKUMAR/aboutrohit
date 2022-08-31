import express from "express";
var rohitserver = express.Router();

import { addURL, retriveURLS, deleteURL } from "../API/URL.js";

rohitserver.post("/add", addURL);
rohitserver.get("/retrieveAll", retriveURLS);
rohitserver.delete("/delete/:id", deleteURL);

export default rohitserver;