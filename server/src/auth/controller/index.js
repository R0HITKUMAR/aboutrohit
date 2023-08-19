import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
const app = express.Router();

import config from "../../../config.js";
import User from "../models/index.js";

// Function to Login User
app.login = async (req, res) => {
  const userLoggingIn = req.body;
  User.findOne({ email: userLoggingIn.email }).then((dbUser) => {
    if (!dbUser) {
      return res.status(404).json({
        message: "Please Enter a valid Email ID or Password Combination",
      });
    }
    bcrypt
      .compare(userLoggingIn.password, dbUser.password)
      .then((isCorrect) => {
        if (isCorrect) {
          const payload = {
            id: dbUser._id,
            userName: dbUser.userName,
            email: dbUser.email,
          };
          jwt.sign(
            payload,
            config.JWT_SECRET,
            { expiresIn: "30d" },
            (err, token) => {
              if (err) return res.data({ message: "Error Signing In" });
              return res.status(200).json({
                message: "Signing In....",
                token: token,
                email: req.body.email,
              });
            }
          );
        } else {
          return res.status(404).json({
            message: "Please Enter a valid Email ID or Password Combination",
          });
        }
      });
  });
};

// Function to Change Password
app.changepassword = async (req, res) => {
  const user = req.body;
  // Update Password
  const dbUser = User.findOne({ email: user.email });
  user.newpassword = bcrypt.hash(user.newpassword, 10).then((hash) => {
    dbUser
      .updateOne({ password: hash })
      .then((user) => {
        return res.status(200).json({
          success: true,
          message: "Congratulations! Password Changed Successfully",
        });
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: "Failed to Change Password",
        });
      });
  });
};

app.validate = async (req, res) => {
  const token = req.headers["authorization"];
  // console.log(token);
  if (token) {
    jwt.verify(token, config.PASSPORTSECRET, (err, decoded) => {
      if (err) {
        console.log(err);
        return res.status(404).json({
          isLogged: false,
          message: "Failed to Authenticate",
        });
      }
      res.email = decoded.email;
      res.userName = decoded.userName;
      res.status(200).json({
        isLogged: true,
        message: "Logged In",
        email: res.email,
        userName: res.userName,
      });
    });
  } else {
    console.log("Incorrect Token");
    return res.status(404).json({
      isLogged: false,
      message: "Incorrect Token Provided",
    });
  }
};

export default app;
