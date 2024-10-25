import React from 'react';

const TaskCard = ({ job }) => {
  return (
    <div className="task bg-white p-4 rounded-lg shadow-md mb-4 border-3 border-dashed border-transparent max-w-xs hover:shadow-lg hover:border-blue-200">
      <div className="tags flex items-center justify-between">
        <span className="tag bg-blue-600 text-white text-xs rounded-full px-3 py-1">
          {job.title}
        </span>
      </div>
      <p className="text-sm my-3">{job.description}</p>
      <div className="stats flex items-center justify-between text-gray-400 text-xs">
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>{job.company}</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>{job.location}</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <span>${job.min_amount} - ${job.max_amount}</span>
        </div>
      </div>
      <div className="viewer flex items-center space-x-2 mt-2">
        <span className="h-8 w-8 bg-blue-600 rounded-full border border-white flex items-center justify-center text-white">
          {job.company_logo ? (
            <img src={job.company_logo} alt="Company Logo" className="w-6 h-6 rounded-full" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5">
              {/* SVG content */}
            </svg>
          )}
        </span>
        <span className="text-sm text-blue-600 font-semibold">+20</span>
      </div>
    </div>
  );
};

export default TaskCard;
