import express from "express";
var app = express.Router();

import dashboard from "./controller/index.js";

app.get("/get", dashboard);

export default app;
