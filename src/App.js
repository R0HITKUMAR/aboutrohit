import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/footer/BackToTop.jsx";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Error from "./pages/404.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
        <BackToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
