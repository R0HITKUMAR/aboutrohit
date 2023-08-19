import axios from "../../Axios.js";
import config from "../../../config.js";
import React from "react";
import { useNavigate } from "react-router-dom";
import NoRecord from "../norecord/NoRecord";
import Swal from "sweetalert2";

export default function WebForms() {
  const navigate = useNavigate();
  const [query, setQuery] = React.useState([]);
  const [newsletter, setNewsletter] = React.useState([]);
  const [reload, setReload] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`/query/retrieveAll`, { headers: config.headers })
      .then((res) => {
        setQuery(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(`/newsletter/retrieveAll`, { headers: config.headers })
      .then((res) => {
        setNewsletter(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setReload(false);
  }, [reload]);

  const deleteNewsletter = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/newsletter/delete/${id}`, { headers: config.headers })
          .then((res) => {
            Swal.fire("Deleted!", "Newsletter has been deleted.", "success");
            setReload(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const deleteQuery = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/query/delete/${id}`, { headers: config.headers })
          .then((res) => {
            Swal.fire("Deleted!", "Query has been deleted.", "success");
            setReload(true);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const updateQuery = (id, status) => {
    const data = prompt("Enter Status", status);
    if (data) {
      axios
        .get(`/query/update/${id}/${data}`, { headers: config.headers })
        .then((res) => {
          Swal.fire("Updated!", "Query has been updated.", "success");
          setReload(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <section id="todo">
      <div className="head-title">
        <div className="left">
          <h1>Web Forms</h1>
        </div>
        <div className="right">
          <button
            onClick={() => {
              navigate("/");
            }}
            className="badge rounded-pill text-bg-primary"
          >
            Home
          </button>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Recent Queries</h3>
          </div>
          <ul className="todo-list">
            {query.length > 0 ? (
              <>
                {query.map((item, index) => {
                  return (
                    <li className="completed" key={index}>
                      <div className="content p-1">
                        {item.Name}

                        <br />
                        <p>
                          <span className="badge rounded-pill text-bg-primary mr-1">{item.Email}</span>
                          <span className="badge rounded-pill text-bg-success m-1">{item.Phone}</span>
                          <span className="badge rounded-pill text-bg-dark m-1">{item.Timestamps}</span><br />
                          <b>Message : </b>
                          {item.Message}
                          <div>
                            <span className="badge rounded-pill text-bg-primary mt-2" style={{ float: "left" }}>
                              {item.Status}
                            </span>
                            <span style={{ float: "right" }}>
                              <i
                                onClick={() => updateQuery(item._id, item.Status)}
                                className="fa fa-duotone fa-edit m-1"
                              />
                              <i
                                onClick={() => deleteQuery(item._id)}
                                className="fa fa-duotone fa-trash"
                              />
                            </span></div>
                          <br />
                        </p>
                      </div>
                      <div className="actions p-1">
                        <br />
                      </div>
                    </li>
                  );
                })}
              </>
            ) : (
              <NoRecord />
            )}
          </ul>
        </div>
        <div className="todo">
          <div className="head">
            <h3>Newsletter</h3>
          </div>
          <ul className="todo-list">
            {newsletter.length > 0 ? (
              <>
                {newsletter.map((item, index) => {
                  return (
                    <li className="completed" key={index}>
                      <p>{item.Email_ID}</p>
                      <i
                        onClick={() => deleteNewsletter(item._id)}
                        className="fa fa-duotone fa-trash"
                      />
                    </li>
                  );
                })}
              </>
            ) : (
              <NoRecord />
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
