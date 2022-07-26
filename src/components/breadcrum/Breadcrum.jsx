import React from "react";
import "./Breadcrum.css";

export default function Breadcrum(props) {
  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2><i className="fa-solid fa-house"></i></h2>
          <ol>
            <li>
              <a href="/">Home</a>
            </li>
            <li>{props.des}</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
