import express from "express";
import Certificate from "../models/index.js";

const app = express.Router();

app.addCertificate = async (req, res) => {
  var timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
  const ID =
    timestamp +
    "xxxxxxxxxxxxxxxx"
      .replace(/[x]/g, function () {
        return ((Math.random() * 16) | 0).toString(16);
      })
      .toLowerCase();
  req.body.id = ID;
  const certificate = new Certificate(req.body);

  certificate
    .save()
    .then(() =>
      res.status(201).send({ message: "Certificates added successfully" })
    )
    .catch((err) => res.status(404).send({ message: err }));
};

app.retrieveCertificate = async (req, res) => {
  const id = req.params.id;
  Certificate.findOne({ id: id })
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(404).send({ message: err }));
};

app.retrieveCertificates = async (req, res) => {
  Certificate.find()
    .then((result) => res.status(200).send(result.reverse()))
    .catch((err) => res.status(404).send({ message: err }));
};

app.deleteCertificate = async (req, res) => {
  Certificate.findOneAndDelete({ id: req.params.id })
    .then(() =>
      res.status(200).send({ message: "Details deleted successfully" })
    )
    .catch((err) => res.status(404).send({ message: err }));
};

app.updateCertificate = async (req, res) => {
  const id = req.params.id;
  const data = {
    no: req.body.no,
    title: req.body.title,
    issued_by: req.body.issued_by,
    issued_on: req.body.issued_on,
    verify: req.body.verify,
    view: req.body.view,
  };
  Certificate.findOneAndUpdate({ id: id }, data, { new: true })
    .then((result) => res.status(201).send(result))
    .catch((err) => res.status(404).Datesend({ message: err }));
};

export default app;
