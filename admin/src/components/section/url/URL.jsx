import React from "react";
import config from "../../../config.js";
import { useNavigate } from "react-router-dom";
import axios from "../../Axios.js";
import Rebrandly from "./Rebrandly";
import Swal from "sweetalert2";

export default function URL() {
  const navigate = useNavigate();
  const [url, setUrl] = React.useState({
    title: "",
    url: "",
  });
  const [add, setAdd] = React.useState(false);
  const [reload, setReload] = React.useState(false);

  const [urls, setUrls] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/url/retrieveAll`, { headers: config.headers })
      .then((res) => {
        setUrls(res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUrl({ ...url, [name]: value });
  };

  const addURL = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(`/url/add`, url, { headers: config.headers })
          .then((res) => {
            Swal.fire("Added!", "URL has been added.", "success");
            setReload(true)
            setAdd(false);
            setUrl({
              title: "",
              url: "",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const deleteURL = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/url/delete/${id}`, { headers: config.headers })
          .then((res) => {
            setReload(true);
            Swal.fire("Deleted!", "URL has been deleted.", "success");
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });

  };

  return (
    <section id="todo">
      <div className="head-title">
        <div className="left">
          <h1>URL</h1>
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
        <Rebrandly />
        <div className="todo">
          <div className="head">
            <h3>Important URL</h3>
            <i onClick={() => setAdd(!add)} className={add ? "fa fa-duotone fa-minus" : "fa fa-duotone fa-plus"} />
          </div>
          <ul className="todo-list">
            {add && (
              <li>
                <p>
                  <b>
                    <input
                      name="title"
                      onChange={handleChange}
                      value={url.title}
                      placeholder="Enter URL Title"
                    />
                  </b>
                  <input
                    name="url"
                    onChange={handleChange}
                    value={url.url}
                    placeholder="Enter URL"
                  />
                </p>
                <i onClick={addURL} className="fa fa-duotone fa-check" />
              </li>
            )}
            {urls.map((url, index) => {
              return (
                <li key={index}>
                  <p>
                    <b>{url.title}</b>
                  </p>
                  <p>
                    <a
                      href={url.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-duotone fa-arrow-up-right-from-square m-1" />
                    </a>
                    <i
                      onClick={() => deleteURL(url._id)}
                      className="fa fa-duotone fa-trash m-1"
                    />
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
