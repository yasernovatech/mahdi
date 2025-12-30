
import React from 'react';
import { PERSONAL_INFO, SKILLS } from '../constants';
import aboutImage from '../41894136.webp';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-40 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 reveal">
            <div className="sticky top-32 space-y-12">
              {/* Elegant Label */}
              <div className="flex items-center space-x-3 space-x-reverse mb-8">
                <div className="w-12 h-[1px] bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#D4AF37]/80 font-light">Portrait</span>
              </div>
              
              {/* Professional Typography Hierarchy */}
              <div className="space-y-4">
                <h2 className="text-5xl md:text-8xl lg:text-9xl font-serif font-normal tracking-[-0.03em] leading-[0.95]">
                  <span className="block">Beyond</span>
                  <span className="block mt-2 md:mt-3">
                    <span className="italic font-light text-[#D4AF37] tracking-tight">the</span>
                    <span className="ml-3 md:ml-4 font-normal">Surface</span>
                  </span>
                </h2>
                
                {/* Subtle Accent Line */}
                <div className="w-20 h-[1px] bg-[#D4AF37]/30 mt-6"></div>
              </div>
              <div className="relative group max-w-sm">
                <div className="aspect-[3/4] overflow-hidden rounded-[4rem] relative">
                  {/* Radial gradient mask for smooth fade out - starts earlier for better blend */}
                  <div 
                    className="absolute inset-0 rounded-[4rem] overflow-hidden"
                    style={{
                      maskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.04) 85%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0) 100%)',
                      WebkitMaskImage: 'radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.2) 75%, rgba(0,0,0,0.1) 80%, rgba(0,0,0,0.04) 85%, rgba(0,0,0,0.01) 90%, rgba(0,0,0,0) 100%)',
                    }}
                  >
                    <img 
                      src={aboutImage} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                      alt="Portrait"
                      style={{
                        imageRendering: 'high-quality',
                        filter: 'blur(0.4px)',
                      }}
                    />
                  </div>
                  {/* Fade overlay for seamless blend with background - Dark mode - stronger gradient */}
                  <div 
                    className="absolute inset-0 rounded-[4rem] pointer-events-none dark:block hidden"
                    style={{
                      background: 'radial-gradient(ellipse at center, transparent 0%, transparent 25%, rgba(3,3,3,0.15) 35%, rgba(3,3,3,0.35) 45%, rgba(3,3,3,0.55) 55%, rgba(3,3,3,0.75) 65%, rgba(3,3,3,0.88) 75%, rgba(3,3,3,0.95) 82%, rgba(3,3,3,0.98) 88%, rgba(3,3,3,1) 100%)',
                    }}
                  ></div>
                  {/* Fade overlay for seamless blend with background - Light mode - stronger gradient */}
                  <div 
                    className="absolute inset-0 rounded-[4rem] pointer-events-none dark:hidden block"
                    style={{
                      background: 'radial-gradient(ellipse at center, transparent 0%, transparent 25%, rgba(249,249,247,0.15) 35%, rgba(249,249,247,0.35) 45%, rgba(249,249,247,0.55) 55%, rgba(249,249,247,0.75) 65%, rgba(249,249,247,0.88) 75%, rgba(249,249,247,0.95) 82%, rgba(249,249,247,0.98) 88%, rgba(249,249,247,1) 100%)',
                    }}
                  ></div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-full flex items-center justify-center text-black font-serif italic text-2xl -rotate-12 shadow-2xl border-4 border-[#F9F9F7] dark:border-[#030303]">
                  Saam.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-20 reveal">
            <div className="space-y-16">
               {/* Professional About Text */}
               <div className="space-y-6">
                 <div className="flex items-center space-x-3 space-x-reverse mb-4">
                   <div className="w-8 h-[1px] bg-gradient-to-l from-[#D4AF37]/40 to-transparent"></div>
                   <span className="text-[9px] font-mono uppercase tracking-[0.3em] text-[#D4AF37]/60 font-light">Introduction</span>
                 </div>
                 <p className="text-xl md:text-2xl lg:text-3xl font-light leading-[1.6] tracking-[-0.01em] opacity-75 max-w-4xl">
                   {PERSONAL_INFO.about}
                 </p>
               </div>
               
               {/* Skills Section - Professional Design */}
               <div className="pt-12 border-t border-current/[0.05]">
                 <div className="flex items-center space-x-3 space-x-reverse mb-12">
                   <div className="w-12 h-[1px] bg-gradient-to-l from-[#D4AF37] to-transparent"></div>
                   <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-[#D4AF37]/80 font-light">Expertise</span>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {SKILLS.map((skill, i) => (
                      <div key={i} className="group space-y-5">
                         <div className="flex justify-between items-baseline mb-2">
                            <span className="text-[11px] font-mono uppercase tracking-[0.15em] opacity-60 font-light leading-tight">
                              {skill.name}
                            </span>
                            <span className="text-xl md:text-2xl font-serif italic text-[#D4AF37] font-light tracking-tight">
                              {skill.level}
                              <span className="text-sm md:text-base opacity-60 ml-1">%</span>
                            </span>
                         </div>
                         <div className="relative">
                           {/* Background track */}
                           <div className="h-[2px] w-full bg-current/[0.08] rounded-full overflow-hidden"></div>
                           {/* Progress bar with gradient */}
                           <div 
                             className="absolute top-0 right-0 h-[2px] bg-gradient-to-l from-[#D4AF37] to-[#D4AF37]/80 rounded-full transition-all duration-[2.5s] ease-out group-hover:from-[#D4AF37] group-hover:to-white shadow-[0_0_8px_rgba(212,175,55,0.4)]"
                             style={{ width: `${skill.level}%` }}
                           ></div>
                           {/* Glow effect on hover */}
                           <div 
                             className="absolute top-0 right-0 h-[2px] bg-[#D4AF37] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
                             style={{ width: `${skill.level}%` }}
                           ></div>
                         </div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            {/* Philosophy Section */}
            <div className="bg-current/[0.02] backdrop-blur-3xl rounded-[4rem] p-12 md:p-20 border border-current/[0.05]">
               <div className="flex items-center space-x-3 space-x-reverse mb-8">
                 <div className="w-8 h-[1px] bg-gradient-to-l from-[#D4AF37]/40 to-transparent"></div>
                 <h4 className="text-2xl md:text-3xl font-serif font-light italic text-[#D4AF37] tracking-tight">The Philosophy</h4>
               </div>
               <p className="text-lg md:text-xl font-light opacity-60 leading-relaxed tracking-tight max-w-3xl">
                 Art is not merely a visual tool for me, but a language for reclaiming identity and empowering silenced voices. In every pixel and every stroke of the brush, there lies a commitment to truth and modern aesthetics.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
