import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Axios.js";
import config from "../../../config.js";

import "./Home.css";

export default function Home(props) {
  const navigate = useNavigate();
  const [dashboard, setDashboard] = React.useState([]);
  const [rlinks, setRlinks] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(`/dashboard/get`, { headers: config.headers })
      .then((res) => {
        setDashboard(res.data);
      })
      .catch((err) => console.log(err));
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        apikey: "2994c2ddcbae4b9b89fc7366d54de932",
      },
    };
    fetch(
      "https://api.rebrandly.com/v1/links?domain.id=1775bd49e45e4c01bcdfe3b26a129334&orderBy=createdAt&orderDir=desc&limit=25",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setRlinks(response.length);
      })
      .catch((err) => console.error(err));
  }, []);

  const Dashboard = [
    {
      title: "Certifications",
      val: dashboard.ccertificates,
      icon: "fa-certificate",
    },
    { title: "Projects", val: dashboard.cprojects, icon: "fa-microchip" },
    {
      title: "Todos",
      val: dashboard.cachievements,
      icon: "fa-screwdriver-wrench",
    },
    { title: "Shorted URLs", val: rlinks, icon: "fa-link" },
  ];

  return (
    <section id="home">
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
        </div>
        <div className="right">
          <button
            onClick={() => navigate("/resume")}
            className="badge rounded-pill text-bg-primary"
          >
            My Resume
          </button>
        </div>
      </div>
      <div className="box">
        <ul className="box-info count">
          {Dashboard.map((item, index) => {
            return (
              <li key={index}>
                <i className={`fa fa-duotone ${item.icon}`} />
                <span className="text">
                  <h3>{item.val}</h3>
                  <p>{item.title}</p>
                </span>
              </li>
            );
          })}
        </ul>
        <ul className="box-info">
          <li>
            <i className="fa fa-duotone fa-certificate" />
            <span className="text">
              <h3>Recent Certificates</h3>
              <p>Coming Soon..</p>
            </span>
          </li>
          <li>
            <i className="fa fa-duotone fa-microchip" />
            <span className="text">
              <h3>Recent Projects</h3>
              <p>Coming Soon..</p>
            </span>
          </li>
          <li>
            <i className="fa fa-duotone fa-microchip" />
            <span className="text">
              <h3>Logged in As:</h3>
              <p>
                Rohit Kumar
                <br />
                r.k2962002@gmail.comn
              </p>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
