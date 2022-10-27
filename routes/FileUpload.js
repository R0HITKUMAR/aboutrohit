import express from "express";
import AWS from "aws-sdk";
import multer from "multer";
var rohitServer = express.Router();

const upload = multer();
rohitServer.post("/upload", upload.single("file"), function (req, res, next) {
  const file = req.file;
  const location = req.body.location;
  if (file) {
    var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    const filename =
      timestamp +
      "xxxxxxxxxxxxxxxx"
        .replace(/[x]/g, function () {
          return ((Math.random() * 16) | 0).toString(16);
        })
        .toLowerCase() +
      "." +
      file.originalname.split(".")[1];

    // Upload file to S3
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS1_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS1_SECRET_ACCESS_KEY,
      region: process.env.AWS1_REGION,
    });

    s3.upload({
      Bucket: "files.rohitkumar",
      Key: location + "/" + filename,
      Body: file.buffer,
      ContentType: file.mimetype,
    })
      .on("httpUploadProgress", function (evt) {
        // console.log(parseInt((evt.loaded / evt.total) * 100));
      })
      .send(function (err, data) {
        if (err) {
          res.send(err);
        } else {
          res.send(data);
        }
      });
  }
});

export default rohitServer;
