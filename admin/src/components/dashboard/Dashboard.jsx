import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Dashboard.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Modal from "../section/modal/Modal";
import Home from "../section/home/Home";
import Certifications from "../section/certifications/Certifications";
import Projects from "../section/projects/Projects";
import Todo from "../section/todo/Todo";
import WebForms from "../section/webforms/WebForms";
import URL from "../section/url/URL";
import Resume from "../section/resume/Resume";

export default function Dashboard(props) {
  const navigate = useNavigate();
  const [mode, setMode] = React.useState(false);
  const [stoggle, setStoggle] = React.useState(true);
  const [link, setLink] = React.useState("");

  mode
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark");

  function toggle() {
    setStoggle(!stoggle);
  }

  function toggleMode() {
    setMode(!mode);
  }

  async function logout() {
    Swal.fire({
      title: "Logout ?",
      text: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        window.location.reload();
      }
    });
  }

  return (
    <>
      {link && <Modal setLink={setLink} doc={link} />}
      <Sidebar toggle={stoggle} logout={logout} mode={mode} />
      <section id="content">
        <Navbar stoggle={toggle} logout={logout} mtoggle={toggleMode} />
        <main>
          <Routes>
            <Route exact path="/*" element={<Home />} />
            <Route
              path="/certifications/*"
              element={<Certifications setLink={setLink} />}
            />
            <Route
              path="/projects/*"
              element={<Projects setLink={setLink} />}
            />
            <Route path="/webForms/*" element={<WebForms />} />
            <Route path="/todo/*" element={<Todo />} />
            <Route path="/url/*" element={<URL />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
      </section>
    </>
  );
}
