import React from "react";
import config from "../../../config.js";
import { useNavigate } from "react-router-dom";
import axios from "../../Axios.js";
import Toast from "../../dashboard/SweetAlert";

export default function TForm() {
  const navigate = useNavigate();

  const [Tdata, setTdata] = React.useState({
    title: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTdata({ ...Tdata, [name]: value });
  };

  const addTodo = () => {
    axios
      .post(`/todo/add`, Tdata, { headers: config.headers })
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: res.data.message,
        });
        navigate("todo");
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: "Oops... Something went wrong!",
        });
        console.log(err);
      });
  };

  return (
    <div className="col-md-6 col-12 achievement-form">
      <div className="box-info">
        <div className="box-content">
          <div className="box-info-head">
            <h5>
              <textarea
                type="text"
                name="title"
                value={Tdata.title}
                onChange={handleChange}
                placeholder="Enter Title"
                rows={5}
              ></textarea>
            </h5>
          </div>
          <div className="box-info-footer">
            <button onClick={() => navigate("todo")}>
              <i className="fa fa-duotone fa-x"></i>
            </button>
            <button onClick={addTodo}>
              <i className="fa fa-duotone fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
