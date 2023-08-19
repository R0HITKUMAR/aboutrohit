import express from "express";
import validateAuth from "../middlewares/validateAuth.js";
import Auth from "../src/auth/routes.js";
import Dashboard from "../src/dashboard/routes.js";
import Project from "../src/projects/routes.js";
import Todo from "../src/todo/routes.js";
import Certificate from "../src/certificates/routes.js";
import Query from "../src/queries/routes.js";
import Newsletter from "../src/newsletter/routes.js";
import URL from "../src/url/routes.js";
import File from "../src/fileupload/routes.js";

const app = express();

app.use("/auth", Auth);
app.use("/dashboard", validateAuth, Dashboard);
app.use("/project", Project);
app.use("/todo", validateAuth, Todo);
app.use("/certificate", Certificate);
app.use("/query", Query);
app.use("/newsletter", Newsletter);
app.use("/url", validateAuth, URL);
app.use("/file", validateAuth, File);

app.get("/", (req, res) => {
  res.send("Welcome to Rohit Kumar Server");
});

export default app;
