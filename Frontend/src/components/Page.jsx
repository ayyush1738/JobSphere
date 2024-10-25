import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './FolderUploadComponent.css';
import Jobs from './Jobs';

function Page() {
  const [file, setFile] = useState(null);
  const [entities, setEntities] = useState({ job_titles: [], skills: [] });
  const [jobList, setJobs] = useState({jobs: []})  // Jobs from API
  const [showJobs, setShowJobs] = useState(true);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        const response = await axios.post('/upload', formData);
        const keywords = response.data.entities || { job_titles: [], skills: [] }; // Ensure defaults
        const jobListings = response.data.jobs || { jobs: [] }; // Ensure defaults
  
        // Set entities and jobs in state
        setEntities(keywords);
        setJobs(jobListings);
  
      } catch (error) {
        console.error('Error uploading file or fetching jobs:', error.message);
      }

      setShowJobs(false);
    }
  };
  
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="App h-screen w-screen bg-gray-900 text-center content-center items-center">
      <h1 className='mb-38 text-4xl font-bold text-white'>Job Finder</h1>
      <h2 className='mb-10 text-2xl font-bold text-white'>We find the best suitable job for your profile</h2>
      {showJobs ? (
        <>
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

      {file && (
        <button className='custom-file-upload w-64 mt-4 bg-blue-500 items-center' onClick={handleUpload}>
          Upload and Find Jobs
        </button>
      )}
        </>
      ) : (<>
      <Jobs />
      </>)
      }
    </div>
  );
}

export default Page;
