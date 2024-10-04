import React from 'react';
import { BsTools } from 'react-icons/bs';
import { CgCodeSlash } from 'react-icons/cg';
import skillsData from '../data.json'; // Adjust the path as necessary

const Skills = () => {
  return (
    <div className="bg-gray-50 p-8 min-h-screen">
      <div className="max-w-[790px] mx-auto space-y-12">
        {/* Skills Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Skills</h1>

          {/* Combined Skills Section */}
          <div className="mb-8 border border-gold shadow-lg p-14">
            <div className="flex items-center mb-4">
              <div className="w-[48px] h-[48px] border rounded-lg flex justify-center items-center bg-black">
                <BsTools className="w-[24px] h-[24px] text-gold" />
              </div>
              <p className="ml-4 text-2xl font-semibold text-gray-800">
                Professional Skills
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mb-16">
              {skillsData.skills.professionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md"
                >
                  {skill}
                </div>
              ))}
            </div>

            {/* Languages Section */}
            <div className="flex items-center mb-4 mt-5 ">
              <div className="w-[48px] h-[48px] border rounded-lg flex justify-center items-center bg-black">
                <CgCodeSlash className="w-[24px] h-[24px] text-gold" />
              </div>
              <p className="ml-4 text-2xl font-semibold text-gray-800">
                Languages
              </p>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-4">
              {skillsData.skills.languages.map((language, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md"
                >
                  {language}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
