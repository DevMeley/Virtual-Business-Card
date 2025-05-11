import React from 'react'
import QRCode from 'react-qr-code'

function Qrcode() {
  return (
    <div>
        <QRCode value="http://google.com"/>
    </div>
  )
}

export default Qrcode