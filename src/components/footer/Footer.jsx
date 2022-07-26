import React from "react";
import "./Footer.css";
import NewsletterForm from "./NewsletterForm";
import FCopyright from "./FCopyright";
import img from "../../img/logodark-nobg.png";

export default function Footer() {
  const SocialLinks = [
    {
      name: "LinkedIn",
      icon: "bx bxl-linkedin",
      url: "https://www.linkedin.com/in/rohit2906/",
    },
    {
      name: "GitHub",
      icon: "bx bxl-github",
      url: "https://github.com/R0HITKUMAR",
    },
    {
      name: "Facebook",
      icon: "bx bxl-facebook",
      url: "https://www.facebook.com/rohit.kumar.2906",
    },
    {
      name: "Instagram",
      icon: "bx bxl-instagram",
      url: "https://www.instagram.com/rohit.kumar.2906/",
    },
    {
      name: "Twitter",
      icon: "bx bxl-twitter",
      url: "https://twitter.com/R0HITKUMAR_",
    },
    {
      name: "WhatsApp",
      icon: "bx bxl-whatsapp",
      url: "https://api.whatsapp.com/send?phone=9084950475&text=Contact%20using%20Website",
    },
  ];

  const CodingHandles = [
    { name: "HackerRank", url: "https://www.hackerrank.com/R0HITKUMAR" },
    { name: "HackerEarth", url: "https://www.hackerearth.com/@R0HITKUMAR" },
    { name: "CodeChef", url: "https://www.codechef.com/users/r_k2962002" },
    { name: "CodeForces", url: "https://codeforces.com/profile/r_k2962002" },
    { name: "LeetCode", url: "https://leetcode.com/R0HITKUMAR/" },
    {
      name: "GFG",
      url: "https://auth.geeksforgeeks.org/user/r0hitkumar/profile",
    },
    {
      name: "StopStalk",
      url: "https://www.stopstalk.com/user/profile/r_k2962002",
    },
    { name: "GitHub", url: "https://github.com/R0HITKUMAR" },
  ];

  const UsefulLinks = [
    { name: "Home", url: "/Home" },
    { name: "Blog", url: "https://blog.rohitkumar.ml" },
    { name: "Mail Login", url: "https://mail.yandex.com/" },
    { name: "Google Drive", url: "#" },
    { name: "GitHub", url: "#" },
  ];

  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="footer-info">
                <h3>
                  <img src={img} height={"50px"} alt="Logo-Rohit Kumar" />
                </h3>
                <h3>Rohit Kumar</h3>
                <p className="pb-3">
                  <em>(Computer Science Student)</em>
                </p>
                <p>
                  Ghaziabad, UP
                  <br />
                  <strong>Phone:</strong> +91 9084950475
                  <br />
                  <strong>Email:</strong> r.k2962002@gmail.com
                  <br />
                </p>
                <div className="social-links mt-3">
                  {SocialLinks.map((item, index) => {
                    return (
                      <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`${item.icon}`}></i>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                {UsefulLinks.map((link, index) => {
                  return (
                    <li key={index}>
                      <i className="bx bx-chevron-right" />{" "}
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.name} 
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 col-6 footer-links">
              <h4>Coding Handles</h4>
              <ul>
                {CodingHandles.map((handle, index) => {
                  return (
                    <li key={index}>
                      <i className="bx bx-chevron-right" />{" "}
                      <a
                        href={handle.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {handle.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 col-12 footer-newsletter">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
      <FCopyright />
    </footer>
  );
}
