import React from 'react';
import Navbar from '../Navbar';
import Experience from '../Experience';
import Education from '../Education';
import Skills from '../Skills';
import Footer from '../Footer';

const ResumePage = () => {
  return (
    <div>
      <Navbar />
      <Experience />
      <Education />
      <Skills />
      <Footer />
    </div>
  );
};

export default ResumePage;
