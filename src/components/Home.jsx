import React from 'react';
import homeData from '../data.json'; // Update the path to where your JSON file is located
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black mt-16">
      {/* Content Box */}
      <div className="w-[1044px] h-[304px] p-8 flex flex-col items-center justify-center bg-white mb-7">
        {/* Categories */}
        <div className="flex flex-row space-x-8 mb-5 text-white border bg-gold rounded p-1">
          {homeData.categories.map((category, index) => (
            <p key={index}>{category}</p>
          ))}
        </div>

        {/* Intro Text */}
        <p className="text-2xl text-center mb-4">{homeData.introText}</p>
        <h1 className="text-6xl font-bold text-center mb-4">
          {homeData.mainTitle}
        </h1>

        {/* Buttons */}
        <div className="flex flex-row mt-6 space-x-6">
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
          className="w-[465px] h-[525px] object-cover rounded-[30px] border-4 border-gold shadow-md"
        />
      </div>
    </div>
  );
};

export default Home;
