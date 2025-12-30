
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' }));
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const networks = [
    { name: 'Instagram', url: PERSONAL_INFO.instagram, handle: 'saamart98', icon: 'IG' },
    { name: 'Telegram', url: PERSONAL_INFO.telegram, handle: 'Veera_Production', icon: 'TG' },
    { name: 'LinkedIn', url: PERSONAL_INFO.linkedin, handle: 'mahdi-kazemi', icon: 'LN' },
    { name: 'WhatsApp', url: PERSONAL_INFO.whatsapp, handle: 'Direct Line', icon: 'WA' },
  ];

  return (
    <section id="contact" className="py-20 md:py-48 relative overflow-hidden bg-[#070707] text-white">
      {/* المان‌های بصری پس‌زمینه - فوق لوکس */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-10 md:opacity-20">
         <div className="absolute top-[5%] md:top-[10%] right-[-10%] md:right-[-5%] text-[40vw] md:text-[30vw] font-serif font-black leading-none italic select-none opacity-[0.03]">INQUIRY</div>
         <div className="absolute bottom-[-5%] left-[-10%] md:left-[-5%] text-[30vw] md:text-[20vw] font-serif font-black leading-none select-none opacity-[0.03]">EST_1998</div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 md:gap-24 items-start">
          
          {/* بخش چپ: اطلاعات استراتژیک */}
          <div className="lg:col-span-5 space-y-16 md:space-y-24 reveal">
            <div className="space-y-6 md:space-y-10">
              <div className="flex items-center space-x-4 md:space-x-6 space-x-reverse">
                <div className="w-10 md:w-16 h-[1px] bg-[#D4AF37]"></div>
                <span className="text-[8px] md:text-[10px] font-mono tracking-[0.8em] md:tracking-[1em] text-[#D4AF37] uppercase">The Liaison Office</span>
              </div>
              <h2 className="text-5xl sm:text-6xl md:text-[9.5rem] font-serif font-bold tracking-tighter leading-[0.9] md:leading-[0.85]">
                Let's Build <br /> <span className="italic font-light text-[#D4AF37]">Legacy.</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-12 pt-10 md:pt-12 border-t border-white/5">
               <div className="space-y-2 md:space-y-4">
                  <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#D4AF37]">Local Time</span>
                  <div className="flex items-baseline space-x-2 md:space-x-3 space-x-reverse">
                    <span className="text-2xl md:text-5xl font-serif italic tracking-tighter">{time}</span>
                    <span className="text-[8px] md:text-[10px] font-mono opacity-40 uppercase">KBL / AFG</span>
                  </div>
               </div>
               <div className="space-y-2 md:space-y-4">
                  <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#D4AF37]">Availability</span>
                  <div className="flex items-center space-x-2 md:space-x-4 space-x-reverse">
                    <div className="relative">
                       <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500"></div>
                       <div className="absolute inset-0 w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500 animate-ping opacity-75"></div>
                    </div>
                    <span className="text-[10px] md:text-lg font-bold uppercase tracking-tighter">Open for Inquiry</span>
                  </div>
               </div>
            </div>

            <div className="space-y-6 md:space-y-10">
               <span className="text-[8px] md:text-[9px] font-mono uppercase tracking-[0.3em] md:tracking-[0.4em] text-white/30">Connect via Secure Channels</span>
               <div className="grid gap-3 md:gap-4">
                  {networks.map((net) => (
                    <a 
                      key={net.name} 
                      href={net.url} 
                      target="_blank" 
                      className="group flex items-center justify-between p-4 md:p-6 rounded-2xl md:rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-[#D4AF37] hover:border-[#D4AF37] transition-all duration-700"
                    >
                      <div className="flex items-center space-x-4 md:space-x-6 space-x-reverse">
                         <span className="text-[8px] md:text-[10px] font-mono font-black opacity-30 group-hover:text-black group-hover:opacity-100">{net.icon}</span>
                         <span className="text-lg md:text-2xl font-serif font-bold group-hover:text-black transition-colors">{net.name}</span>
                      </div>
                      <span className="text-[8px] md:text-[10px] font-mono uppercase tracking-widest opacity-20 group-hover:text-black group-hover:opacity-60">{net.handle}</span>
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* بخش راست: فرم فوق مینیمال و قدرتمند */}
          <div className="lg:col-span-7 reveal mt-12 lg:mt-0">
            <div className="relative p-[1px] md:p-1.5 rounded-[3rem] md:rounded-[4.5rem] bg-gradient-to-br from-[#D4AF37]/30 via-transparent to-white/5 shadow-2xl overflow-hidden">
               <div className="bg-[#0A0A0A] rounded-[2.9rem] md:rounded-[4rem] p-8 md:p-20 relative overflow-hidden">
                  
                  {/* دکوراسیون فرم */}
                  <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-[#D4AF37]/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none"></div>
                  
                  <div className="mb-10 md:mb-16">
                     <h3 className="text-2xl md:text-4xl font-serif font-bold mb-3 md:mb-4 tracking-tighter">Start a Conversation</h3>
                     <p className="text-xs md:text-lg font-light opacity-40 italic max-w-sm">Briefly describe your vision, and I'll respond with a strategic approach.</p>
                  </div>

                  <form className="space-y-10 md:space-y-16" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                      <div className="relative group/input">
                        <input type="text" className="w-full bg-transparent border-b border-white/10 py-4 md:py-5 outline-none focus:border-[#D4AF37] transition-all peer text-lg md:text-xl font-light" placeholder=" " />
                        <label className="absolute right-0 top-4 md:top-5 text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#D4AF37] peer-focus:opacity-100">Full Name</label>
                      </div>
                      <div className="relative group/input">
                        <input type="email" className="w-full bg-transparent border-b border-white/10 py-4 md:py-5 outline-none focus:border-[#D4AF37] transition-all peer text-lg md:text-xl font-light" placeholder=" " />
                        <label className="absolute right-0 top-4 md:top-5 text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#D4AF37] peer-focus:opacity-100">Email Address</label>
                      </div>
                    </div>

                    <div className="relative group/input">
                      <textarea rows={2} className="w-full bg-transparent border-b border-white/10 py-4 md:py-5 outline-none focus:border-[#D4AF37] transition-all peer text-lg md:text-xl font-light resize-none" placeholder=" "></textarea>
                      <label className="absolute right-0 top-4 md:top-5 text-[8px] md:text-[10px] font-mono uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-30 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-[#D4AF37] peer-focus:opacity-100">Project Brief</label>
                    </div>

                    <div className="pt-4 md:pt-6">
                      <button className="group relative w-full py-6 md:py-10 rounded-2xl md:rounded-[3rem] bg-[#D4AF37] text-black overflow-hidden transition-all hover:scale-[0.98] active:scale-95 shadow-2xl">
                         <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-expo"></div>
                         <div className="relative z-10 flex items-center justify-center space-x-3 md:space-x-6 space-x-reverse">
                            <span className="text-[10px] md:text-sm font-black uppercase tracking-[0.6em] md:tracking-[1.2em]">Transmit Inquiry</span>
                            <div className="w-6 md:w-12 h-[1px] bg-black/20 group-hover:w-10 md:group-hover:w-20 transition-all duration-700"></div>
                            <svg className="w-4 h-4 md:w-6 md:h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                         </div>
                      </button>
                    </div>
                  </form>

                  <div className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-20 text-[7px] md:text-[9px] font-mono uppercase tracking-[0.3em] md:tracking-[0.5em]">
                    <span className="text-center md:text-right">DESIGNED FOR EXCELLENCE</span>
                    <div className="flex items-center space-x-3 md:space-x-4 space-x-reverse">
                       <span className="text-[#D4AF37]">SAAM STUDIO</span>
                       <div className="w-1 h-1 rounded-full bg-white"></div>
                       <span>EST. 1998</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .ease-expo { transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1); }
      `}} />
    </section>
  );
};

export default Contact;
