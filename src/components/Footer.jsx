import React from 'react';
import footerData from '../data.json';
import { Link } from 'react-router-dom';
// Update the path to your JSON file

const Footer = () => {
  return (
    <div className="bg-white text-black border border-gold shadow-lg py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Left part */}
        <div className="mb-4 sm:mb-0">
          {' '}
          {/* Add margin bottom for small devices */}
          <p className="text-sm text-gray-400">{footerData.copyright}</p>
        </div>
        {/* Right part */}
        <div>
          <ul className="flex space-x-6">
            {footerData.links.map((link, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-gold transition duration-300"
              >
                <Link to={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
