
import React from 'react';
import { EXPERIENCES } from '../constants';
import womenSupportImage from '../Screenshot (129).webp';
import superColaImage from '../Screenshot (128).webp';
import presidentialPressImage from '../Screenshot (117).webp';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 md:py-48 relative overflow-hidden">
      {/* دکوراسیون پس‌زمینه */}
      <div className="absolute top-0 right-10 text-[20vw] font-serif font-black opacity-[0.01] pointer-events-none select-none italic">
        History
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* هدر بخش */}
        <div className="mb-24 md:mb-40 reveal flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-[10px] font-mono tracking-[0.8em] text-[#D4AF37] uppercase">The Chronology</span>
              <div className="w-12 h-[0.5px] bg-[#D4AF37]/50"></div>
            </div>
            <h3 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-none">
              Professional <br /> <span className="italic font-light text-[#D4AF37]">Evolution.</span>
            </h3>
          </div>
          <p className="max-w-xs text-[11px] font-mono uppercase tracking-widest opacity-30 leading-relaxed pb-4">
            A decade of shaping visual identities and social narratives across the Silk Road.
          </p>
        </div>

        {/* لیست تجربیات به سبک Editorial */}
        <div className="space-y-32 md:space-y-64">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="reveal group">
              <div className={`grid lg:grid-cols-12 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* بخش شماره و سال (بسیار بزرگ و کمرنگ) */}
                <div className={`lg:col-span-3 flex flex-col ${idx % 2 !== 0 ? 'lg:items-end lg:text-left' : 'lg:items-start lg:text-right'}`}>
                  <span className="text-[120px] md:text-[180px] font-serif font-black leading-none opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 -mb-10 md:-mb-16">
                    0{idx + 1}
                  </span>
                  <div className="space-y-2 relative z-10">
                    <span className="block text-[#D4AF37] font-serif italic text-2xl md:text-3xl">{exp.period}</span>
                    <span className="block text-[10px] font-mono tracking-[0.4em] uppercase opacity-40">{exp.role}</span>
                  </div>
                </div>

                {/* تصویر شاخص با لبه‌های بسیار گرد */}
                <div className={`lg:col-span-5 relative ${idx % 2 !== 0 ? 'lg:order-first' : ''}`}>
                  <div className={`relative ${exp.organization === "Women's Support Institute" ? 'aspect-[3/4] md:aspect-[4/5]' : exp.organization === "Super Cola & Zalal Group" ? 'aspect-[3/4] md:aspect-[4/5]' : exp.organization === "Presidential Press & 8AM" ? 'aspect-[3/4] md:aspect-[4/5]' : 'aspect-[4/5] md:aspect-[16/10]'} overflow-hidden rounded-[4rem] md:rounded-[8rem] shadow-2xl transition-all duration-1000 group-hover:rounded-[2rem]`}>
                    <img 
                      src={exp.organization === "Women's Support Institute" ? womenSupportImage : exp.organization === "Super Cola & Zalal Group" ? superColaImage : exp.organization === "Presidential Press & 8AM" ? presidentialPressImage : exp.description[0].imageUrl} 
                      alt={exp.organization} 
                      className={`w-full h-full ${exp.organization === "Women's Support Institute" || exp.organization === "Super Cola & Zalal Group" || exp.organization === "Presidential Press & 8AM" ? 'object-contain' : 'object-cover'} grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[2s]`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                  {/* المان شناور تزئینی */}
                  <div className={`absolute -bottom-10 ${idx % 2 !== 0 ? '-left-10' : '-right-10'} w-32 h-32 md:w-48 md:h-48 rounded-full border border-[#D4AF37]/20 backdrop-blur-xl flex items-center justify-center p-8 transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-12`}>
                     <div className="text-center">
                        <span className="block text-[8px] font-mono uppercase tracking-widest opacity-40 mb-2">Location</span>
                        <span className="block text-[10px] font-bold uppercase tracking-tighter">Afghanistan</span>
                     </div>
                  </div>
                </div>

                {/* محتوای متنی */}
                <div className="lg:col-span-4 space-y-8">
                  <h4 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter border-b border-current/10 pb-6 group-hover:text-[#D4AF37] transition-colors duration-500">
                    {exp.organization}
                  </h4>
                  <div className="space-y-6">
                    {exp.description.map((item, i) => (
                      <div key={i} className="flex items-start space-x-4 space-x-reverse group/item">
                        <div className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2 opacity-30 group-hover/item:opacity-100 transition-opacity"></div>
                        <p className="text-lg font-light opacity-50 leading-relaxed group-hover/item:opacity-90 transition-opacity italic">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                  <button className="flex items-center space-x-4 space-x-reverse group/btn pt-4">
                     <span className="text-[10px] font-black uppercase tracking-[0.4em]">View Case Study</span>
                     <div className="w-8 h-[1px] bg-[#D4AF37] group-hover/btn:w-16 transition-all duration-500"></div>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
