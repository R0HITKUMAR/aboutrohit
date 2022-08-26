import React from "react";
import "./PProjects.css";
import PCards from "./PCards";
import Loader from "../begin/Loader";
import Data from "./projects/data";

export default function PProjects(props) {
  const [loading, setLoading] = React.useState(true);

  //Close Loader when data is loaded
  React.useEffect(() => {
    if (Data) {
      setLoading(false);
    }
  }, []);

  return (
    <section id="pprojects" className="pprojects">
      <div className="container">
        <div className="section-title">
          <h2>()</h2>
          <p>Projects</p>
        </div>
        <div className="content">
          {loading ? (
            <Loader />
          ) : (
            <div className="row">
              {Data
                ? Data.map((project, index) => (
                    <PCards data={project} key={index} id={index} setDoc={props.setDoc} />
                  ))
                : ""}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
