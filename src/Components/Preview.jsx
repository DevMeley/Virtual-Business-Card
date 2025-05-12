import React, { useState } from "react";
import "./CSS/previre.css";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import { FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoGlobeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import image from "../assets/download (1).png";
import QRCode from "react-qr-code";

function Preview({ formData }) {
  const [viewQRcode, setViewQRcode] = useState(false);
  const ExportAsPNG = async () => {
    try {
      const element = document.querySelector(".preview-container-wrapper");
      if (!element) {
        console.error("Preview container not found.");
        return;
      }

      const canvas = await html2canvas(element, { useCORS: true });

      const dataURL = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `${formData.displayName || "Business Card"}.png`;
      link.click();
    } catch (error) {
      console.error("Error downloading PNG:", error);
    }
  };

  const ExportAsPdf = async () => {
    try {
      const element = document.querySelector(".preview-container-wrapper");
      element.style.display = "block";
      await html2pdf()
        .set({
          margin: 0,
          filename: `${formData.displayName || "Business Card"}.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 3, useCORS: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(element)
        .save();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="preview">
      <h3>Card Preview</h3>
      <div className="preview-container-wrapper">
        <div className="preview-container">
          <div className="card-into">
            <div className="name-and-title">
              <div className="card-profile-photo">
                <img
                  src={formData.profilePhotoURL || image}
                  alt="profile photo"
                />
              </div>
              <div className="profile-info">
                <h3>{formData.displayName || "Display Name"}</h3>
                <h5>{formData.companyName || "Company Name"}</h5>
                <p>{formData.role || "Your Role"}</p>
              </div>
              <div className="contact">
                <p>
                  <FaPhoneAlt className="FaPhone" />
                  {formData.number || "Phone Number"}
                </p>
                <p>
                  <FaLocationDot className="address" />
                  {formData.address || "Your Address"}
                </p>
              </div>
            </div>
            <div className="right-side">
              <a href={formData.websiteURL}>
                <QRCode value={formData.websiteURL} size={150} />
              </a>
              <div className="socials">
                <a href={formData.linkedlnURL} className="linkedin">
                  <FaLinkedinIn className="FaLinkedinIn" />
                </a>
                <a href={formData.email} className="mail">
                  <MdEmail className="MdEmail" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="preview-btns">
        <button className="Generate-QR-code" onClick={ExportAsPdf}>
          Export as Pdf
        </button>
        <button className="download" onClick={ExportAsPNG}>
          Export as PNG
        </button>
      </div>
    </div>
  );
}

export default Preview;
