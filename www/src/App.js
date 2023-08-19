import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/footer/BackToTop.jsx";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Error from "./pages/404.jsx";
import Modal from "./components/attachmentmodal/AttachmentViewer.jsx";

function App() {
  const [Doc, setDoc] = React.useState("");
  return (
    <>
      <Navbar />
      {Doc !== "" ? <Modal url={Doc} doc={setDoc} /> : null}
      <Routes>
        <Route exact path="/" element={<Home setDoc={setDoc} />} />
        <Route exact path="/home" element={<Home setDoc={setDoc} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/certificates" element={<Certificates setDoc={setDoc}/>} />
        <Route path="/certifications" element={<Certificates setDoc={setDoc}/>} />
        <Route path="/projects/*" element={<Projects setDoc={setDoc} />} />
        <Route path="/project/*" element={<Projects setDoc={setDoc} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
