import React from 'react';
import TaskCard from './Taskcard.jsx';

const Jobs = ({ jobs }) => {
  return (
    <div className="w-3/4 h-3/4 bg-black align-middle self-center mx-auto p-10 rounded-3xl">
      {jobs.length > 0 ? (
        jobs.map((job, index) => (
          <div className="flex justify-between" key={index}>
            <TaskCard job={job} />
          </div>
        ))
      ) : (
        <p className="text-white text-lg">No jobs found.</p>
      )}
    </div>
  );
};

export default Jobs;
