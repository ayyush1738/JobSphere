import React from 'react';

const FileUpload = () => {
  return (
    <div className="flex flex-col items-center justify-end p-4 bg-gradient-to-br from-blue-400 to-blue-700 rounded-lg shadow-lg h-[136px] relative">
      <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 animate-float transition-transform duration-350 hover:scale-105">
        <div className="absolute w-[120px] h-[80px] bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg shadow-lg transition-transform duration-350 transform origin-bottom-center"></div>
        <div className="absolute w-[120px] h-[80px] bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg shadow-lg transition-transform duration-350 transform origin-bottom-center z-0"></div>
        <div className="absolute top-[-10px] w-[80px] h-[20px] bg-gradient-to-br from-orange-400 to-red-400 rounded-t-lg shadow-lg z-10"></div>
        <div className="absolute w-[120px] h-[80px] bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-lg shadow-lg z-1"></div>
      </div>
      <label className="text-white text-lg bg-white bg-opacity-20 rounded-lg shadow-md cursor-pointer transition-colors duration-350 hover:bg-opacity-40 px-8 py-2 relative">
        <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
        Choose a file
      </label>
    </div>
  );
};

export default FileUpload;
