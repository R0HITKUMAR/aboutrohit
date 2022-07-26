import React from "react";
import "./Footer.css";

export default function FCopyright() {
  const Year = new Date().getFullYear();
  return (
    <div className="container">
      <div className="copyright">
        © Copyright {Year} |{" "}
        <strong>
          <span>Rohit Kumar</span>
        </strong>
        . All Rights Reserved
      </div>
      <div className="credits">Thanks for Visiting. Visit Again..</div>
    </div>
  );
}
