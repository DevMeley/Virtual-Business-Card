import React from 'react'
import QRCode from 'react-qr-code'
import "./CSS/Qrcodee.css"
import html2canvas from 'html2canvas'

function Qrcode() {
  const downloadQRCode = async () => {
    try {
      const element = document.querySelector(".QR-code-container");
      if (!element) {
        console.error("No code found.");
        return;
      }

      const canvas = await html2canvas(element, { useCORS: true });

      const dataURL = canvas.toDataURL("image/png");

      const link = document.createElement("a");
      link.href = dataURL;
      link.download = `${"Card QR-code"}.png`;
      link.click();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='Qr'>
        <div className="QR-code-container">
          <a href="http://google.com"><QRCode value="http://google.com" size={150}/></a>
        </div>
        {/* <button className='download-QR-code' onClick={downloadQRCode}>Download</button> */}
    </div>
  )
}

export default Qrcode