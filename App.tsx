
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Gallery from './components/gallery';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main className={`min-h-screen selection:bg-[#D4AF37] selection:text-black antialiased ${isDarkMode ? 'bg-[#030303]' : 'bg-[#F9F9F7] text-[#1A1A1A]'} transition-colors duration-500`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Portfolio />
        <Gallery />
        <Contact />
      </div>
      
      {/* Refined Structural Accents */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-10 select-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-current opacity-[0.05]"></div>
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-current opacity-[0.05]"></div>
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-current opacity-[0.05]"></div>
        
        <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-serif font-black text-current opacity-[0.01] -rotate-90 select-none">
          VISION
        </div>
      </div>
    </main>
  );
};

export default App;
