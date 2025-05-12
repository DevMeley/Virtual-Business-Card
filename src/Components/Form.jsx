import React, { useEffect, useState } from "react";
import "./CSS/TicketForm.css";
import { IoMdCloudUpload } from "react-icons/io"

function Form({ formData, setFormData }) {
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
        <label className="upload">
          <span> <IoMdCloudUpload />Click to upload image file</span>
          <input type="file" placeholder="" onChange={handlePhotoUpload} />
        </label>
        <br />
        <div className="form-inputs">
          <label>
            <input
              type="text"
              placeholder="Display Name"
              value={formData.displayName}
              onChange={(e) =>
                setFormData({ ...formData, displayName: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Company Name"
              value={formData.companyName}
              onChange={(e) =>
                setFormData({ ...formData, companyName: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Contact Number"
              value={formData.number}
              onChange={(e) =>
                setFormData({ ...formData, number: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Contact Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            <input
              type="url"
              placeholder="Website URL"
              value={formData.websiteURL}
              onChange={(e) =>
                setFormData({ ...formData, websiteURL: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Linkedln URL"
              value={formData.linkedlnURL}
              onChange={(e) =>
                setFormData({ ...formData, linkedlnURL: e.target.value })
              }
            />
          </label>
          <br />
          <label>
            <input
              type="text"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <br />
        </div>
      </div>
    </div>
  );
}

export default Form;
