import React, { useState } from "react";
import "./CSS/TicketForm.css";

function TickForm({formData, setFormData, setPreviewCard, handleFormSubmit}) {

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });

    // cloudinary
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "Virtual-Business-Card");
    data.append("cloud_name", "dhrrttilw");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dhrrttilw/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const uploadedURL = await res.json();

    setFormData((prev) => ({
      ...prev,
      profilePhotoURL: uploadedURL.url,
    }));

    console.log(uploadedURL.url);
  };


  return (
    <div>
      <div className="form-container">
        <h3>Provide your card information in the form below</h3>
        {/* <form onSubmit={handleFormSubmit}> */}
          <label className="upload">
            <span>Click to upload Profile Photo</span>
            <input type="file" onChange={handlePhotoUpload} />
          </label>
          <br />
          <div className="form-inputs">
            <label>
              <span>Display Name</span>
              <input
                type="text"
                value={formData.displayName}
                onChange={(e) =>
                  setFormData({ ...formData, displayName: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              <span>Company Name</span>
              <input
                type="text"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData({ ...formData, companyName: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              <span>Role</span>
              <input
                type="text"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              <span>Contact Number</span>
              <input
                type="text"
                value={formData.number}
                onChange={(e) =>
                  setFormData({ ...formData, number: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              <span>Contact Address</span>
              <input
                type="text"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              <span>Website URL</span>
              <input
                type="text"
                value={formData.websiteURL}
                onChange={(e) =>
                  setFormData({ ...formData, websiteURL: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              <span>Linkedln URL</span>
              <input
                type="text"
                value={formData.linkedlnURL}
                onChange={(e) =>
                  setFormData({ ...formData, linkedlnURL: e.target.value })
                }
              />
            </label>
            <br />
            <label>
              <span>Email Address</span>
              <input
                type="text"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </label>
            <br />
          </div>
          <div className="form-btn">
            <button>Preview</button>
          </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default TickForm;
