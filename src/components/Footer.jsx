import React from 'react';
import footerData from '../data.json';
import { Link } from 'react-router-dom';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { CiFacebook } from 'react-icons/ci';

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

const Footer = () => {
  return (
    <div className="bg-white text-black border border-[#FFD700] shadow-lg py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Left part */}
        <div className="mb-4 sm:mb-0">
          <p className="text-sm text-gray-400">{footerData.copyright}</p>
        </div>
        {/* Right part - Social Icons */}
        <div className="flex space-x-6">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              to={social.path} // You can keep the `to` prop for internal routing if needed
              target="_blank" // Ensures the link opens in a new tab
              rel="noopener noreferrer" // Security measures when using target="_blank"
              className={`${social.hoverColor} ${social.color} transition duration-300`}
              onClick={(e) => {
                // Prevent default action for the Link if it's an external link
                if (social.path.startsWith('http')) {
                  window.open(social.path, '_blank', 'noopener,noreferrer');
                  e.preventDefault();
                }
              }}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
