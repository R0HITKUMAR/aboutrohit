import React from "react";
import Swal from "sweetalert2";
import Toast from "../../dashboard/SweetAlert";

export default function Rebrandly() {
  const [links, setLinks] = React.useState();
  const [addLink, setAddLink] = React.useState(false);
  const [newLink, setNewLink] = React.useState({
    slash: "",
    dlink: "",
  });
  const [reload, setReload] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewLink({ ...newLink, [name]: value });
  };

  React.useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        apikey: "2994c2ddcbae4b9b89fc7366d54de932",
      },
    };
    fetch(
      "https://api.rebrandly.com/v1/links?domain.id=1775bd49e45e4c01bcdfe3b26a129334&orderBy=createdAt&orderDir=desc&limit=25",
      options
    )
      .then((response) => response.json())
      .then((response) => setLinks(response))
      .catch((err) => console.error(err));
  }, [reload]);

  const issueLink = () => {
    if (newLink.slash !== "" && newLink.dlink !== "") {
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          apikey: "2994c2ddcbae4b9b89fc7366d54de932",
        },
      };
      fetch(
        `https://api.rebrandly.com/v1/links/new?destination=${newLink.dlink}&slashtag=${newLink.slash}&domain[id]=1775bd49e45e4c01bcdfe3b26a129334`,
        options
      )
        .then((response) => response.json())
        .then((response) => {
          setAddLink(false);
          setReload(true);
          setNewLink({
            slash: "",
            dlink: "",
          });
          Toast.fire({
            icon: "success",
            title: "Link successfully created",
          });
          navigator.clipboard.writeText(`https://${response.shortUrl}`);
        })
        .catch((err) => console.error(err));
    } else {
      Toast.fire({
        icon: "error",
        title: "Please enter a valid Slash or URL",
      });
    }
  };

  async function deleteLink(id) {
    Swal.fire({
      title: "Delete ?",
      text: "Are you sure you want to Delete this URL?",
      icon: "question",
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        const options = {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            apikey: "2994c2ddcbae4b9b89fc7366d54de932",
          },
        };
        fetch(`https://api.rebrandly.com/v1/links/${id}`, options)
          .then((response) => response.json())
          .then((response) => {
            setReload(true);
            Toast.fire({
              icon: "success",
              title: "Link deleted successfully",
            });
          })
          .catch((err) => {
            Toast.fire({
              icon: "error",
              title: err,
            });
            console.error(err);
          });
      }
    });
  }

  const copyLink = (link) => {
    navigator.clipboard.writeText(link);
    Toast.fire({
      icon: "success",
      title: "Link copied successfully",
    });
  };

  const editLink = (id, old) => {
    const newURL = prompt("Enter new URL", old);
    if (newURL !== null) {
      const options = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          apikey: "2994c2ddcbae4b9b89fc7366d54de932",
        },
        body: JSON.stringify({ destination: newURL }),
      };
      fetch(`https://api.rebrandly.com/v1/links/${id}`, options)
        .then((response) => response.json())
        .then((response) => {
          setReload(true);
          Toast.fire({
            icon: "success",
            title: "Link updated successfully",
          })
        }

        )
        .catch((err) => {
          Toast.fire({
            icon: "error",
            title: err,
          });
          console.error(err);
        });
    }
  };

  return (
    <div className="order">
      <div className="head">
        <h3>URL Shortner</h3>
        <i
          onClick={() => setAddLink(!addLink)}
          className={
            addLink ? "fa fa-duotone fa-minus" : "fa fa-duotone fa-plus"
          }
        />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S No.</th>
            <th scope="col">Shorten URL</th>
            <th scope="col">Destination URL</th>
            <th scope="col">Clicks</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {addLink && (
            <tr>
              <td colSpan={2}>
                <input
                  type="text"
                  name="dlink"
                  value={newLink.dlink}
                  onChange={handleChange}
                  placeholder="Enter URL"
                />
              </td>
              <td colSpan={2}>
                <input
                  type="text"
                  name="slash"
                  value={newLink.slash}
                  onChange={handleChange}
                  placeholder="Enter Slash"
                />
              </td>
              <td>
                <i
                  onClick={() => issueLink()}
                  className="fa fa-duotone fa-check"
                />
              </td>
            </tr>
          )}
          {links &&
            links.map((link, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>https://{link.shortUrl}</td>
                <td>{link.destination.slice(0, 20)}</td>
                <td>{link.clicks}</td>
                <td>
                  <i
                    onClick={() => editLink(link.id, link.destination)}
                    className="fa fa-duotone fa-edit"
                  />
                  <i
                    onClick={() => copyLink(`https://${link.shortUrl}`)}
                    className="fa fa-duotone fa-copy"
                  />
                  <i
                    onClick={() => deleteLink(link.id)}
                    className="fa fa-duotone fa-trash"
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
