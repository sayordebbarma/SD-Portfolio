import React from 'react'
import Landing from './pages/Landing/Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutMe from './pages/AboutMe/AboutMe';
import Connection from './pages/Connetion/Connection';
import Certificate from './pages/Certificates/Certificate';
import Projects from './pages/Projects/Projects';
import Experience from './pages/Experience/Experience';
import Hero from './pages/Hero/Hero';
import HireMe from './pages/HireMe/HireMe';
import Skills from './pages/Skills/Skills';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/aboutme" element={<AboutMe />}/>
      <Route path="/connection" element={<Connection />}/>
      <Route path="/certificate" element={<Certificate />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/experience" element={<Experience />}/>
      <Route path="/hero" element={<Hero />}/>
      <Route path="/hire-me" element={<HireMe />}/>
      <Route path="/skills" element={<Skills />}/>
      
    </Routes>
    </BrowserRouter>
  );
};

export default App;
