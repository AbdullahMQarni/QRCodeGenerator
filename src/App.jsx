import React from "react";
import ReactDOM from "react-dom";
import QRCode from "qrcode.react";
import Header from './Components/Header/Header'

import "./App.css";

function App() {
  const [url, setUrl] = React.useState("");

  const generateQRCode = () => {
    const qrcodeDiv = document.getElementById("qrcode");

    qrcodeDiv.innerHTML = "";

    ReactDOM.render(<QRCode value={url} size={384} />, qrcodeDiv);
  };

  return (
    <div>
      <Header />

      <div className="Body">
        <div className="container">
          <label htmlFor="urlInput">Enter URL:</label>
          <input
            type="text"
            id="urlInput"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={generateQRCode}>Generate QR Code</button>
          <div id="qrcode"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
