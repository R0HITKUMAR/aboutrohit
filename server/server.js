import app from "./app.js";
import config from "./config.js";

const PORT = config.PORT;

const server = app.listen(PORT, () => {
  console.log("Server is Running at : ", server.address().port);
});
