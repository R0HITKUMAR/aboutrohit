import React from "react";
import "./PProjects.css";
import axios from "../Axios.js";
import PCards from "./PCards";
import Loader from "../begin/Loader";
import Button from "./projects/data.js";


export default function PProjects(props) {
  const [loading, setLoading] = React.useState(true);
  const [Data, setData] = React.useState([]);
  

  React.useEffect(() => {
    axios
      .get(`/project/retrieveAll`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="pprojects" className="pprojects">
      <div className="container">
        <div className="section-title">
          <h2>()</h2>
          <p>Projects</p>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="row px-2">
            {Data
              ? Data.map((project, index) => (
                <PCards
                  Project={project}
                  key={index}
                  Button={Button}
                  id={index}
                  setDoc={props.setDoc}
                />
              ))
              : ""}
          </div>
        )}
      </div>
    </section>
  );
}
