import React from "react";
import "./About.css";

export default function About() {
  const Details = {
    text1: "Welcome to my Portfolio Website",
    text2:
      "I love to learn about new technologies and would like to contribute alongwith upgrading my skills and knowledge.",
  };

  const Links = [
    { name: "Skills", url: "#skills" },
    { name: "Timeline", url: "#timeline" },
    { name: "Certifications", url: "#certificates" },
    { name: "Projects", url: "#projects" },
    { name: "Badges", url: "#badges" },
    { name: "Recent Blogs", url: "#blogs" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <section id="about" className="about">
      <div className="container-fluid">
        <div className="d-flex flex-column align-items-stretch justify-content-center text-center pb-1">
          <h3>{Details.text1}</h3>
          <p>({Details.text2})</p>
        </div>
        <div className="text-center">
          {Links.map((A,index) => {
            return (
              <a key={index} href={A.url} className="main-btn">
                {A.name}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
