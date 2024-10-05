import React, { useState } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-white py-6 px-8 border-b border-[#FFD700] shadow-lg">
      <div className="flex justify-between items-center">
        {/* Left part: Name */}
        <div className="text-black text-3xl font-bold">
          {data.name.first} <span className="text-gold">{data.name.last}</span>
        </div>

        {/* Right part: Navigation links and hamburger menu */}
        <div className="hidden md:flex">
          <ul className="flex space-x-8">
            {data.navLinks.map((link, index) => (
              <li
                key={index}
                className="text-black hover:text-gold cursor-pointer"
              >
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hamburger menu for small devices */}
        <div className="md:hidden">
          <CiMenuBurger
            className="text-black text-3xl cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-2">
            {data.navLinks.map((link, index) => (
              <li
                key={index}
                className="text-black hover:text-gold cursor-pointer"
              >
                <Link to={link.path}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
