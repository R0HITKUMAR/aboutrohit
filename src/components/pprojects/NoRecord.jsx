import React from "react";
import NoRecordIMG from "../../img/no-record.svg";

export default function NoRecord() {
  return (
    <section id="pprojects" className="pprojects">
      <div className="container text-center">
        <img
          src={NoRecordIMG}
          alt="No Record"
          className="img-fluid"
          style={{ width: "100%" }}
        />
      </div>
    </section>
  );
}
