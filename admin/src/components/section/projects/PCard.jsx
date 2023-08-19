import React from "react";
import axios from "../../Axios.js";
import config from "../../../config.js";
import { useNavigate } from "react-router-dom";
import Toast from "../../dashboard/SweetAlert";
import Swal from "sweetalert2";

export default function PCard(props) {
  const navigate = useNavigate();

  const deleteProject = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `/project/delete/${props.Project._id}`, { headers: config.headers }
          )
          .then((res) => {
            Toast.fire({
              icon: "success",
              title: res.data.message,
            });
            props.setReload(true);
          })
          .catch((err) => {
            Toast.fire({
              icon: "error",
              title: err.response.data.message,
            });
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
              {props.Project.domain}
            </span>
            <span className="badge text-bg-primary" style={{ float: "right" }}>
              {props.Project.duration}
            </span>
            <h5>{props.Project.title}</h5>
          </div>
          <div className="box-info-body row">
            <div className="col-6">
              <img
                src={props.Project.img}
                alt="project"
                className="img-fluid"
              />
            </div>
            <div className="col-6">
              <p>Skills</p>
              {props.Project.technology.split(",").map((tech, index) => {
                return (
                  <span className="badge text-bg-warning" key={index}>
                    {tech}
                  </span>
                );
              })}
              <p className="mt-2">Hash : {props.Project.hash}</p>
            </div>
            <p>Description</p>
            <ul>
              <li>{props.Project.des1}</li>
              <li>{props.Project.des2}</li>
              <li>{props.Project.des3}</li>
            </ul>
            <p>Learnings</p>
            <ul>
              <li>{props.Project.learn1}</li>
              <li>{props.Project.learn2}</li>
              <li>{props.Project.learn3}</li>
              <li>{props.Project.learn4}</li>
            </ul>
          </div>
          <div className="box-info-footer">
            <a
              href={props.Project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-duotone fa-arrow-up-right-from-square"></i>
            </a>
            <button onClick={() => props.setLink(props.Project.report)}>
              <i className="fa fa-duotone fa-eye"></i>
            </button>
            <button
              onClick={() =>
                navigate(`/projects/updateProject/${props.Project._id}`)
              }
            >
              <i className="fa fa-duotone fa-edit"></i>
            </button>
            <button onClick={deleteProject}>
              <i className="fa fa-duotone fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
