import React from "react";

export default function PCard(props) {
  return (
    <div className="row project-card">
      <h3 className="text-center">
        {props.data.id}. {props.data.title}
      </h3>
      <div className="col-md-4 col-12">
        <img src={props.data.img} alt={props.data.title} />
        <div className="text-center m-5">
          {props.data.report && (
            <a
              href={props.data.report}
              target="_blank"
              className="main-btn"
              rel="noopener noreferrer"
            >
              Project Report
            </a>
          )}
        </div>
      </div>
      <div className="col-md-8 col-12">
        <p className="fst-italic">
          <b>Domain : </b>
          {props.data.domain} <br />
          <b>Technology Used : </b>
          {props.data.technology}
          <br />
          <b>Duration :</b>
          {props.data.duration}
        </p>
        <div>
          {props.data.des1 ? (
            <b>Description:</b>
          ) : (
            <h1 className="text-center">
              <b>Coming Soon</b>
            </h1>
          )}
          <ul>
            {props.data.des1 && <li>{props.data.des1}</li>}
            {props.data.des1 && <li>{props.data.des2}</li>}
            {props.data.des1 && <li>{props.data.des3}</li>}
          </ul>
        </div>
        <div>
          {props.data.learn1 ? (
            <b>Learnings :</b>
          ) : (
            <h6 className="text-center">
              <b>Under Process</b>
            </h6>
          )}
          <ul>
            {props.data.learn1 && <li>{props.data.learn1}</li>}
            {props.data.learn1 && <li>{props.data.learn2}</li>}
            {props.data.learn1 && <li>{props.data.learn3}</li>}
            {props.data.learn1 && <li>{props.data.learn4}</li>}
          </ul>
        </div>
      </div>
      <div className="text-center">
        {props.data.buttons &&
          props.data.buttons.map((button, index) => (
            <a
              href={button.url}
              target="_blank"
              className="main-btn"
              key={index}
              rel="noopener noreferrer"
            >
              {button.name}
            </a>
          ))}
      </div>
    </div>
  );
}
