import Todo from "../models/Todo.js";

function addTodo(req, res) {
  const todo = new Todo(req.body);
  todo
    .save()
    .then(() => res.send({ message: "Todo added successfully" }))
    .catch((err) => res.send({ message: err }));
}

function retrieveTodo(req, res) {
  Todo.findById(req.params.id)
    .then((Todo) => res.send(Todo))
    .catch((err) => res.send({ message: err }));
}

function retrieveTodos(req, res) {
  Todo.find()
    .then((Todos) => res.send(Todos))
    .catch((err) => res.send({ message: err }));
}

function deleteTodo(req, res) {
  Todo.findByIdAndDelete(req.params.id)
    .then(() => res.send({ message: "Details deleted successfully" }))
    .catch((err) => res.send({ message: err }));
}

function updateTodo(req, res) {
  Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((Todo) => res.send(Todo))
    .catch((err) => res.send({ message: err }));
}

export { addTodo, retrieveTodo, retrieveTodos, deleteTodo, updateTodo };
