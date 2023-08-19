import React from "react";
import {useNavigate } from "react-router-dom";
import "./Breadcrum.css";

export default function Breadcrum(props) {
  const navigate = useNavigate();

  return (
    <section className="breadcrumbs">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h2>
            <i className="fa-solid fa-house"></i>
          </h2>
          <ol>
            <li>
              <button onClick={() => navigate('/home')}>Home</button>
            </li>
            {props.des && <li>{props.des}</li>}
          </ol>
        </div>
      </div>
    </section>
  );
}
