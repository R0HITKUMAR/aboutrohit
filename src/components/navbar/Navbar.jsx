import React from "react";
import "./Navbar.css";
import Logo from "../../img/logodark-nobg.png";

export default function Navbar() {
  const [isActive, setActive] = React.useState("false");
  const handleToggle = () => {
    setActive(!isActive);
  };

  const Links = [
    { name: "Home", url: "/home" },
    { name: "Blog", url: "https://blog.rohitkumar.ml" },
    { name: "Resume", url: "/resume" },
    { name: "Certificates", url: "/certificates" },
    { name: "Projects", url: "/projects" },
    { name: "Login", url: "https://admin.rohitkumar.ml" },
  ];

  return (
    <header
      id="header"
      className="fixed-top d-flex align-items-center header-transparent header-scrolled"
    >
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo">
          <h1>
            <a href="index.html">
              <img src={Logo} alt="Logo" className="img-fluid h-10" />
            </a>
          </h1>
        </div>
        <nav id="navbar" className={isActive ? "navbar" : "navbar-mobile"}>
          <ul>
            {Links.map((item, index) => {
              return (
                <li key={index}>
                  <a className="nav-link scrollto" href={item.url}>
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <i
            onClick={handleToggle}
            className={
              isActive
                ? "bi bi-list mobile-nav-toggle"
                : "bi bi-list mobile-nav-toggle bi-list bi-x"
            }
          />
        </nav>
      </div>
    </header>
  );
}
