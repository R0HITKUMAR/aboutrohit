import React from "react";
import axios from "../../Axios.js";
import config from "../../../config.js";
import { useNavigate } from "react-router-dom";
import SweetAlert from "sweetalert2";
import Toast from "../../dashboard/SweetAlert";
import Swal from "sweetalert2";

export default function CCard(props) {
  const navigate = useNavigate();

  const deleteCertificate = () => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `/certificate/delete/${props.Certificate.id}`, { headers: config.headers }
          )
          .then((res) => {
            Swal.close();
            Swal.fire({
              icon: "success",
              title: "Certificate Deleted Successfully",
            });
            navigate("/certifications");
            props.setReload(true);
          })
          .catch((err) => {
            Swal.close();
            Toast.fire({
              icon: "error",
              title: err.response.data.message,
            });
          });
      } else {
        Swal.fire({
          icon: "error",
          title: "Operation Cancelled by Admin",
        });
      }
    });
  };



  return (
    <div className="col-md-6 col-12">
      <div className="box-info">
        <div className="box-content">
          <div className="box-info-head">
            <span className="badge text-bg-success">
              {props.Certificate.issued_on}
            </span>
            <h5>{props.Certificate.title}</h5>
            <span className="badge text-bg-success">
              {props.Certificate.no && (
                <>Certificate No: {props.Certificate.no}</>
              )}
            </span>
          </div>
          <div className="box-info-body">
            <p>Issued By : {props.Certificate.issued_by}</p>
          </div>
          <div className="box-info-footer">
            {props.Certificate.verify && (
              <a
                href={props.Certificate.verify}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-duotone fa-arrow-up-right-from-square"></i>
              </a>
            )}
            <button
              onClick={() =>
                navigate(
                  `/certifications/updateCertificate/${props.Certificate.id}`
                )
              }
            >
              <i className="fa fa-duotone fa-edit"></i>
            </button>
            <button onClick={() => props.setLink(props.Certificate.view)}>
              <i className="fa fa-duotone fa-eye"></i>
            </button>
            <button onClick={deleteCertificate}>
              <i className="fa fa-duotone fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
