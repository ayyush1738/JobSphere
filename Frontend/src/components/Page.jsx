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
        const skills = response.data.skills;
  
        const jobResponse = await axios.post('/jobs', { skills });
        setJobs(jobResponse.data.jobs);
      } catch (error) {
        console.error('Error uploading file or fetching jobs:', error.message);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Request data:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error message:', error.message);
        }
      }
    }
  };
  

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="App h-screen w-screen bg-gray-900 content-center items-center">
      <div className="container w-1/6 h-1/4 items-center" style={{marginLeft: '42%'}}>
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
      {file && <button className='custom-file-upload w-64 mt-4 bg-blue-500 items-center' style={{marginLeft: '42.5%'}} onClick={handleUpload}>Upload and Find Jobs</button>}
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title} - {job.company}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
