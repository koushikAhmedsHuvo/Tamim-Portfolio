import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ResumePage from './components/Page/ResumePage';
import HomePage from './components/Page/HomePage';
import ProjectPage from './components/Page/ProjectPage';
import ContactPage from './components/Page/ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </Router>
  );
};

export default App;
