import React from 'react';
import projectsData from '../data.json';
import { Link } from 'react-router-dom';
// Adjust the path to your JSON file

const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-12 px-4">
      {/* All content centered */}
      <h1 className="text-4xl sm:text-3xl md:text-2xl font-bold mb-8 text-center">
        Projects
      </h1>

      {/* Loop through project data from JSON */}
      {projectsData.projects.map((project, index) => (
        <div
          key={index}
          className="bg-white w-full sm:w-[790px] p-6 sm:p-12 border border-[#FFD700] shadow-lg mb-8 rounded-[25px]"
        >
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            {project.description}
          </p>
        </div>
        // give w-335 px font 16px for description 23px for title for small devices
      ))}

      {/* Contact section */}
      <div
        className="h-auto sm:h-[400px] w-full flex flex-col justify-center items-center mt-14 border border-gray-300 shadow-lg rounded-lg p-8 sm: mb-5"
        style={{
          background: 'linear-gradient(135deg, #1e30f3 0%, #e21e80 100%)',
        }}
      >
        {/* Centered content */}
        <h1 className="text-2xl sm:text-3xl font-bold text-black mb-4 text-center">
          Let's build something together
        </h1>
        <Link
          to="/contact"
          className="flex justify-center items-center w-[160px] sm:w-[190px] h-[57px] sm:h-[60px] border border-white text-white bg-transparent font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Projects;
