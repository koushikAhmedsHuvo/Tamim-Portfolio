import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import aboutData from '../data.json';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    icon: <CiFacebook className="w-12 h-12 sm:w-6 sm:h-6" />,
    color: 'text-gold',
    path: 'https://www.facebook.com/profile.php?id=100010364771248',
    hoverColor: 'hover:text-black',
  },

  {
    icon: <FaLinkedinIn className="w-12 h-12 sm:w-6 sm:h-6" />,
    color: 'text-gold',
    path: 'https://www.linkedin.com/in/koushik-ahmed-793689285/',
    hoverColor: 'hover:text-black',
  },
  {
    icon: <FaGithub className="w-12 h-12 sm:w-6 sm:h-6" />,
    color: 'text-gold',
    path: 'https://github.com/koushikAhmedsHuvo',
    hoverColor: 'hover:text-black',
  },
];

const About = () => {
  return (
    <div className="flex justify-center mt-12 mb-14">
      {/* Centered container with a max width */}
      <div className="bg-white p-8 rounded-[30px] md:shadow-lg md:border md:border-[#FFD700] max-w-[875px] w-full">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold text-black mb-4 text-center">
          {aboutData.about.title}
        </h1>
        <p className="text-2xl  text-black mb-4 text-center">
          {aboutData.about.subtitle}
        </p>
        {aboutData.about.description.map((desc, index) => (
          <p
            key={index}
            className="text-gray-600 sm:text-sm md:text-base mb-5 text-center"
          >
            {desc}
          </p>
        ))}
        <div className="flex justify-center space-x-4 mt-6">
          <ul className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className={`cursor-pointer ${link.color} ${link.hoverColor} transition duration-300`}
              >
                <Link to={link.path}>{link.icon}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
