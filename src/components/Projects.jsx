import React from 'react';
import projectsData from '../data.json';
import { Link } from 'react-router-dom';
// Adjust the path to your JSON file

const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-12">
      {/* All content centered */}
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

      {/* Loop through project data from JSON */}
      {projectsData.projects.map((project, index) => (
        <div
          key={index}
          className="bg-white w-[790px] border border-gold shadow-lg p-12 mb-8 rounded-[25px] "
        >
          <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
          <p className="text-gray-600 text-base">{project.description}</p>
        </div>
      ))}

      {/* Contact section */}
      <div className="h-[400px] w-full flex flex-col justify-center items-center mt-14  border border-gray-300 shadow-lg rounded-lg p-8">
        {/* Centered content */}
        <h1 className="text-3xl font-bold text-black mb-4 text-center">
          Let's build something together
        </h1>
        <Link
          to="/contact"
          className="flex justify-center items-center w-[190px] h-[60px] border border-white text-white bg-gold font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
        >
          Contact me
        </Link>
      </div>
    </div>
  );
};

export default Projects;
