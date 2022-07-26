import React from "react";
import Breadcrum from "../components/breadcrum/Breadcrum.jsx";
import PCertificates from "../components/pcertificates/PCertificates.jsx";
import Footer from "../components/footer/Footer";
import BackToTop from "../components/footer/BackToTop.jsx";

export default function Certificates() {
  return (
    <>
      <Breadcrum des="Certificates" />
      <PCertificates />
      <Footer />
      <BackToTop />
    </>
  );
}
