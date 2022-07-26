import React from "react";
import "./Blog.css";
import blogdata from "./data.js";

export default function Blog() {
  return (
    <section id="blogs" className="blog">
      <div className="container">
        <div className="section-title">
          <h2>Recent</h2>
          <p>Blogs</p>
        </div>
        <div className="row">
          {blogdata.map((b, index) => {
            return (
              <div className="col-lg-4 col-12" key={index}>
                <div className="box">
                  <div className="content">
                    <span className="advanced">{b.category}</span>
                    <img src={b.img} alt={b.title} />
                    <h3 className="m-2">{b.title}</h3>
                    <p className="p-2">{b.desc}</p>
                  </div>
                  <a href={b.url} className="btn-link">
                    Read More.
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
