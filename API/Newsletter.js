import Newsletter from "../models/Newsletter.js";

function addNewsletter(req, res) {
  const newsletter = new Newsletter(req.body);
  newsletter
    .save()
    .then(() => res.send({ message: "Subscription Successfull" }))
    .catch((err) => res.send({ message: err }));
}

function retrieveNewsletters(req, res) {
  Newsletter.find({})
    .then((newsletters) => res.send(newsletters))
    .catch((err) => res.send({ message: err }));
}

function deleteNewsletter(req, res) {
  Newsletter.findByIdAndDelete(req.params.id)
    .then(() => res.send({ message: "Subscription Deleted" }))
    .catch((err) => res.send({ message: err }));
}

export { addNewsletter, retrieveNewsletters,deleteNewsletter };
