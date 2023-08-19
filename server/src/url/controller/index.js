import URL from "../models/index.js";

function addURL(req, res) {
  const url = new URL(req.body);
  url
    .save()
    .then(() => res.send({ message: "URL added successfully" }))
    .catch((err) => res.send({ message: err }));
}

function retriveURLS(req, res) {
  URL.find()
    .then((urls) => res.send(urls))
    .catch((err) => res.send({ message: err }));
}

function deleteURL(req, res) {
  URL.findByIdAndDelete(req.params.id)
    .then(() => res.send({ message: "Details deleted successfully" }))
    .catch((err) => res.send({ message: err }));
}

export { addURL, retriveURLS, deleteURL };