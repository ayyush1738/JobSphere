import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './FolderUploadComponent.css'; // Import the CSS file


function Page() {
  const [file, setFile] = useState(null);
  const [jobs, setJobs] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await axios.post('/upload', formData);
        const extractedText = response.data.text;
  
        // Optionally handle the extracted text
        console.log("Extracted Text:", extractedText);

      } catch (error) {
        console.error('Error uploading file or fetching jobs:', error.message);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request data:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      }
    }
  };
  
  

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="App h-screen w-screen bg-gray-900 text-center content-center items-center ">
      <h1 className='mb-38 text-4xl font-bold text-white'>Job Finder</h1>
      <h2 className='mb-10 text-2xl font-bold text-white'>We find the best suitable job for your profile</h2>
      <p className='mb-20 font-bold text-blue-500'>Just one click solution to hunt jobs</p>

      <div className="container w-1/6 h-1/4 items-center self-center mx-auto">
      <div {...getRootProps()} className="folder">
        <div className="front-side">
          <div className="tip"></div>
          <div className="cover"></div>
        </div>
        <div className="back-side cover"></div>
      </div>
      <label className="custom-file-upload">
        <input {...getInputProps()} className="title" type="file" />
        Choose a file
      </label>
    </div>
      {file && <button className='custom-file-upload w-64 mt-4 bg-blue-500 items-center'  onClick={handleUpload}>Upload and Find Jobs</button>}
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title} - {job.company}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
