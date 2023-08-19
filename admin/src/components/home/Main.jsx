import React from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo/logo-full-nobg-dark.svg";

export default function Main() {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/login");
  }, []);

  return (
    <section id="main-landing" className="text-light text-center">
      <img src={logo} alt="logo" className="logo img-fluid" />
      <br></br>
      <button className="btn" onClick={() => navigate("/login")}>
        Continue
      </button>
    </section>
  );
}
