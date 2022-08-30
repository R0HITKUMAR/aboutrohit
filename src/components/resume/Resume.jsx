import React from "react";
import Loader from "../begin/Loader";

export default function Resume() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <section id="pcertificates" className="pcertificates mb-5">
      <div className="container">
        <div className="text-center">
          {loading ? (
            <Loader />
          ) : (
            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 0,
                  paddingTop: "141.4286%",
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
                  src="https://www.canva.com/design/DAFCYRJMClU/view?embed"
                  allowFullScreen="allowfullscreen"
                  allow="fullscreen"
                  title="resume"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
