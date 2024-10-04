import React from 'react';
import educationData from '../data.json'; // Adjust the path as necessary

const Education = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen p-8">
      <div className="w-[790px]">
        {/* Header */}
        <div className="flex flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Education</h1>
        </div>

        {/* Education Cards */}
        {educationData.education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-row bg-white border border-gold shadow-lg rounded-lg p-8 mb-4"
          >
            {/* Left Column - Date and Degree */}
            <div className="w-[200px] pr-8 border-r border-gray-200">
              <p className="text-gray-500 text-sm mb-2">{edu.date}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {edu.degree}
              </h2>
              <p className="text-gray-600">{edu.institution}</p>
            </div>

            {/* Right Column - Description */}
            <div className="w-[445px] pl-8">
              <p className="text-gray-700 text-base leading-relaxed">
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
