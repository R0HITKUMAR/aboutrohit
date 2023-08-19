import React from "react";

export default function CSlider() {
  return (
    <center>
      <section style={{ width: "60%" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: 0,
            paddingTop: "70.7071%",
            paddingBottom: "48px",
            boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
            marginTop: "1.6em",
            marginBottom: "0.9em",
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
            title="CSlider"
            src="https://www.canva.com/design/DAFKfyosQXA/view?embed"
            allowFullScreen="allowfullscreen"
            allow="fullscreen"
          ></iframe>
        </div>
      </section>
    </center>
  );
}
