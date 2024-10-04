import React from 'react';
import experienceData from '../data.json';

const Experience = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen p-8">
      <div className="w-[790px]">
        <h1 className="text-center mb-8 mt-5 text-4xl text-gold">Resume</h1>
        <div className="flex flex-row justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Experience</h1>

          <a
            href="/assets/Tamim_Iqbal_CV.pdf"
            download
            className="w-[218px] h-[57px] bg-black text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300 flex items-center justify-center"
          >
            Download Resume
          </a>
        </div>

        {/* Experience Cards */}
        {experienceData.experiences.map((experience, index) => (
          <div
            key={index}
            className="flex flex-row bg-white border border-gold shadow-lg rounded-lg p-8 mb-4"
          >
            {/* Left Column - Date and Title */}
            <div className="w-[200px] pr-8 border-r border-gray-200">
              <p className="text-gray-500 text-sm mb-2">{experience.date}</p>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {experience.title}
              </h2>
              <p className="text-gray-600">{experience.company}</p>
            </div>

            {/* Right Column - Description */}
            <div className="w-[445px] pl-8">
              <p className="text-gray-700 text-base leading-relaxed">
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
