import React from "react";
import "./Timeline.css";
import Education from "./Education";
import Achievements from "./Achievements";
import CoCurricular from "./CoCurricular";
import Internships from "./Internships";


export default function Timeline() {
  return (
    <section id="timeline" className="timeline">
      <div className="container">
        <div className="section-title">
          <h2>Go Throught my Journey</h2>
          <p>Timeline</p>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <Education />
            <CoCurricular/>
            <Internships />
          </div>
          <div className="col-lg-6 col-12">
            <Achievements />  
          </div>
        </div>
      </div>
    </section>
  );
}
