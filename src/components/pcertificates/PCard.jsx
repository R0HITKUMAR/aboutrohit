import React from "react";

export default function PCard(props) {
  return (
    <div className="col-4">
      <div className="box">
        <div className="content">
          <h3 className="m-2">{props.data.Certificate_Name}</h3>
          <h5 className="p-2">
            {props.data.Certificate_No !== "-" && (
              <div>
                <b>Certificate No. : </b>
                {props.data.Certificate_No}
                <br />
              </div>
            )}
            <b>Issued On : </b>
            {props.data.Issue_Date}
            <br />
            <b>Issued By : </b>
            {props.data.Issuing_Authority}
          </h5>
        </div>
        <button className="main-btn" onClick={() => props.setDoc(props.id)}>
          View
        </button>
        {props.data.Verify_Link !== "" && (
          <a
            href={props.data.Verify_Link}
            className="main-btn"
            target="_blank"
            rel="noreferrer"
          >
            Verify
          </a>
        )}
      </div>
    </div>
  );
}
