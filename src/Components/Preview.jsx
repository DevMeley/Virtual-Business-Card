import React from 'react';
import './CSS/previre.css';
import html2canvas from 'html2canvas';

function Preview({ formData, setPreviewCard }) {
  const downloadCard = async () => {
    try {
      const element = document.querySelector(".preview-container");
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
              <h2>{formData.displayName || "Display Name"}</h2>
              <h3>{formData.companyName || "Company Name"}</h3>
              <p>{formData.role || "Your Role"}</p>
            </div>
            <div className="contact">
              <p><img src="assets/download.png" alt="" />{formData.number || "Phone Number"}</p>
              <p><img src="assets/images (1).png" alt="" />{formData.address || "Your Address"}</p>
              <a href={formData.websiteURL || "#"}> <img src="assets/images.png" alt="" /> {formData.websiteURL || "my website.com"}</a>
            </div>
            <div className="socials">
              <a href={formData.linkedlnURL}><img src="assets/download (3).png" alt="" /></a>
              <a href={formData.email}><img src="assets/images (1).jpeg" alt="" /></a>
              <a href="#"><img src="assets/download (3).png" alt="" /></a>
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