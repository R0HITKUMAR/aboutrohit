import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import "./Contact.css";

export default function Contact() {
  const [alert, setAlert] = React.useState();
  const [Flag, setFlag] = React.useState(true);
  const [data, setData] = React.useState({
    Name: "",
    Phone: "",
    Email: "",
    Message: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    const emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      (name === "Email" && emailcheck.test(value)) ||
      (name === "Phone" && value.length === 10)
    ) {
      setAlert("");
      setFlag(false);
    } else {
      setFlag(true);
      setAlert(`Enter a Valid ${name} Address`);
    }
  }

  function submitData(event) {
    event.preventDefault();
    if (!Flag) {
      const db = getDatabase();
      var today = new Date().toLocaleString();
      var ID = "RK" + Date.now();
      set(ref(db, "Contact-Form/" + ID), {
        Name: data.Name,
        Phone: data.Phone,
        Email: data.Email,
        Message: data.Message,
        Status: "Submitted",
        TimeStamp: today,
      })
        .then(() => {
          setAlert("Success! Thanks for Contacting Me.");
          setData({ Name: "", Phone: "", Email: "", Message: "" });
        })
        .catch((error) => {
          setAlert("Error!</strong> {error.message}");
        });
    } else {
      setAlert("Something is Missing");
    }
  }

  return (
    <section id="contact" className="contact mb-5">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p>Ghaziabad, UP</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>r.k2962002@gmail.com | mail@rohitkumar.ml</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+91 9084950475</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0">
            {alert && (
              <div className="alert text-center" role="alert">
                {alert}
              </div>
            )}
            <form className="contact-form">
              {/* ----------- */}
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    onChange={handleChange}
                    type="text"
                    name="Name"
                    className="form-control"
                    placeholder="Your Name"
                    value={data.Name}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    onChange={handleChange}
                    type="number"
                    className="form-control"
                    name="Phone"
                    placeholder="Your Contact No."
                    value={data.Phone}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  onChange={handleChange}
                  type="email"
                  className="form-control"
                  name="Email"
                  placeholder="Your Email Address"
                  value={data.Email}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  onChange={handleChange}
                  className="form-control"
                  name="Message"
                  rows={5}
                  placeholder="Message"
                  value={data.Message}
                  required
                />
              </div>
              <div className="text-center">
                <button onClick={submitData} className="main-btn" type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
