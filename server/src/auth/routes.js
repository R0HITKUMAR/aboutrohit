import express from "express";
var app = express.Router();

import auth from "./controller/index.js";
import { sendOTP } from "./controller/OTPMail.js";

app.post("/login", auth.login);
app.get("/validate", auth.validate);
app.post("/changepassword", auth.changepassword);
app.post("/sendotp", sendOTP);

export default app;
