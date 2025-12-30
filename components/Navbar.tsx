
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Profile', href: '#about' },
    { name: 'Expertise', href: '#services' },
    { name: 'Legacy', href: '#experience' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Liaison', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 px-4 md:px-12 flex justify-center ${scrolled ? 'pt-4' : 'pt-8 md:pt-12'}`}>
        <div className={`flex items-center justify-between w-full max-w-[1400px] transition-all duration-700 px-6 md:px-10 py-3 rounded-full border ${isDarkMode ? 'border-white/5 bg-white/[0.03]' : 'border-black/5 bg-black/[0.02]'} backdrop-blur-3xl shadow-2xl ${scrolled ? 'scale-95' : 'scale-100'}`}>
          
          <a href="#home" className="flex items-center space-x-3 group">
            <div className={`w-8 h-8 ${isDarkMode ? 'bg-white text-black' : 'bg-black text-white'} rounded-full flex items-center justify-center font-serif text-sm font-bold group-hover:bg-[#D4AF37] group-hover:text-white transition-all`}>K</div>
            <span className={`hidden sm:block text-[9px] font-black uppercase tracking-[0.4em] ${isDarkMode ? 'text-white' : 'text-black'}`}>Mahdi Kazemi</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-12">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[9px] font-bold uppercase tracking-[0.3em] ${isDarkMode ? 'text-white/40' : 'text-black/40'} hover:text-[#D4AF37] transition-all relative group`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#D4AF37] transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${isDarkMode ? 'border-white/10 bg-white/5 text-white hover:bg-white/10' : 'border-black/10 bg-black/5 text-black hover:bg-black/10'}`}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>

            <a href="#contact" className={`hidden sm:block text-[8px] font-bold uppercase tracking-[0.3em] px-6 py-2 border border-[#D4AF37]/30 rounded-full text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-all`}>Connect</a>
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden w-10 h-10 rounded-full ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'} border flex flex-col items-center justify-center space-y-1.5 active:scale-90 transition-all`}
            >
              <span className={`w-5 h-[1px] ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-500 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-5 h-[1px] ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-500 ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-5 h-[1px] ${isDarkMode ? 'bg-white' : 'bg-black'} transition-all duration-500 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[60] ${isDarkMode ? 'bg-black' : 'bg-[#F9F9F7]'} transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.05)_0%,_transparent_100%)]' : 'bg-[radial-gradient(circle_at_50%_50%,_rgba(212,175,55,0.02)_0%,_transparent_100%)]'}`}></div>
        <div className="h-full flex flex-col justify-center items-center px-10 space-y-8">
          {links.map((link, idx) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-4xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-black'} hover:text-[#D4AF37] transition-colors`}
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button onClick={() => setMenuOpen(false)} className={`absolute top-10 right-10 w-16 h-16 rounded-full border ${isDarkMode ? 'border-white/10' : 'border-black/10'} flex items-center justify-center text-white/50 hover:text-white transition-all`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
      </div>
    </>
  );
};

export default Navbar;
