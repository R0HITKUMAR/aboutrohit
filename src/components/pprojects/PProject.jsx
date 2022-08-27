import React from "react";
import "./PProjects.css";
import PBreadcrum from "../breadcrum/PBreadcrum.jsx";
import PCard from "./PCard";
import Data from "./projects/data";
import Loader from "../begin/Loader";
import NoRecord from "./NoRecord";

export default function PProject(props) {
  const [info, setinfo] = React.useState([]);
  const [available, setavailable] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  // Find matching project from data
  React.useEffect(() => {
    if (Data) {
      // eslint-disable-next-line
      Data.find((project) => {
        if (project.hash === props.hash) {
          setinfo(project);
          setavailable(true);
        }
      });
      setLoading(false);
    }
  }, [props.hash]);

  return (
    <>
      {available ? (
        <PBreadcrum des={`${info.title}`} />
      ) : (
        <PBreadcrum des={`Error 404!`} />
      )}
      {loading ? (
        <Loader />
      ) : available ? (
        <PCard data={info} setDoc={props.setDoc} />
      ) : (
        <NoRecord />
      )}
    </>
  );
}
