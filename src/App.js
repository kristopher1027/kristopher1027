import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Learning from './components/Learning';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="smooth-scroll">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Learning />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
