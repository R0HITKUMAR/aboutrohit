import React from "react";
import config from "../../../config.js";
import axios from "../../Axios.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./Todo.css";
import TCard from "./TCard";
import TForm from "./TForm";
import TUForm from "./TUForm";
import NoRecord from "../norecord/NoRecord";
import Loader from "../loader/Loader";

export default function Todos(props) {
  const navigate = useNavigate();
  const [Todos, setTodos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`/todo/retrieveAll`, { headers: config.headers })
      .then((res) => {
        setTodos(res.data.reverse());
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Todos]);

  return (
    <section id="todo">
      <div className="head-title">
        <div className="left">
          <h1>Todos</h1>
        </div>
        <div className="right">
          <button
            onClick={() => {
              navigate("/todo/addTodo");
            }}
            className="badge rounded-pill text-bg-primary"
          >
            Add Todo
          </button>
        </div>
      </div>
      <div className="todo-cards">
        <div className="row">
          <Routes>
            <Route exact path="/addTodo" element={<TForm />} />
            <Route path="/updateTodo/:hash" element={<TUForm />} />
          </Routes>
          {!isLoading ? (
            <>
              {Todos.length > 0 ? (
                Todos.map((todo, index) => {
                  return <TCard Todo={todo} key={index} />;
                })
              ) : (
                <NoRecord />
              )}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </section>
  );
}
