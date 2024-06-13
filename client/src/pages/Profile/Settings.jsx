// import React, { useState } from "react";
// import speakeasy from "speakeasy";
// import QRCode from "qrcode";
// import { Buffer } from "buffer";
// import base32 from "base32.js";
// import "./App.css";

// export default function Settings() {
//   const [qrCode, setQrCode] = useState("");
//   const [secret, setSecret] = useState("");
//   const [token, setToken] = useState("");
//   const [notification, setNotification] = useState("");

//   const generateQrCode = async () => {
//     const secret = speakeasy.generateSecret({ name: "React_OIT" });
//     setSecret(secret.base32);
//     const data_url = await QRCode.toDataURL(secret.otpauth_url);
//     setQrCode(data_url);
//   };

//   const verifyToken = () => {
//     const secretBuffer = Buffer.from(base32.decode(secret));
//     const verified = speakeasy.totp.verify({
//       secret: secretBuffer,
//       encoding: "buffer",
//       token,
//     });
//     setNotification(verified ? "OTP Verified!" : "OTP Invalid!");
//     setTimeout(() => {
//       setNotification("");
//     }, 3000);
//   };

//   return (
//     <div className="container">
//       <button onClick={generateQrCode}>Generate QR Code</button>
//       {qrCode && (
//         <div className="qr-code">
//           <img src={qrCode} alt="QR Code" />
//           <p>Secret: {secret}</p>
//         </div>
//       )}
//       <input
//         type="text"
//         value={token}
//         onChange={(e) => setToken(e.target.value)}
//         placeholder="Enter OTP"
//       />
//       <button onClick={verifyToken}>Verify OTP</button>
//       {notification && (
//         <div className={notification === "OTP Verified!" ? "success" : "error"}>
//           {notification}
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";

export default function Settings() {
  return <div>Settings</div>;
}
