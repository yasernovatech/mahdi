
import React, { useState } from 'react';
import { PORTFOLIO } from '../constants';

const Portfolio: React.FC = () => {
  const categories = ['All', 'Commercial', 'Digital Art', 'Social Campaign'];
  const [filter, setFilter] = useState('All');

  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <section id="work" className="py-32 md:py-60 border-t border-current/5 overflow-hidden transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 md:mb-32 gap-12 reveal">
          <div className="space-y-8">
            <div className="flex items-center space-x-6 text-[#D4AF37]">
              <div className="w-10 h-[1px] bg-[#D4AF37]"></div>
              <span className="text-[10px] font-bold tracking-[0.8em] uppercase">03 / Works</span>
            </div>
            <h3 className="text-6xl md:text-9xl font-serif font-bold tracking-tight leading-none">Selected <br /> <span className="italic text-[#D4AF37]">Masterpieces.</span></h3>
          </div>
          
          <div className="flex overflow-x-auto scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            <div className="flex space-x-2 bg-current/[0.02] backdrop-blur-3xl p-1.5 rounded-full shrink-0 shadow-sm dark:shadow-none">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 md:px-10 py-3 md:py-5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all duration-500 whitespace-nowrap ${
                    filter === cat 
                    ? 'bg-[#D4AF37] text-white dark:text-black shadow-lg scale-[1.02]' 
                    : 'opacity-40 hover:opacity-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-40 reveal">
          {filteredItems.map(item => (
            <div key={item.id} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-current/[0.02] transition-all duration-700 shadow-lg dark:shadow-2xl">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-contain grayscale brightness-90 dark:brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.2s] ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 dark:from-black via-transparent to-transparent opacity-80 group-hover:opacity-30 transition-opacity"></div>
                
                <div className="absolute top-8 right-8 z-20">
                   <span className="px-6 py-2 bg-black/50 backdrop-blur-xl rounded-full text-[8px] font-bold uppercase tracking-[0.3em] text-[#D4AF37] border border-white/10 group-hover:bg-[#D4AF37] group-hover:text-white dark:group-hover:text-black transition-all">{item.category}</span>
                </div>
              </div>

              <div className="mt-8 px-4 flex justify-between items-start">
                <div className="space-y-3 max-w-lg">
                  <h4 className="text-3xl md:text-4xl font-serif font-bold group-hover:text-[#D4AF37] transition-colors">{item.title}</h4>
                  <p className="opacity-30 font-light leading-relaxed text-base md:text-lg">{item.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-current/10 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                   <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
