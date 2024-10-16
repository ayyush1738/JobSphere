import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import './FolderUploadComponent.css';
import Jobs from './Jobs.jsx';

function Page() {
  const [file, setFile] = useState(null);
  const [entities, setEntities] = useState([]);  // Skills and Job Titles
  const [jobs, setJobs] = useState([]);  // Jobs from API

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
  
      try {
        // Ensure this is a POST request
        const response = await axios.post('/upload', formData);
        const keywords = response.data.entities;
        const jobListings = response.data.jobs;
  
        // Set entities and jobs in state
        setEntities(keywords);
        setJobs(jobListings);
  
      } catch (error) {
        console.error('Error uploading file or fetching jobs:', error.message);
      }
    }
  };
  

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="App h-screen w-screen bg-gray-900 text-center content-center items-center ">
      <h1 className='mb-38 text-4xl font-bold text-white'>Job Finder</h1>
      <h2 className='mb-10 text-2xl font-bold text-white'>We find the best suitable job for your profile</h2>

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

      {/* Display recognized entities (Skills and Job Titles) */}
      {entities.length > 0 && (
        <div className="entities mt-6">
          <h3 className="text-white font-bold">Recognized Skills and Job Titles:</h3>
          <ul className="text-white">
            {entities.job_titles && entities.job_titles.map((title, index) => (
              <li key={index}>
                {title} - <strong>Job Title</strong>
              </li>
            ))}
            {entities.skills && entities.skills.map((skill, index) => (
              <li key={index}>
                {skill} - <strong>Skill</strong>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Display Job Listings */}
      {jobs.length > 0 && (
        <div className="jobs mt-6">
          <h3 className="text-white font-bold">Job Listings:</h3>
          <ul className="text-white">
            {jobs.map((job, index) => (
              <li key={index}>
                <a href={job.url} target="_blank" rel="noopener noreferrer">
                  {job.job_title} at {job.company_name} - {job.location}
                </a>
                <p>{job.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* <Jobs /> */}
    </div>
  );
}

export default Page;
