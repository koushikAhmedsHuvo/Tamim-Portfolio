import React from 'react';
import educationData from '../data.json'; // Adjust the path as necessary

const Education = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 p-4 sm:p-8">
      {/* Removed min-h-screen to prevent excess space */}
      <div className="w-full sm:w-[790px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start mb-4">
          {' '}
          {/* Aligned items to the left */}
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Education
          </h1>
        </div>

        {/* Education Cards */}
        {educationData.education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white border border-[#FFD700] shadow-lg rounded-lg p-6 sm:p-8 mb-4"
          >
            {/* Left Column - Date and Degree */}
            <div className="w-full sm:w-[200px] sm:pr-8 sm:border-r border-gray-200 mb-4 sm:mb-0">
              <p className="text-gray-500 text-sm sm:text-base mb-2">
                {edu.date}
              </p>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {edu.degree}
              </h2>
              <p className="text-gray-600">{edu.institution}</p>
            </div>

            {/* Right Column - Description */}
            <div className="w-full sm:w-[445px] sm:pl-8">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
