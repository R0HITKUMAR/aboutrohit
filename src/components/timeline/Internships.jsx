import React from "react";
import { Intern } from "./data.js";

export default function Internships() {
  return (
    <>
      <div className="section-title">
        <p>Internships</p>
      </div>
      <div className="timeline">
        {Intern.map((intern, index) => (
          <div className="timeline-wrapper" key={index}>
            <div className="timeline-yr">
              <span>{intern.year}</span>
            </div>
            <div className="timeline-info">
              <h3>
                <small>{intern.duration}</small>
                <br />
                <span>{intern.name}</span>
              </h3>
              <ul>
                <li>
                  <b>Technology :</b>
                  {intern.technology}
                </li>
                <li>
                  <b>Organization : </b>
                  {intern.organization}
                </li>
                <li>{intern.des}</li>
              </ul>
              <div className="text-center">
                {intern.button.map((button,index) => (
                  <a href={button.url} key={index} className="main-btn btn-sm m-1">
                    {button.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
