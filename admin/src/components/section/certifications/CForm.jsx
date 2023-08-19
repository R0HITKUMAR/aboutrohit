import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../Axios.js";
import config from "../../../config.js";
import Toast from "../../dashboard/SweetAlert";
import Swal from "sweetalert2";

export default function CForm(props) {
  const navigate = useNavigate();

  const [file, setFile] = React.useState();
  const [Cdata, setCdata] = React.useState({
    title: "",
    no: "",
    issued_by: "",
    issued_on: "",
    verify: "",
    view: "",
  });
  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadFile = async (e) => {
    if (file) {
      Swal.fire({
        imageUrl: 'https://assets.materialup.com/uploads/e7a2ddd9-38ed-405d-9e87-508a2d3e71f7/preview.gif',
        imageHeight: 300,
        background: 'transparent',
        showConfirmButton: false,
      })
      const formData = new FormData();
      formData.append("file", file);
      formData.append("location", "web/certificates");
      console.log(formData);
      try {
        const res = await axios.post(
          "/file/upload",
          formData, { headers: config.headers }
        );
        setCdata({
          ...Cdata,
          view: res.data.Location,
        });
        console.log(res.data.Location);
      } catch (err) {
        console.log(err);
      }
      Swal.close();
    }
    else {
      Toast.fire({
        icon: "error",
        title: "Please Select a File",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCdata({
      ...Cdata,
      [name]: value,
    });
  };

  const addCertificate = () => {
    if (
      Cdata.title !== "" &&
      Cdata.issued_by !== "" &&
      Cdata.issued_on !== "" &&
      Cdata.view !== ""
    ) {
      // Confirm
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Add it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            imageUrl: 'https://assets.materialup.com/uploads/e7a2ddd9-38ed-405d-9e87-508a2d3e71f7/preview.gif',
            imageHeight: 300,
            background: 'transparent',
            showConfirmButton: false,
          })
          axios
            .post(`/certificate/add`, Cdata, { headers: config.headers })
            .then((res) => {
              Swal.fire({
                icon: "success",
                title: "Certificate Added Successfully",
              });
              navigate("/certifications");
              props.setReload(true);
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops... Something went wrong!",
              });
              console.log(err);
            });
          Swal.close();
        }
      });
    } else {
      Toast.fire({
        icon: "error",
        title: "Oops... Something went wrong!",
      });
    }
  };

  return (
    <div className="col-md-6 col-12 certificate-form">
      <div className="box-info">
        <div className="box-content">
          <div className="box-info-head">
            <span className="badge text-bg-success">
              <input
                type="text"
                name="issued_on"
                value={Cdata.issued_on}
                onChange={handleChange}
                placeholder="Issued On"
              />
            </span>
            <h5>
              <input
                type="text"
                name="title"
                value={Cdata.title}
                onChange={handleChange}
                placeholder="Enter Certificate Title"
              />
            </h5>
            <span className="badge text-bg-success no">
              <input
                type="text"
                name="no"
                value={Cdata.no}
                onChange={handleChange}
                placeholder="Enter Certificate No."
              />
            </span>
          </div>
          <div className="box-info-body">
            <p>
              Issued By :
              <input
                type="text"
                name="issued_by"
                value={Cdata.issued_by}
                onChange={handleChange}
                placeholder="Enter Issuing Authority Name"
              />
            </p>
            <p>
              Verify URL:
              <input
                type="text"
                name="verify"
                value={Cdata.verify}
                onChange={handleChange}
                placeholder="Enter Verification URL"
              />
            </p>
            <br />
            {!Cdata.view ? (
              <div class="input-group mb-3">
                <input
                  className="form-control form-control-sm"
                  style={{ marginLeft: "0px", width: "80%" }}
                  onChange={saveFile}
                  type="file"
                />
                <button className="btn btn-primary btn-sm" onClick={uploadFile}>
                  Upload
                </button>
              </div>
            ) : (
              <p>File Uploaded Successfully</p>
            )}
          </div>
          <div className="box-info-footer">
            <button onClick={() => navigate("/certifications")}>
              <i className="fa fa-duotone fa-x"></i>
            </button>
            <button onClick={addCertificate}>
              <i className="fa fa-duotone fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
