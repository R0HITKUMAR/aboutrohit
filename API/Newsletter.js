import Newsletter from "../models/Newsletter.js";
import { sendSubscription } from "./mail/Mail.js";

function addNewsletter(req, res) {
  const newsletter = new Newsletter(req.body);
  // Check if email already exists
  Newsletter.findOne({ email: newsletter.email })
    .then((newsletter) => {
      if (newsletter) {
        return res.send({ email: "You are already Subscribed!" });
      } else {
        newsletter
          .save()
          .then(() => {
            sendSubscription(newsletter.email);
            res.send({ message: "Subscription Successfull" });
          })
          .catch((err) => res.send({ message: err }));
      }
    })
    .catch((err) => console.log(err));
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

export { addNewsletter, retrieveNewsletters, deleteNewsletter };
