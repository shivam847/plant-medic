import React, { useState } from "react";
import "./LandingPage.css";



const LandingPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [finalImage, setFinalImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setMessage("");
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      const previewURL = URL.createObjectURL(selectedFile);
      setFinalImage(previewURL);
      setMessage("Image Uploaded Successfully!");
    } else {
      setMessage("Please select an image first!");
    }
  };

  return (
    <div className="main">
      <h2>Upload Image</h2>

      <div className="card">
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button onClick={handleUploadClick}>Upload</button>
      </div>

      <div className="result-box">
        {finalImage ? (
          <>
            <img
              src={finalImage}
              alt="Uploaded"
              className="uploadedImage"
            />
            <p className="uploadMessage">
              {message}
            </p>
          </>
        ) : (
          <p>Result will appear here</p>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
