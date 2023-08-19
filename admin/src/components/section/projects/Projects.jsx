import React from "react";
import axios from "../../Axios.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./Projects.css";
import NoRecord from "../norecord/NoRecord";
import Loader from "../loader/Loader";
import PCard from "./PCard";
import PForm from "./PForm";
import PUForm from "./PUForm";

export default function Projects(props) {
  const navigate = useNavigate();
  const [Projects, setProjects] = React.useState([]);
  const [reload, setReload] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`/project/retrieveAll`)
      .then((res) => {
        setProjects(res.data);
        setIsLoading(false);
        setReload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  return (
    <section id="projects">
      <div className="head-title">
        <div className="left">
          <h1>Projects</h1>
        </div>
        <div className="right">
          <button
            onClick={() => {
              navigate("/projects");
            }}
            className="badge rounded-pill text-bg-primary m-1"
          >
            Projects
          </button>
          <button
            onClick={() => {
              navigate("/projects/addProject");
            }}
            className="badge rounded-pill text-bg-primary m-1"
          >
            Add Project
          </button>
        </div>
      </div>
      <div className="project-cards">
        <div className="row">
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  {!isLoading ? (
                    <>
                      {Projects.length > 0 ? (
                        Projects.map((project, index) => {
                          return (
                            <PCard
                              Project={project}
                              key={index}
                              setLink={props.setLink}
                              setReload={setReload}
                            />
                          );
                        })
                      ) : (
                        <NoRecord />
                      )}
                    </>
                  ) : (
                    <Loader />
                  )}
                </>
              }
            />
            <Route path="/addProject" element={<PForm setReload={setReload} />} />
            <Route path="/updateProject/:hash" element={<PUForm setReload={setReload} />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}
