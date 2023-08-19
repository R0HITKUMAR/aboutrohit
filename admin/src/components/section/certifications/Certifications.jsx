import React from "react";
import axios from "../../Axios.js";
import config from "../../../config.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./Certifications.css";
import NoRecord from "../norecord/NoRecord";
import Loader from "../loader/Loader";
import CSlider from "./CSlider";
import CCard from "./CCard";
import CForm from "./CForm";
import CUForm from "./CUForm";

export default function Certificates(props) {
  const navigate = useNavigate();
  const [Certificates, setCertificates] = React.useState([]);
  const [reload, setReload] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`/certificate/retrieveAll`,)
      .then((res) => {
        setCertificates(res.data);
        setIsLoading(false);
        setReload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [reload]);

  return (
    <section id="certificates">
      <div className="head-title">
        <div className="left">
          <h1>Certificates</h1>
        </div>
        <div className="right">
          <button
            onClick={() => {
              navigate("/certifications");
            }}
            className="badge rounded-pill text-bg-primary m-1"
          >
            Certificates
          </button>
          <button
            onClick={() => {
              navigate("/certifications/viewCertificates");
            }}
            className="badge rounded-pill text-bg-primary m-1"
          >
            View All
          </button>
          <button
            onClick={() => {
              navigate("/certifications/addCertificate");
            }}
            className="badge rounded-pill text-bg-primary m-1"
          >
            Add Certificate
          </button>
        </div>
      </div>
      <div className="certificates-cards">
        <div className="row">
          <Routes>
            <Route
              exact
              path="/*"
              element={
                <>
                  {!isLoading ? (
                    <>
                      {Certificates.length > 0 ? (
                        Certificates.map((certificate, index) => {
                          return (
                            <CCard
                              Certificate={certificate}
                              key={index}
                              setLink={props.setLink}
                              setReload={setReload}
                            />
                          );
                        })
                      ) : (
                        <NoRecord />
                      )}
                    </>
                  ) : (
                    <Loader />
                  )}
                </>
              }
            />
            <Route exact path="/viewCertificates" element={<CSlider />} />
            <Route exact path="/addCertificate" element={<CForm setReload={setReload} />} />
            <Route path="/updateCertificate/:hash" element={<CUForm setReload={setReload} />} />
          </Routes>
        </div>
      </div>
    </section>
  );
}
