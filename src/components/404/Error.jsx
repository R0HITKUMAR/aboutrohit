import React from "react";
import img from "../../img/404.svg";
export default function Error() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img src={img} className="img-fluid" alt="404" />
        </div>
      </div>
    </div>
  );
}
