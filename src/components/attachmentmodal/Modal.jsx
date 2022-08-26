import React from "react";


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
          <iframe
              src={props.url}
              width="100%"
              height="600px"
              frameBorder="0"
              title="Attachment"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
