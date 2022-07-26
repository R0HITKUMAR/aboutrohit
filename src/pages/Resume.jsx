import React from "react";
import Breadcrum from "../components/breadcrum/Breadcrum.jsx";
import Resume from "../components/resume/Resume.jsx";

export default function Home() {
  return (
    <>
      <Breadcrum des="Resume" />
      <Resume />
    </>
  );
}
