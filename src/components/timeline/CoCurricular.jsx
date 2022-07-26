import React from "react";
import { CoCurri } from "./data.js";

export default function CoCurricular() {
  return (
    <>
      <div className="section-title">
        <p>Co - Curricular</p>
      </div>
      <div className="timeline">
        {CoCurri.map((cc, index) => (
          <div className="timeline-wrapper" key={index}>
            <div className="timeline-yr">
              <span>
                {Math.abs(
                  Math.round(
                    (new Date() - new Date(cc.year)) /
                      1000 /
                      (60 * 60 * 24 * 7 * 4)
                  )
                )}
                <small>M</small>
              </span>
            </div>
            <div className="timeline-info">
              <h3>
                <small>{cc.duration}</small>
                <br />
                <span>{cc.position}</span>
              </h3>
              <ul>
                <li>
                  <b>{cc.organization}</b>
                </li>
                <li>{cc.des}</li>
              </ul>
              <p />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
