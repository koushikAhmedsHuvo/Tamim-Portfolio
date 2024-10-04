import React from 'react';
import Navbar from '../Navbar';
import Home from '../Home';
import Footer from '../Footer';
import About from '../About';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
