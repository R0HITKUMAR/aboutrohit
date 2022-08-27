import React from "react";
// eslint-disable-next-line no-unused-vars
import App from "../../firebase";
import { getDatabase, ref, onValue } from "firebase/database";
import "./PCertificates.css";
import PCard from "./PCard";
import Loader from "../begin/Loader";
import PViewer from "./PViewer";

export default function PCertificates(props) {
  const [certi, setCerti] = React.useState();
  const [Doc, setDoc] = React.useState("");
  const [loading, setLoading] = React.useState(true);

  //Close Loader when data is loaded
  React.useEffect(() => {
    if (certi) {
      setLoading(false);
    }
  }, [certi]);

  React.useEffect(() => {
    const db = getDatabase();
    const data = ref(db, "Certificates-Form"); // CHANGE 'chars' TO YOUR DATABASE NAME
    onValue(data, (snapshot) => {
      const c = snapshot.val();
      const clist = [];
      for (let id in c) {
        clist.push({ id, ...c[id] });
      }
      setCerti(clist);
    });
  }, []);

  return (
    <section id="pcertificates" className="pcertificates mb-5">
      {Doc !== "" ? <PViewer url={Doc} doc={setDoc} /> : null}
      <div className="container">
        <div className="section-title">
          <h2>()</h2>
          <p>Certifications</p>
        </div>
        {/* Setting Loader */}
        {loading ? (
          <Loader />
        ) : (
          <div className="row">
            {certi
              ? certi.map((cert, index) => (
                  <PCard
                    data={cert}
                    key={index}
                    id={index + 1}
                    setDoc={setDoc}
                  />
                ))
              : ""}
          </div>
        )}
      </div>
    </section>
  );
}
