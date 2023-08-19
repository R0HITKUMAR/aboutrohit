import React from "react";
import { useNavigate } from "react-router-dom";

export default function PCard(props) {
  const navigate = useNavigate();
  const [button, setButton] = React.useState([]);

  React.useEffect(() => {
    props.Button.map((item, index) => {
      if (item.hash === props.Project.hash) {
        setButton(item.buttons);
      }
    });
  }, [props.hash, props.Button]);

  return (
    <div className="col-12">
      <div className="project-card row">
        <h3 className="text-center">
          {props.Project.title}
        </h3>
        {/* Part I - Image + Skills + Report */}
        <div className="col-md-4 col-12">
          <div className="project-preview">
            <img
              src={props.Project.img}
              alt={props.Project.title}
            />
          </div>
          <div className="skills text-center my-3">
            <p>
              <b>Skills</b><br />
              {props.Project.technology.split(",").map((tech, index) => {
                return (
                  <span className="badge rounded-pill text-bg-primary" key={index}>
                    {tech}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="project-report text-center">
            {props.Project.report && (
              <button
                onClick={() =>
                  props.setDoc(
                    props.Project.report
                  )
                }
                className="main-btn"
              >
                <i className="fa-solid fa-book mx-2" />Project Report
              </button>
            )}
          </div>
        </div>

        {/* Part II - Description + Learnings + Live Demo */}
        <div className="col-md-8 col-12">
          <div className="project-badges" style={{ float: "right" }}>
            <span className="badge rounded-pill text-bg-primary">
              {props.Project.domain}
            </span>
            <span className="badge rounded-pill text-bg-primary">
              {props.Project.duration}
            </span>
          </div><br />
          <div className="project-details">
            <p>
              <b>Description:</b>
              <ul>
                {props.Project.des1 && <li>{props.Project.des1}</li>}
                {props.Project.des2 && <li>{props.Project.des2}</li>}
                {props.Project.des3 && <li>{props.Project.des3}</li>}
              </ul>
              <b>Learnings :</b>
              <ul>
                {props.Project.learn1 && <li>{props.Project.learn1}</li>}
                {props.Project.learn1 && <li>{props.Project.learn2}</li>}
                {props.Project.learn1 && <li>{props.Project.learn3}</li>}
                {props.Project.learn1 && <li>{props.Project.learn4}</li>}
              </ul></p>
          </div>
          <div className="project-url text-center">
            <a
              href={props.Project.url}
              target="_blank"
              className="main-btn"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            {button &&
              button.map((item, index) => (
                <a
                  href={item.url}
                  target="_blank"
                  key={index}
                  className="main-btn"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              ))}
          </div>
        </div>

      </div ></div>
  );
}
