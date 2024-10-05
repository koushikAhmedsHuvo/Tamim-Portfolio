import React from 'react';
import { BsEnvelope } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="flex justify-center items-center mb-14 mt-14 p-4 sm:p-8">
      {/* Use padding and width adjustments for responsiveness */}
      <div className="w-full sm:w-[865px] border border-[#FFD700] shadow-lg rounded-lg p-6 sm:p-12 bg-white">
        {/* Center content */}
        <div className="flex justify-center mb-6">
          <div
            className="h-[48px] w-[48px] border border-gray-300 rounded-lg flex justify-center items-center"
            style={{
              background: 'linear-gradient(135deg, #1e30f3 0%, #e21e80 100%)',
            }}
          >
            <BsEnvelope className="w-[24px] h-[24px] text-white" />
          </div>
        </div>

        {/* Title and description */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mb-4">
          Get in touch
        </h1>
        <p className="text-center text-gray-600 mb-8">Let's work together!</p>

        {/* Form */}
        <form className="flex flex-col items-center space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full sm:w-[495px] h-[48px] sm:h-[58px] border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-[495px] h-[48px] sm:h-[58px] border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="text"
            placeholder="Number"
            className="w-full sm:w-[495px] h-[48px] sm:h-[58px] border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            placeholder="Message"
            className="w-full sm:w-[495px] h-[120px] sm:h-[160px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
          />
          <input
            type="submit"
            value="Submit"
            className="w-full sm:w-[495px] h-[47px] bg-gold text-white rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
