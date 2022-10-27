import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import ConnectDB from "./database.js";
import Auth from "./routes/Auth.js";
import Dashboard from "./routes/Dashboard.js";
import Project from "./routes/Project.js";
import Todo from "./routes/Todo.js";
import Certificate from "./routes/Certificate.js";
import Query from "./routes/Query.js";
import Newsletter from "./routes/Newsletter.js";
import URL from "./routes/URL.js";
import File from "./routes/FileUpload.js";

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const PORT = process.env.PORT || 5000;
dotenv.config();

var rohitServer = express();
rohitServer.use(express.json());
rohitServer.use(express.urlencoded());
rohitServer.use(cors());
rohitServer.use(bodyParser.json(), urlencodedParser);
// Routes

rohitServer.use("/auth", Auth);
rohitServer.use("/dashboard", Dashboard);
rohitServer.use("/project", Project);
rohitServer.use("/todo", Todo);
rohitServer.use("/certificate", Certificate);
rohitServer.use("/query", Query);
rohitServer.use("/newsletter", Newsletter);
rohitServer.use("/url", URL);
rohitServer.use("/file", File);

rohitServer.get("/", (req, res) => {
  res.send("Hello World");
});

rohitServer.listen(PORT, () => {
  ConnectDB()
    .then(() => console.log(`Server is Running  at Port ✌`))
    .catch(() =>
      console.log(
        "Error in Connecting to Database. Please Check your Database Configurations"
      )
    );
});
