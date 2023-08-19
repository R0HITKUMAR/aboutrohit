import React from "react";
import axios from "../Axios.js"
import "./Auth.css";
import { useNavigate } from "react-router-dom";
import img from "../../assets/img/login.svg";

export default function Login(props) {
  const navigate = useNavigate();
  const [alert, setAlert] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [load, setLoad] = React.useState(false);
  const [User, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...User,
      [name]: value,
    });
    setAlert("");
  };

  function Login(e) {
    e.preventDefault();
    setLoad(true);
    if (
      User.password &&
      User.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
    ) {
      axios
        .post(`/auth/login`, User)
        .then((res) => {
          setAlert(res.data.message);
          props.setIsLoggedIn(true);
          localStorage.setItem("token", res.data.token);
          navigate("/");
        })
        .catch((err) => {
          setLoad(false);
          setAlert(JSON.stringify(err));
          setAlert(err.response.data.message);
        });
    } else {
      setLoad(false);
      setAlert("Please fill all the fields correctly");
    }
  }

  return (
    <div class="main">
      <section id="login">
        <div className="container">
          <div className="form-content">
            <div className="form-image">
              <figure>
                <img src={img} alt="Get Started with Resumee" />
              </figure>
            </div>
            <div className="form">
              <h2 className="form-title">Login</h2>
              <form className="main-form mt-5">
                <p className="form-alert">&nbsp;{alert}</p>
                <div className="form-group">
                  <label>
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    value={User.email}
                    placeholder="Email"
                  />
                </div>
                <div className="form-text text-muted"></div>
                <div className="form-group flex">
                  <label>
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <label style={{ marginLeft: "90%" }}>
                    <i
                      className={showPassword ? "zmdi zmdi-eye" : "zmdi zmdi-eye-off"}
                      onClick={() => setShowPassword(!showPassword)}
                      style={{ cursor: "pointer" }}
                    />
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    value={User.password}
                    placeholder="Password"
                  />
                </div>
                <div className="form-text text-muted"></div>
                <div className="form-button text-center">
                  <button type="submit" onClick={Login} id="loginBtn" className="main-btn">
                    {load ? (
                      <div className="spinner-border text-light" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <div className="text-light" role="status">
                        Login
                      </div>
                    )}
                  </button>
                  <button
                    onClick={() => navigate("/resetPassword")}
                    className="form-switch"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
