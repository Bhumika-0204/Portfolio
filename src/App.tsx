import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { BackgroundGrid } from './components/BackgroundGrid';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { SecurityLab } from './sections/SecurityLab';
import { Architecture } from './sections/Architecture';
import { DSASection } from './sections/DSASection';
import { Journey } from './sections/Journey';
import { Certifications } from './sections/Certifications';
import { Patent } from './sections/Patent';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05070D] text-white selection:bg-purple-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Cyber Grid Ambient Background */}
      <BackgroundGrid />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SecurityLab />
        <Architecture />
        <DSASection />
        <Journey />
        <Certifications />
        <Patent />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
