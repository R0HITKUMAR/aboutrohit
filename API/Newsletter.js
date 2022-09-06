import Newsletter from "../models/Newsletter.js";
import { sendSubscription } from "./mail/Mail.js";

function addNewsletter(req, res) {
  const newsletter = new Newsletter(req.body);
  // Check if email already exists
  Newsletter.findOne({ Email_ID: newsletter.Email_ID })
    .then((newsl) => {
      if (newsl) {
        return res.send({ message: "You are already Subscribed!" });
      } else {
        newsletter
          .save()
          .then(() => {
            sendSubscription(newsletter.Email_ID);
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
