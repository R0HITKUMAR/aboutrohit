import React from "react";
import "./Hero.css";
import Img from "../../img/hero-img.png";

export default function Hero() {
  const Details = {
    name: "Rohit Kumar",
    description:
      "I am a self-motivated individual with a dynamic personality who has quick learning ability and passion for creating new things.",
  };

  return (
    <section id="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 pt-5 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
            <div className="destext">
              <h1>
                I'm <span>{Details.name}</span>
              </h1>
              <h2>{Details.description}</h2>
              <div className="text-center text-lg-start">
                <a href="#resume" className="main-btn-hero">
                  Welcome
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2 hero-img">
            <img src={Img} className="img-fluid animated" alt="" />
          </div>
        </div>
      </div>
      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x={50}
            y={3}
            fill="rgba(255,255,255, .1)"
          ></use>
        </g>
        <g className="wave2">
          <use
            xlinkHref="#wave-path"
            x={50}
            y={0}
            fill="rgba(255,255,255, .2)"
          ></use>
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x={50} y={9} fill="#fff"></use>
        </g>
      </svg>
    </section>
  );
}
