import React from 'react';
import './FileUpload.css';

function FileUpload({ onFileUpload }) {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} />
    </div>
  );
}

export default FileUpload;
