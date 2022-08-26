import React from "react";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

export default function PCard(props) {
  return (
    <>
      <section id="pprojects" className="pprojects">
        <div className="container">
          <div className="section-title text-center">
            <h2>()</h2>
            <p>{props.data.title}</p>
          </div>
          <div className="content">
            <div className="row">
              <div className="row project-card">
                <div className="col-12 col-offset-2">
                  <img src={props.data.img} alt={props.data.title} />
                </div>
                <div className="col-12 m-5">
                  <p className="fst-italic">
                    <b>Domain : </b>
                    {props.data.domain} <br />
                    <b>Technology Used : </b>
                    {props.data.technology}
                    <br />
                    <b>Duration :</b>
                    {props.data.duration}
                  </p>
                  <div>
                    {props.data.des1 ? (
                      <b>Description:</b>
                    ) : (
                      <h1 className="text-center">
                        <b>Coming Soon</b>
                      </h1>
                    )}
                    <ul>
                      {props.data.des1 && <li>{props.data.des1}</li>}
                      {props.data.des1 && <li>{props.data.des2}</li>}
                      {props.data.des1 && <li>{props.data.des3}</li>}
                    </ul>
                  </div>
                  <div>
                    {props.data.learn1 ? (
                      <b>Learnings :</b>
                    ) : (
                      <h6 className="text-center">
                        <b>Under Process</b>
                      </h6>
                    )}
                    <ul>
                      {props.data.learn1 && <li>{props.data.learn1}</li>}
                      {props.data.learn1 && <li>{props.data.learn2}</li>}
                      {props.data.learn1 && <li>{props.data.learn3}</li>}
                      {props.data.learn1 && <li>{props.data.learn4}</li>}
                    </ul>
                  </div>
                </div>
                <div className="text-center">
                  {props.data.buttons &&
                    props.data.buttons.map((button, index) => (
                      <a
                        href={button.url}
                        target="_blank"
                        className="main-btn"
                        key={index}
                        rel="noopener noreferrer"
                      >
                        {button.name}
                      </a>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="section-title text-center">
            <h2>()</h2>
            <p>Project Report</p>
          </div>
          <div className="content" style={{ marginBottom: "50px" }}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
              <div style={{ height: "600px" }}>
                <Viewer fileUrl={props.data.report} />
              </div>
            </Worker>
          </div>
        </div>
      </section>
    </>
  );
}
