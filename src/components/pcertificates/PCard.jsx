import React from "react";

export default function PCard(props) {
  
  return (
    <div className="col-lg-4 col-12">
      <div className="box">
        <div className="content">
          <button
            className="btn btn-sm btn-primary"
            style={{ float: "left", position: "absolute", left: "0" }}
            onClick={() => props.setDoc(props.data.View_Link)}
          >
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
          <iframe
            src={props.data.View_Link}
            scrolling="no"
            title={props.data.Certificate_Name}
          ></iframe>
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
