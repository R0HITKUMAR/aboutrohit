import React from "react";
import { Achieve } from "./data.js";

export default function Achievements(props) {
  return (
    <>
      <div className="section-title">
        <p>Achievements</p>
      </div>
      <div className="timeline">
        {Achieve.map((achieve, index) => (
          <div className="timeline-wrapper" key={index}>
            <div className="timeline-yr">
              <span>{achieve.year}</span>
            </div>
            <div className="timeline-info">
              <h3>
                <span>{achieve.title}</span>
                <br />
                <small>{achieve.organization}</small>
              </h3>
              <ul>
                <li>{achieve.des}</li>
                {achieve.des1 && <li>{achieve.des1}</li>}
                {achieve.des2 && <li>{achieve.des2}</li>}
              </ul>
              <div className="text-center">
                {achieve.name && achieve.url && (
                  <buttton
                    onClick={() => props.setDoc(achieve.url)}
                    className="main-btn float-right btn-sm m-1"
                  >
                    {achieve.name}
                  </buttton>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
