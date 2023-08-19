import React from "react";
import axios from "../Axios.js";

export default function NewsletterForm() {
  const [Alert, setAlert] = React.useState();
  const [data, setdata] = React.useState({
    Email_ID: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setdata({ ...data, [name]: value });
    setAlert("");
  }

  function submitData(event) {
    setAlert("");
    event.preventDefault();
    if (data.Email_ID.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      axios
        .post("/newsletter/add", data)
        .then((res) => {
          setAlert(res.data.message);
          setdata({ Email_ID: "" });
        })
        .catch((err) => {
          setAlert(`Error!</strong> ${err.message}`);
          console.log(err);
        });
    } else {
      setAlert("Please enter a valid email address");
    }
  }

  return (
    <>
      <h4>Subscribe Me</h4>
      <p>Subscribe me to get latest Updates</p>
      <form>
        <input
          onChange={handleChange}
          type="email"
          name="Email_ID"
          placeholder="Enter Email ID"
          value={data.Email_ID}
        />
        <button onClick={submitData} type="submit">
          Subscribe
        </button>
      </form>
      <p className="NewsletterAlert mt-3">{Alert}</p>
    </>
  );
}
