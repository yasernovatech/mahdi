
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import heroImage from '../photo_2025-04-23_20-09-43 copy.webp';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center overflow-hidden transition-colors duration-500 pt-32 md:pt-40 pb-20">
      {/* Background - Uniform blur */}
      <div className="absolute inset-0 z-0 bg-[#030303] dark:bg-[#030303]"></div>
      <div className="absolute inset-0 z-1 bg-[#030303] blur-[2px] opacity-100"></div>

      {/* Circular Image in Center with Fade Out Effect and Name Below */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
        <div className="relative w-[110vw] md:w-[60vw] max-w-[800px] aspect-square mb-8 md:mb-12">
          {/* Radial gradient mask for ultra smooth fade out - starts earlier */}
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              maskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.02) 85%, rgba(0,0,0,0) 100%)',
              WebkitMaskImage: 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,0.9) 35%, rgba(0,0,0,0.7) 45%, rgba(0,0,0,0.4) 55%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.08) 75%, rgba(0,0,0,0.02) 85%, rgba(0,0,0,0) 100%)',
            }}
          >
            <img 
              src={heroImage}
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover rounded-full"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              style={{
                imageRendering: 'high-quality',
                filter: 'blur(0.5px)',
              }}
            />
          </div>
          {/* Strong fade overlay for seamless blend */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, transparent 0%, transparent 25%, rgba(3,3,3,0.15) 40%, rgba(3,3,3,0.4) 50%, rgba(3,3,3,0.65) 60%, rgba(3,3,3,0.85) 70%, rgba(3,3,3,0.95) 80%, rgba(3,3,3,0.98) 88%, rgba(3,3,3,1) 100%)',
              pointerEvents: 'none',
            }}
          ></div>
        </div>
        
        {/* Elegant Name Below Image */}
        <div className="relative z-20 text-center">
          <h1 className="text-lg md:text-xl font-serif font-light tracking-[0.15em] text-white/70">
            <span className="font-normal">{PERSONAL_INFO.first_name}</span>{' '}
            <span className="italic text-[#D4AF37]/70 font-extralight">{PERSONAL_INFO.last_name}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
