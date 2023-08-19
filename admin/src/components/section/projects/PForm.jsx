import React from "react";
import config from "../../../config.js";
import { useNavigate } from "react-router-dom";
import axios from "../../Axios.js";
import Toast from "../../dashboard/SweetAlert";
import "./Projects.css";
import Swal from "sweetalert2";

export default function PForm(props) {
  const navigate = useNavigate();
  const [rfile, setrFile] = React.useState();
  const [ifile, setiFile] = React.useState();

  const [Pdata, setPdata] = React.useState({
    title: "",
    img: "",
    domain: "",
    technology: "",
    duration: "",
    learn1: "",
    learn2: "",
    learn3: "",
    learn4: "",
    des1: "",
    des2: "",
    des3: "",
    url: "",
    hash: "",
    report: "",
  });

  const saverFile = (e) => {
    setrFile(e.target.files[0]);
  };
  const saveiFile = (e) => {
    setiFile(e.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPdata({
      ...Pdata,
      [name]: value,
    });
  };

  const addProject = () => {
    if (Pdata.img && Pdata.report) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, add it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .post(`/project/add`, Pdata, { headers: config.headers })
            .then((res) => {
              Toast.fire({
                icon: "success",
                title: res.data.message,
              });
              navigate("projects");
              props.setReload(true);
            })
            .catch((err) => {
              Toast.fire({
                icon: "error",
                title: "Oops... Something went wrong!",
              });
              console.log(err);
            });
        }
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "Please upload image and report",
      });
    }
  };

  const uploadrFile = async (e) => {
    if (rfile) {
      Swal.fire({
        imageUrl: 'https://assets.materialup.com/uploads/e7a2ddd9-38ed-405d-9e87-508a2d3e71f7/preview.gif',
        imageHeight: 300,
        background: 'transparent',
        showConfirmButton: false,
      })
      const formData = new FormData();
      formData.append("file", rfile);
      formData.append("location", "web/projects_report");
      try {
        const res = await axios.post(
          "/file/upload",
          formData, { headers: config.headers }
        );
        Toast.fire({
          icon: "success",
          title: "Report Uploaded Successfully",
        });
        console.log(res.data.Location);
        setPdata((prev) => {
          return {
            ...prev,
            report: res.data.Location,
          };
        });

      } catch (err) {
        console.log(err);
      }
      Swal.close();
    } else {
      Toast.fire({
        icon: "error",
        title: "Please Select a File",
      });
    }
  };

  const uploadiFile = async (e) => {
    if (ifile) {
      Swal.fire({
        imageUrl: 'https://assets.materialup.com/uploads/e7a2ddd9-38ed-405d-9e87-508a2d3e71f7/preview.gif',
        imageHeight: 300,
        background: 'transparent',
        showConfirmButton: false,
      })
      const formData = new FormData();
      formData.append("file", ifile);
      formData.append("location", "web/projects_preview");
      try {
        const res = await axios.post(
          "/file/upload",
          formData, { headers: config.headers }
        );
        Toast.fire({
          icon: "success",
          title: "Preview Uploaded Successfully",
        });
        console.log(res.data.Location);
        setPdata((prev) => {
          return {
            ...prev,
            img: res.data.Location,
          };
        });
      } catch (err) {
        console.log(err);
      }
      Swal.close();
    } else {
      Toast.fire({
        icon: "error",
        title: "Please Select a File",
      });
    }
  };

  return (
    <div className="col-md-6 col-12 project-form">
      <div className="box-info pform">
        <div className="box-content">
          <div className="box-info-head">
            <span className="badge text-bg-success">
              <input
                type="text"
                name="domain"
                value={Pdata.domain}
                onChange={handleChange}
                placeholder="Enter Project Domain"
              />
            </span>
            <span className="badge text-bg-primary" style={{ float: "right" }}>
              <input
                type="text"
                name="duration"
                value={Pdata.duration}
                onChange={handleChange}
                placeholder="Enter Project Duration"
              />
            </span>
            <h5>
              <input
                type="text"
                name="title"
                value={Pdata.title}
                onChange={handleChange}
                placeholder="Enter Project Name"
              />
            </h5>
          </div>
          <div className="box-info-body row">
            <div className="col-6">
              {Pdata.img ? (
                <img src={Pdata.img} alt="project" className="img-fluid" />
              ) : (
                <img
                  src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg"
                  alt="project"
                  className="img-fluid"
                />
              )}
            </div>
            <div className="col-6 sec">
              <p>Skills</p>
              <textarea
                type="text"
                name="technology"
                value={Pdata.technology}
                onChange={handleChange}
                rows={4}
                placeholder="Enter Skills Separated by Comma"
              ></textarea>
              <p>Hash</p>
              <input
                type="text"
                name="hash"
                value={Pdata.hash}
                onChange={handleChange}
                placeholder="Enter Project hash"
              />
            </div>
            {!Pdata.img ? (
              <div class="input-group mb-3">
                <input
                  className="form-control form-control-sm"
                  style={{ marginLeft: "0px", width: "80%" }}
                  onChange={saveiFile}
                  type="file"
                />
                <button
                  className="btn btn-primary btn-sm"
                  onClick={uploadiFile}
                >
                  Upload
                </button>
              </div>
            ) : (
              <p>File Uploaded Successfully</p>
            )}
            <p>Description</p>
            <ul>
              <li>
                <input
                  type="text"
                  name="des1"
                  value={Pdata.des1}
                  onChange={handleChange}
                  placeholder="Enter Description 1"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="des2"
                  value={Pdata.des2}
                  onChange={handleChange}
                  placeholder="Enter Description 2"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="des3"
                  value={Pdata.des3}
                  onChange={handleChange}
                  placeholder="Enter Description 3"
                />
              </li>
            </ul>
            <p>Learnings</p>
            <ul>
              <li>
                <input
                  type="text"
                  name="learn1"
                  value={Pdata.learn1}
                  onChange={handleChange}
                  placeholder="Enter Learning 1"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="learn2"
                  value={Pdata.learn2}
                  onChange={handleChange}
                  placeholder="Enter Learning 2"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="learn3"
                  value={Pdata.learn3}
                  onChange={handleChange}
                  placeholder="Enter Learning 3"
                />
              </li>
              <li>
                <input
                  type="text"
                  name="learn4"
                  value={Pdata.learn4}
                  onChange={handleChange}
                  placeholder="Enter Learning 4"
                />
              </li>
            </ul>
            <p>URL</p>
            <ul>
              <li>
                <input
                  type="text"
                  name="url"
                  value={Pdata.url}
                  onChange={handleChange}
                  placeholder="Enter Project URL"
                />
              </li>
            </ul>
            <p>Project Report</p>
            {!Pdata.report ? (
              <div class="input-group mb-3">
                <input
                  className="form-control form-control-sm"
                  style={{ marginLeft: "0px", width: "80%" }}
                  onChange={saverFile}
                  type="file"
                />
                <button
                  className="btn btn-primary btn-sm"
                  onClick={uploadrFile}
                >
                  Upload
                </button>
              </div>
            ) : (
              <p>File Uploaded Successfully</p>
            )}
          </div>

          <div className="box-info-footer">
            <button onClick={() => navigate("projects")}>
              <i className="fa fa-duotone fa-x"></i>
            </button>
            <button onClick={addProject}>
              <i className="fa fa-duotone fa-add"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
