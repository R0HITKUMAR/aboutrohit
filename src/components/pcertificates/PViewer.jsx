import React from "react";

export default function PViewer(props) {
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
      <div className="modal-dialog modal-dialog-centered modal-lg">
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
            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "70.7071%",
                  paddingBottom: "48px",
                  boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
                  overflow: "hidden",
                  borderRadius: "8px",
                  willChange: "transform",
                }}
              >
                <iframe
                  loading="lazy"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    border: "none",
                    padding: 0,
                    margin: 0,
                  }}
                  src={`https://www.canva.com/design/DAFKfyosQXA/view?embed#${props.url}`}
                  allowFullScreen="allowfullscreen"
                  allow="fullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
