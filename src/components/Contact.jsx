import React from 'react';
import { BsEnvelope } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className="flex justify-center items-center mb-14  mt-14">
      <div className="w-[865px] border border-gold shadow-lg rounded-lg p-12 bg-white">
        {/* Center content */}
        <div className="flex justify-center mb-6">
          <div className="h-[48px] w-[48px] border border-gray-300 rounded-lg bg-gold flex justify-center items-center">
            <BsEnvelope className="w-[24px] h-[24px] text-gray-700" />
          </div>
        </div>
        <h1 className="text-3xl font-semibold text-center mb-4">
          Get in touch
        </h1>
        <p className="text-center text-gray-600 mb-8">Let's work together!</p>

        <form className="flex flex-col items-center space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            className="w-[495px] h-[58px] border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[495px] h-[58px] border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <input
            type="text"
            placeholder="Number"
            className="w-[495px] h-[58px] border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-gold"
          />
          <textarea
            placeholder="Message"
            className="w-[495px] h-[160px] border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
          />
          <input
            type="submit"
            value="Submit"
            className="w-[495px] h-[47px] bg-black text-white rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
