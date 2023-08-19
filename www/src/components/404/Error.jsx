import React from "react";
import img from "../../img/404.svg";
export default function Error() {
  return (
    <div className="container text-center">
      <img
        src={img}
        className="img-fluid"
        alt="404"
        style={{ height: "500px", width: "auto" }}
      />
    </div>
  );
}
