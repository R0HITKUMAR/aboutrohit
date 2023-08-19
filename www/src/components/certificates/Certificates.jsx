import React from "react";
import "./Certificates.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { certificates, cnames } from "./data.js";

export default function Gallery() {
  return (
    <section id="certificates" className="certificates mt-5">
      <div className="container">
        <div className="section-title">
          <h2>()</h2>
          <p>Certifications</p>
        </div>
        <div className="row">
          <div className="col-md-7 col-12 cslideshow">
            <ImageGallery items={certificates} />
          </div>
          <div className="col-md-5 col-12 ml-5 content">
            <h3 className="text-center">Popular Certification</h3>
            <p className="text-center fst-italic">
              "Practice makes men perfect".
            </p>
            <ul>
              {cnames.map((item, index) => {
                return (
                  <li key={index}>
                    <i className="bi bi-check" />
                    {item.name}
                  </li>
                );
              })}
            </ul>
            <div className="p-5 text-center">
              <a href="/certificates" className="main-btn">
                View More..
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
