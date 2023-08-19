import React from "react";
import "./Modal.css";

export default function Modal(props) {
  // if (props.status) {
  //   document.body.style.overflow = "hidden";
  // }
  const handleClose = () => {
    props.setLink("");
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className="modal show fade"
      style={{ display: "block" }}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content"><div class="modal-footer">
          <a href={props.doc} class="btn btn-sm btn-primary" target="_blank" rel="noopener noreferrer">Open <i
            class="fa-solid fa-arrow-up-right-from-square ml-2"></i></a>
          <button type="button" class="btn btn-sm btn-secondary" onClick={handleClose}>Close <i
            class="fa-solid fa-x ml-2"></i></button>
        </div>
          <div className="modal-body p-1">
            <iframe
              title="certificate"
              src={props.doc}
              width="100%"
              height="600"
              frameBorder={0}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
