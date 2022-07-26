import React from "react";
import "./Skills.css";
import Category from "./data.js";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>()</h2>
          <p>Skills</p>
        </div>
        <div className="part">
          <h3>
            I am passionate about learning and sharing, but more importantly, I
            am an empathetic person who strives for self-improvement and helping
            others. I take pride in surpassing expectations,not only by my work
            but through my contributions to the team.
          </h3>
        </div>

        {Category.map((A, index) => {
          return (
            <div className="row justify-content-center" key={index}>
              <div className="section-title">
                <h2>({A.type})</h2>
              </div>
              {A.diff.map((B, index) => {
                return (
                  <div className="col-lg-3 col-md-4 col-6" key={index}>
                    <div className="icon-box">
                      <img src={B.img} />
                      <h3 className="">
                        <a href="#">{B.name}</a>
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
