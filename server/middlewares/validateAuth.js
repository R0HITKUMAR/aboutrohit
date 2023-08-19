import jwt from "jsonwebtoken";
import config from "../config.js";

export default (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Failed to authenticate" });
      } else {
        req.decoded = decoded;
        if (req.decoded.email === "r.k2962002@gmail.com") {
          next();
        } else {
          res.status(401).json({ message: "Failed to authenticate" });
        }
      }
    });
  } else {
    res.status(401).json({
      message: "No token provided",
    });
  }
};
