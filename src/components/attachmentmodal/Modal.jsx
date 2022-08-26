import React from "react";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";

export default function Modal(props) {
  const [show, setShow] = React.useState(true);

  if (show) {
    //Set Body Overflow to Hidden
    document.body.style.overflow = "hidden";
  }
  const handleClose = () => {
    setShow(false);
    props.doc("");
    document.body.style.overflow = "auto";
  };

  return (
    <div
      className="modal fade show"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      role="dialog"
      style={{ display: show ? "block" : "none" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content">
          <div className="modal-footer">
            <a
              href={props.url}
              id="attachmentView"
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              Open <i className="fa-solid fa-arrow-up-right-from-square ml-2" />
            </a>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={handleClose}
            >
              Close <i className="fa-solid fa-x ml-2" />
            </button>
          </div>
          <div className="modal-body">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
              <div style={{ height: "750px" }}>
                <Viewer fileUrl={props.url} />
              </div>
            </Worker>
          </div>
        </div>
      </div>
    </div>
  );
}
