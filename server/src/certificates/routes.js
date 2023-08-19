import express from "express";
const app = express.Router();

import controller from "./controller/index.js";
import validateAuth from "../../middlewares/validateAuth.js";

app.post("/add", validateAuth, controller.addCertificate);
app.get("/retrieveAll", controller.retrieveCertificates);
app.get("/retrieveOne/:id", controller.retrieveCertificate);
app.delete("/delete/:id", validateAuth, controller.deleteCertificate);
app.post("/update/:id", validateAuth, controller.updateCertificate);

export default app;
