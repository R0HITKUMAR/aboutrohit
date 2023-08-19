import Query from "../models/index.js";
import sendSMS from "../../../services/sms/SMS.js";

function addQuery(req, res) {
  const id = "RK" + Date.now();
  req.body.ID = id;
  req.body.Timestamps = new Date().toLocaleString();
  const query = new Query(req.body);
  // Generate ID

  query
    .save()
    .then(() => {
      const msg = `Dear Rohit Kumar,\n A New Query is Registered on Your Portfolio with ID: ${id} by ${
        query.Name
      } at ${new Date().toLocaleString()}\n\nMessage: ${
        query.Message
      }\n\nThank You`;
      sendSMS(`+919084950475`, msg);
      res.send({ message: "Thanks for Contacting Me", id: id });
    })
    .catch((err) => res.send({ message: err }));
}

function retrieveAllQuery(req, res) {
  Query.find({})
    .then((queries) => res.send(queries))
    .catch((err) => res.send({ message: err }));
}

function deleteQuery(req, res) {
  Query.findByIdAndDelete(req.params.id)
    .then(() => res.send({ message: "Query deleted successfully" }))
    .catch((err) => res.send({ message: err }));
}

// Update Status of Query
function updateQuery(req, res) {
  console.log(req.params);
  Query.findByIdAndUpdate(req.params.id, {
    $set: {
      Status: req.params.Status,
    },
  })
    .then(() => res.send({ message: "Query status updated successfully" }))
    .catch((err) => {
      console.log(err);
      res.send({ message: err })
    });
}

export { addQuery, retrieveAllQuery, deleteQuery, updateQuery };
