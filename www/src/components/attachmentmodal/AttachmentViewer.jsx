import React from "react";
import ViewSDKClient from "../begin/ViewSDKClient.js";

export default function AttachmentViewer(props) {
  const [show, setShow] = React.useState(true);

  // Check for Landscape > Portrait
  const width = window.innerWidth;
  const height = window.innerHeight;
  const path = window.location.pathname;
  const pathName = path.split("/")[1];
  let size = "80vh";
  if (width > height) {
    size = "100vh"
  }else if (width < height && pathName === "certificates") {
    size = "40vh"
  }

  


  if (show) {
    //Set Body Overflow to Hidden
    document.body.style.overflow = "hidden";
  }
  const handleClose = () => {
    setShow(false);
    props.doc("");
    document.body.style.overflow = "auto";
  };

  const loadPDF = (url) => {
    const viewSDKClient = new ViewSDKClient();
    viewSDKClient.ready().then(() => {
      viewSDKClient.previewFile(
        "pdf-div",
        {
          // Remove Top Bar
          showAnnotationTools: false,
          showLeftHandPanel: false,
          showDownloadPDF: false,
          showPrintPDF: false,
          showPageControls: false,
          showFullScreen: false,

        },
        url, {
        embedMode: "LIGHT_BOX"
      }
      );
    });
  };
  loadPDF(props.url);
  return (
    <div
      className="modal show"
      tabIndex={-1}
      aria-hidden="true"
      style={{ display: show ? "block" : "none", backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={handleClose}
    >

      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content" style={{ backgroundColor: "#fff0", border:"none" }}>
          <div className="modal-body">
            <div
              id="pdf-div"
              style={{ height: size, borderRadius: "20px" }}
              className="light-box-container"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
