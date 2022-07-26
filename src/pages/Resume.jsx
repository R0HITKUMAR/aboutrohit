import React from "react";
import Breadcrum from "../components/breadcrum/Breadcrum.jsx";
import Resume from "../components/resume/Resume.jsx";
import Footer from "../components/footer/Footer";
import BackToTop from "../components/footer/BackToTop.jsx";

export default function Home() {
  return (
    <>
      <Breadcrum des="Resume" />
      <Resume />
      <Footer />
      <BackToTop />
    </>
  );
}
