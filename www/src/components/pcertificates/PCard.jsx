import React from "react";

export default function PCard(props) {
  return (
    <div className="col-md-6 col-12 my-2">
      <div className="certificate-card" onClick={() =>
          props.psetDoc(
            props.Certificate.view
          )}>
        <span className="badge rounded-pill text-bg-primary">{props.Certificate.no}</span>
        <span className="badge rounded-pill text-bg-primary" style={{ float: "right" }}>{props.Certificate.issued_on}</span>
        <br />
        <h3 style={{ cursor: "pointer" }} >{props.Certificate.title}</h3>
        <span>
          <b>Issued By : </b>
          {props.Certificate.issued_by}
          {
            props.Certificate.verify && (
              <a
                href={props.Certificate.verify}
                className="mx-2"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            )
          }
        </span>
      </div>

    </div>
  );
}
