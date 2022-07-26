import React from "react";
import Breadcrum from "../components/breadcrum/Breadcrum.jsx";
import Error from "../components/404/Error.jsx";
import Footer from "../components/footer/Footer";
import BackToTop from "../components/footer/BackToTop.jsx";

export default function Certificates() {
  return (
    <>
      <Breadcrum des="Error! 404" />
      <Error />
      <Footer />
      <BackToTop />
    </>
  );
}
