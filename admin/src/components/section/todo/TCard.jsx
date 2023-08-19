import React from "react";
import config from "../../../config.js";
import axios from "../../Axios.js";
import { useNavigate } from "react-router-dom";
import Toast from "../../dashboard/SweetAlert";

export default function TCard({ Todo }) {
  const navigate = useNavigate();
  const deleteTodo = () => {
    axios
      .delete(`/todo/delete/${Todo._id}`, { headers: config.headers })
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: err.response.data.message,
        });
      });
  };

  return (
    <div className="col-md-6 col-12">
      <div className="box-info">
        <div className="box-content">
          <div className="box-info-head">
            <h5>{Todo.title}</h5>
          </div>
          <div className="box-info-footer">
            <button onClick={() => navigate(`todo/updateTodo/${Todo._id}`)}>
              <i className="fa fa-duotone fa-edit"></i>
            </button>
            <button onClick={deleteTodo}>
              <i className="fa fa-duotone fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
