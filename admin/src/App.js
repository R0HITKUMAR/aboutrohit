import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import config from "./config.js";
import Main from "./components/home/Main";
import Login from "./components/auth/Login";
import Reset from "./components/auth/Reset";
import Dashboard from "./components/dashboard/Dashboard";
import axios from "./components/Axios.js";

export default function Home() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  React.useEffect(() => {
    const path = window.location.pathname;
    axios
      .get(`/auth/validate`, { headers: config.headers })
      .then((res) => {
        if (res.data.isLogged) {
          setIsLoggedIn(true);
          if (path === "/" || path === "/login" || path === "/resetPassword") {
            navigate("/");
          }
        } else {
          console.log("Failed to Authenticate");
          if (path === "/login" || path === "/resetPassword") {
            navigate(path);
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/*" element={isLoggedIn ? <Dashboard /> : <Main />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/resetPassword" element={<Reset />} />
      </Routes>
    </>
  );
}
