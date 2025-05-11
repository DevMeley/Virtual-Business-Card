import React from 'react';
import './CSS/previre.css';
import html2canvas from 'html2canvas';
import { FaPhoneAlt,  FaLinkedinIn } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoGlobeSharp } from "react-icons/io5"
import { MdEmail } from "react-icons/md"

function Preview({ formData}) {
  const downloadCard = async () => {
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

  return (
    <div className='preview'>
      <h3>Card Preview</h3>
      <div className="preview-container-wrapper">
        <div className="preview-container">
          <div className="card-into">
            <div className="name-and-title">
              <h3>{formData.displayName || "Display Name"}</h3>
              <h5>{formData.companyName || "Company Name"}</h5>
              <p>{formData.role || "Your Role"}</p>
            </div>
            <div className="contact">
              <p><FaPhoneAlt />{formData.number || "Phone Number"}</p>
              <p className='address'><FaLocationDot />{formData.address || "Your Address"}</p>
              <a href={formData.websiteURL || "#"}><IoGlobeSharp />{formData.websiteURL || "my website.com"}</a>
            </div>
            <div className="socials">
              <a  href={formData.linkedlnURL} className='linkedin'><FaLinkedinIn /></a>
              <a href={formData.email} className='mail'><MdEmail /></a>
            </div>
          </div>
          <div className="card-profile-photo">
            <img src={formData.profilePhotoURL || "assets/download (1).png"} alt="profile photo" />
          </div>
        </div>
      </div>
      <div className="preview-btns">
        <button className="download" onClick={downloadCard}>Download Card</button>
        <button className='Generate-QR-code'>Generate QR-code</button>
      </div>
    </div>
  );
}

export default Preview;