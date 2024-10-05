import React from 'react';
import experienceData from '../data.json';

const Experience = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 p-4 sm:p-8">
      {/* Removed min-h-screen to avoid excessive vertical space */}
      <div className="w-full sm:w-[790px]">
        {/* Centered Title for all devices */}
        <h1 className="text-center mb-5 mt-5 text-3xl sm:text-4xl text-gold">
          Resume
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-5">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Experience
          </h1>

          <a
            href="/assets/Md.koushik-Ahmed-Shuvo.pdf"
            download
            className="w-[190px] sm:w-[218px] h-[50px] sm:h-[57px] bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300 flex items-center justify-center mt-4 sm:mt-0"
          >
            Download Resume
          </a>
        </div>

        {/* Experience Cards */}
        {experienceData.experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row bg-white border border-[#FFD700] shadow-lg rounded-lg p-6 sm:p-8 mb-4"
          >
            {/* Left Column - Date and Title */}
            <div className="w-full sm:w-[200px] sm:pr-8 sm:border-r border-gray-200 mb-4 sm:mb-0">
              <p className="text-gray-500 text-sm sm:text-base mb-2">
                {experience.date}
              </p>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {experience.title}
              </h2>
              <p className="text-gray-600">{experience.company}</p>
            </div>

            {/* Right Column - Description */}
            <div className="w-full sm:w-[445px] sm:pl-8">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
