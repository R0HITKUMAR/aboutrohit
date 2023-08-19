import React from "react";
import config from "../../../config.js";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../Axios.js";
import Toast from "../../dashboard/SweetAlert";

export default function AUForm() {
  const navigate = useNavigate();
  const { hash } = useParams();
  const [Tdata, setTdata] = React.useState({});

  React.useEffect(() => {
    axios
      .get(`/todo/retrieveOne/${hash}`, { headers: config.headers })
      .then((res) => {
        setTdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [hash]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTdata({ ...Tdata, [name]: value });
  };

  const updateTodo = () => {
    axios
      .put(`/todo/update/${hash}`, Tdata)
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "Todo Updated Successfully",
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
    <div className="col-md-6 col-12 todo-form">
      <div className="box-info">
        <div className="box-content">
          <div className="box-info-head">
            <h5>
              <textarea
                type="text"
                name="title"
                value={Tdata.title}
                onChange={handleChange}
                placeholder="Enter Todo"
                rows={5}
              ></textarea>
            </h5>
          </div>
          <div className="box-info-footer">
            <button onClick={() => navigate("todo")}>
              <i className="fa fa-duotone fa-x"></i>
            </button>
            <button onClick={updateTodo}>
              <i className="fa fa-duotone fa-check"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
