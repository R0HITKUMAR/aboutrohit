import Query from "../models/Query.js";

function addQuery(req, res) {
  const query = new Query(req.body);
  query
    .save()
    .then(() => {
      res.send({ message: "Query added successfully" });
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
  Query.findByIdAndUpdate(req.params.id, {
    $set: {
      Status: req.params.Status,
    },
  })
    .then(() => res.send({ message: "Query status updated successfully" }))
    .catch((err) => res.send({ message: err }));
}

export { addQuery, retrieveAllQuery, deleteQuery, updateQuery };
