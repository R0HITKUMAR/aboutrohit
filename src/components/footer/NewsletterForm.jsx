import React from "react";
import { getDatabase,ref, set } from "firebase/database";

export default function NewsletterForm() {
  const [EmailID, setEmailID] = React.useState("");
  const [Flag, setFlag] = React.useState(true);
  const [Alert, setAlert] = React.useState();

  function handleChange(event) {
    const emailcheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailcheck.test(event.target.value)) {
      setAlert("");
      setEmailID(event.target.value);
      setFlag(false);
    } else {
      setEmailID(event.target.value);
      setFlag(true);
      setAlert("Please Enter a valid email address");
    }
  }

  function submitData(event) {
    event.preventDefault();
    var today = new Date().toLocaleString();
    if (!Flag) {
      const db = getDatabase();
      var ID = "RK" + Date.now();
      set(ref(db, "Newsletter-Form/" + ID), {
        Name:"Not Available",
        Email_ID: EmailID,
        Timestamp: today,
      })
        .then(() => {
          setEmailID("");
          setAlert("Subscription Successful");
        })
        .catch((error) => {
          setAlert("Error! " + error.message);
        });
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
          name="Email"
          placeholder="Enter Email ID"
          value={EmailID}
        />
        <button onClick={submitData} type="submit">
          Subscribe
        </button>
      </form>
      <p className="NewsletterAlert mt-3">{Alert}</p>
    </>
  );
}
