import React from "react";
import { useNavigate } from "react-router-dom";

export default function Resume() {
    const navigate = useNavigate();
    return (
        <section id="resume">
            <div className="head-title">
                <div className="left">
                    <h1>Resume</h1>
                </div>
                <div className="right">
                    <button
                        onClick={() => {
                            navigate("/");
                        }}
                        className="badge rounded-pill text-bg-primary"
                    >
                        Home
                    </button>
                </div>
            </div>
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
                    title="Resume"
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
                ></iframe>
            </div>
        </section>
    );
}
