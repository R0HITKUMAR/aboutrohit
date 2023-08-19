import React from "react";
import axios from "../Axios.js";
import "./PCertificates.css";
import PCard from "./PCard";
import Loader from "../begin/Loader";

export default function PCertificates(props) {
  const [certi, setCerti] = React.useState();
  const [loading, setLoading] = React.useState(true);

  // Find Domain Name
  
  React.useEffect(() => {
    axios
      .get(`/certificate/retrieveAll`)
      .then((res) => {
        setCerti(res.data.reverse());
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section id="pcertificates" className="pcertificates mb-5">
      <div className="container">
        <div className="section-title">
          <h2>()</h2>
          <p>Certifications</p>
        </div>
        {/* Setting Loader */}
        {loading ? (
          <Loader />
        ) : (
          <div className="row">
            {certi
              ? certi.map((cert, index) => (
                <PCard
                  Certificate={cert}
                  key={index}
                  id={index + 1}
                  psetDoc={props.setDoc}
                />
              ))
              : ""}
          </div>
        )}
      </div>
    </section>
  );
}
