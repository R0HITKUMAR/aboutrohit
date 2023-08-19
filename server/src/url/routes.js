import express from "express";
var app = express.Router();

import { addURL, retriveURLS, deleteURL } from "./controller/index.js";

app.post("/add", addURL);
app.get("/retrieveAll", retriveURLS);
app.delete("/delete/:id", deleteURL);

export default app;