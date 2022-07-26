import React from "react";
import Loader from "../begin/Loader";
import img from "./resume.svg";

export default function Resume() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <section id="pcertificates" className="pcertificates mb-5">
      <div className="container">
        <div className="section-title">
          <h2>()</h2>
          <p>Resume</p>
        </div>
        <div className="text-center">
          {loading ? <Loader /> : <img src={img} width="100%" alt="Resume" />}
        </div>
      </div>
    </section>
  );
}
