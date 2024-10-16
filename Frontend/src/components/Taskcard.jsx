import React from "react";

const TaskCard = () => {
  return (
    <div className="task bg-white p-4 rounded-lg shadow-md mb-4 border-3 border-dashed border-transparent max-w-xs hover:shadow-lg hover:border-blue-200">
      {/* Tags Section */}
      <div className="tags flex items-center justify-between">
        <span className="tag bg-blue-600 text-white text-xs rounded-full px-3 py-1">
          Draggable
        </span>
        <button className="options bg-transparent border-none text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 41.915 41.916"
            className="w-5 h-5 fill-gray-500"
          >
            <g>
              <path d="M11.214,20.956c0,3.091-2.509,5.589-5.607,5.589C2.51,26.544,0,24.046,0,20.956c0-3.082,2.511-5.585,5.607-5.585 C8.705,15.371,11.214,17.874,11.214,20.956z"></path>
              <path d="M26.564,20.956c0,3.091-2.509,5.589-5.606,5.589c-3.097,0-5.607-2.498-5.607-5.589c0-3.082,2.511-5.585,5.607-5.585 C24.056,15.371,26.564,17.874,26.564,20.956z"></path>
              <path d="M41.915,20.956c0,3.091-2.509,5.589-5.607,5.589c-3.097,0-5.606-2.498-5.606-5.589c0-3.082,2.511-5.585,5.606-5.585 C39.406,15.371,41.915,17.874,41.915,20.956z"></path>
            </g>
          </svg>
        </button>
      </div>

      {/* Content Section */}
      <p className="text-sm my-3">
        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
        laying out print, graphic or web designs. The passage is attributed to
        an unknown
      </p>

      {/* Stats Section */}
      <div className="stats flex items-center justify-between text-gray-400 text-xs">
        <div className="flex items-center space-x-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <circle stroke-width="2" r="9" cy="12" cx="12"></circle>
            <path stroke-linecap="round" stroke-width="2" d="M12 8V12L15 15"></path>
          </svg>
          <span>Feb 24</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"
            ></path>
          </svg>
          <span>18</span>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="1.5"
              d="M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z"
            ></path>
          </svg>
          <span>7</span>
        </div>
      </div>

      {/* Viewer Section */}
      <div className="viewer flex items-center space-x-2 mt-2">
        <span className="h-8 w-8 bg-blue-600 rounded-full border border-white flex items-center justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-width="2"
              d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
            ></path>
            <path
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-width="2"
              d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
            ></path>
          </svg>
        </span>
        <span className="h-8 w-8 bg-blue-600 rounded-full border border-white flex items-center justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path
              stroke="#ffffff"
              stroke-linecap="round"
              stroke-width="2"
              d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-width="2"
              stroke="#ffffff"
              d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
            ></path>
          </svg>
        </span>
        <span className="text-sm text-blue-600 font-semibold">+20</span>
      </div>
    </div>
  );
};

export default TaskCard;
