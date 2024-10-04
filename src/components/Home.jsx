import React from 'react';
import homeData from '../data.json'; // Update the path to where your JSON file is located
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black mt-16">
      {/* Content Box */}
      <div className="max-w-[1044px] w-full h-auto p-4 sm:p-8 flex flex-col items-center justify-center bg-white mb-7">
        {/* Categories */}
        <div className="flex flex-row flex-wrap justify-center space-x-8 mb-5 text-white border bg-gold rounded p-1">
          {homeData.categories.map((category, index) => (
            <p key={index} className="text-sm sm:text-base">
              {category}
            </p> // Responsive text size
          ))}
        </div>
        {/* Intro Text */}
        <p className="text-lg sm:text-2xl text-center mb-4">
          {homeData.introText}
        </p>{' '}
        {/* Responsive text size */}
        <h1 className="text-4xl sm:text-6xl font-bold text-center mb-4">
          {homeData.mainTitle}
        </h1>
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row mt-6 space-y-4 sm:space-y-0 sm:space-x-6">
          {homeData.buttons.map((button, index) => (
            <Link
              to={button.path}
              key={index}
              className={`flex justify-center items-center ${button.bgColor} ${button.textColor} w-[160px] h-[55px] rounded-md shadow-md transition duration-300 hover:bg-black hover:text-white`}
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>

      {/* Profile Image */}
      <div className="mt-12 mb-14">
        <img
          src={homeData.profileImage.src}
          alt={homeData.profileImage.alt}
          className="w-[300px] sm:w-[465px] h-auto object-cover rounded-[30px] border-4 border-gold shadow-md"
        />
      </div>
    </div>
  );
};

export default Home;
