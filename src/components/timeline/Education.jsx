import React from "react";
import { Edu } from "./data";

export default function Education() {
  return (
    <>
      <div className="section-title">
        <p>Education</p>
      </div>
      <div className="timeline">
        {Edu.map((edu, index) => (
          <div className="timeline-wrapper" key={index}>
            <div className="timeline-yr">
              <span>{edu.year}</span>
            </div>
            <div className="timeline-info">
              <h3>
                <small>{edu.duration}</small>
                <br />
                <span>{edu.course}</span>
              </h3>
              <ul>
                {edu.specialization && (
                  <li>
                    <b>Specialization :</b> {edu.specialization}
                  </li>
                )}
                <li>
                  <b>College Name : </b>
                  {edu.college}
                </li>
                <li>{edu.des}</li>
                <li>
                  <b>Affiliation :</b> {edu.affiliation}
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
