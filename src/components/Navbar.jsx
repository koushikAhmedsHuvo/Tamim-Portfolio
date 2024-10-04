import React from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
// Update the path to your JSON file

const Navbar = () => {
  return (
    <div className="bg-white py-6 px-8 border-b border-gold shadow-lg">
      <div className="flex justify-between items-center">
        {/* Left part: Name */}
        <div>
          <h1 className="text-black text-3xl font-bold">
            {data.name.first}{' '}
            <span className="text-gold">{data.name.last}</span>
          </h1>
        </div>

        {/* Right part: Navigation links */}
        <div>
          <ul className="flex space-x-8">
            {data.navLinks.map((link, index) => (
              <li
                key={index}
                className="text-black hover:text-gold cursor-pointer"
              >
                <Link to={link.path}>{link.text}</Link>{' '}
                {/* Use Link to wrap the text */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
