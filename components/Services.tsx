
import React from 'react';
import { SERVICES } from '../constants';
import strategicBrandingImage from '../Screenshot (128).webp';
import socialAdvocacyImage from '../Screenshot (121).webp';
import editorialIllustrationImage from '../Screenshot (125).webp';
import campaignManagementImage from '../Screenshot (119).webp';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-48 bg-current/[0.01] border-y border-current/[0.05]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* بخش معرفی تخصص */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32 md:mb-56 reveal">
          <div className="space-y-10">
            <div className="flex items-center space-x-4 space-x-reverse">
              <span className="text-[10px] font-mono tracking-[1em] text-[#D4AF37] uppercase">Core Capabilities</span>
              <div className="flex-grow h-[0.5px] bg-gradient-to-r from-[#D4AF37]/40 to-transparent"></div>
            </div>
            <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-[0.9]">
              Strategic <br /> 
              <span className="italic text-[#D4AF37] font-light">Elegance.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end lg:pb-6">
            <div className="relative max-w-lg lg:mr-auto space-y-4 md:space-y-6">
              {/* Decorative quote mark - smaller on mobile */}
              <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 text-[50px] md:text-[80px] lg:text-[120px] font-serif italic text-[#D4AF37]/8 md:text-[#D4AF37]/10 leading-none">
                "
              </div>
              {/* Quote text with refined typography - optimized for mobile */}
              <p className="text-lg md:text-2xl lg:text-3xl font-serif font-light leading-[1.6] md:leading-[1.5] tracking-tight opacity-70 md:opacity-70 relative z-10 pl-4 md:pl-8 border-r border-[#D4AF37]/15 md:border-r-2 md:border-[#D4AF37]/20 pr-4 md:pr-6">
                <span className="italic text-[#D4AF37]/90">We bridge art</span> with commercial strategy to create brands that are not only seen, but <span className="italic font-normal">remembered</span>.
              </p>
              {/* Subtle accent line - smaller on mobile */}
              <div className="w-12 md:w-16 h-[0.5px] md:h-[1px] bg-gradient-to-r from-[#D4AF37]/30 md:from-[#D4AF37]/40 to-transparent mt-2 md:mt-4"></div>
            </div>
          </div>
        </div>

        {/* گرید تخصص‌ها با استایل نامتقارن حرفه‌ای */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 reveal">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className={`group relative flex flex-col ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              {/* بخش تصویر با افکت لایه‌ای */}
              <div className="relative mb-10 overflow-hidden rounded-[3rem] md:rounded-[5rem] shadow-2xl transition-all duration-1000 group-hover:rounded-[1.5rem]">
                <div className="aspect-[16/11] overflow-hidden">
                   <img 
                     src={service.title === "Strategic Branding" ? strategicBrandingImage : service.title === "Social Advocacy Art" ? socialAdvocacyImage : service.title === "Editorial Illustration" ? editorialIllustrationImage : service.title === "Campaign Management" ? campaignManagementImage : service.imageUrl} 
                     alt={service.title} 
                     className={`w-full h-full ${service.title === "Strategic Branding" || service.title === "Social Advocacy Art" || service.title === "Editorial Illustration" || service.title === "Campaign Management" ? 'object-contain' : 'object-cover'} grayscale contrast-125 transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0 brightness-75 group-hover:brightness-100`}
                   />
                </div>
                {/* لایه رویی با اطلاعات فنی */}
                <div className="absolute top-8 left-8">
                   <span className="text-[10px] font-mono text-white/40 group-hover:text-[#D4AF37] transition-colors tracking-widest uppercase">ST_MOD_00{idx + 1}</span>
                </div>
                <div className="absolute inset-0 border-[0.5px] border-white/5 rounded-[inherit]"></div>
              </div>

              {/* محتوای متنی با تضاد تایپوگرافی */}
              <div className="px-6 md:px-10 space-y-6">
                <div className="flex items-end justify-between">
                  <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter leading-none group-hover:text-[#D4AF37] transition-colors duration-500">
                    {service.title}
                  </h3>
                  <div className="text-[40px] md:text-[60px] font-serif italic opacity-[0.05] group-hover:opacity-20 transition-opacity">
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>
                </div>
                
                <p className="text-lg font-light leading-relaxed opacity-40 group-hover:opacity-70 transition-opacity duration-700">
                  {service.desc}
                </p>

                <div className="pt-6 flex flex-wrap gap-3">
                   {['Identity', 'Strategy', 'Execution'].map((tag, i) => (
                     <span key={i} className="px-4 py-1.5 rounded-full border border-current/10 text-[8px] font-bold uppercase tracking-widest opacity-30 group-hover:opacity-100 group-hover:border-[#D4AF37]/30 transition-all">
                        {tag}
                     </span>
                   ))}
                </div>
              </div>

              {/* خط راهنمای عمودی متحرک */}
              <div className="absolute -right-6 top-1/4 bottom-1/4 w-[0.5px] bg-[#D4AF37]/20 scale-y-0 group-hover:scale-y-100 transition-transform duration-1000 hidden lg:block"></div>
            </div>
          ))}
        </div>

        {/* بخش پانویس سرویس‌ها */}
        <div className="mt-40 md:mt-64 flex flex-col items-center text-center reveal">
           <div className="w-px h-24 bg-gradient-to-b from-[#D4AF37] to-transparent mb-12 opacity-30"></div>
           <h4 className="text-2xl md:text-4xl font-serif font-light italic opacity-30 mb-10">Looking for a tailored visual strategy?</h4>
           <a href="#contact" className="group relative px-16 py-6 rounded-full overflow-hidden border border-[#D4AF37]/30 transition-all hover:border-[#D4AF37]">
              <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.8em] group-hover:text-black transition-colors">Initiate Project</span>
              <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-700"></div>
           </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
