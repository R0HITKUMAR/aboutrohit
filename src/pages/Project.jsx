import React from "react";
import { useParams } from "react-router-dom";
import PProject from "../components/pprojects/PProject";
export default function Project(props) {
    const { hash } = useParams();
  return (
    <>
      <PProject hash={hash} setDoc={props.setDoc} />
    </>
  );
}
