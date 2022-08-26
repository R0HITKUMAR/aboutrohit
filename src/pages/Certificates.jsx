import React from "react";
import Breadcrum from "../components/breadcrum/Breadcrum.jsx";
import PCertificates from "../components/pcertificates/PCertificates.jsx";

export default function Certificates(props) {
  return (
    <>
      <Breadcrum des="Certificates" />
      <PCertificates setDoc={props.setDoc} />
    </>
  );
}
