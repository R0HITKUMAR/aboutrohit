import React from "react";
import Breadcrum from "../components/breadcrum/Breadcrum.jsx";
import PProjects from "../components/pprojects/PProjects";
export default function Projects(props) {
  return (
    <>
      <Breadcrum des="Projects" />
      <PProjects setDoc={props.setDoc} />
    </>
  );
}
