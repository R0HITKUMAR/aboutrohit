import React from "react";
import Breadcrum from "../components/breadcrum/Breadcrum.jsx";
import PProjects from "../components/pprojects/PProjects";
import Footer from "../components/footer/Footer";
import BackToTop from "../components/footer/BackToTop.jsx";

export default function Projects() {
  return (
    <>
      <Breadcrum des="Projects" />
      <PProjects />
      <Footer />
      <BackToTop />
    </>
  );
}
