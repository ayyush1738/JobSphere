import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

function App() {
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
    <div className="App">
      <div {...getRootProps()} style={{ border: '2px dashed gray', padding: '20px', textAlign: 'center' }}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop your resume here, or click to select one</p>
      </div>
      {file && <button onClick={handleUpload}>Upload and Find Jobs</button>}
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job.title} - {job.company}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
