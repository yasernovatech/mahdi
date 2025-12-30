import React, { useState } from 'react';
import galleryImage1 from '../1.webp';
import galleryImage2 from '../2.webp';
import galleryImage3 from '../3.webp';
import galleryImage4 from '../4.webp';
import galleryImage5 from '../5.webp';
import galleryImage6 from '../6.webp';

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  // نسبت‌های ابعاد دقیقاً مشابه عکس الگو - نامتقارن و شیک
  const getAspectClass = (index: number) => {
    const aspects = [
      'aspect-[3/4]',     // ردیف اول چپ - ساختمان آبی (بلند و باریک)
      'aspect-[4/5]',     // ردیف اول راست - چشم (بلند)
      'aspect-[3/4]',     // ردیف دوم چپ - بلندتر برای ارتفاع بیشتر
      'aspect-[3/4]',     // ردیف دوم راست - برگ‌ها (بلند)
      'aspect-square',    // ردیف سوم چپ - پرتره (مربع کامل)
      'aspect-[4/5]',     // ردیف سوم راست - ساختمان سفید (بلند)
    ];
    return aspects[index % aspects.length];
  };

  // Gallery images array
  const galleryImages = [
    { id: '1', src: galleryImage1, alt: 'Gallery Image 1' },
    { id: '2', src: galleryImage2, alt: 'Gallery Image 2' },
    { id: '3', src: galleryImage3, alt: 'Gallery Image 3' },
    { id: '4', src: galleryImage4, alt: 'Gallery Image 4' },
    { id: '5', src: galleryImage5, alt: 'Gallery Image 5' },
    { id: '6', src: galleryImage6, alt: 'Gallery Image 6' },
  ];

  // تعیین موقعیت کارت‌ها - نامتقارن با transform
  const getTransformClass = (index: number) => {
    const transforms = [
      '-translate-y-4 md:-translate-y-6 lg:-translate-y-8',  // کارت اول (چپ) ردیف اول - بالاتر
      'translate-y-4 md:translate-y-6 lg:translate-y-8',    // کارت دوم (راست) ردیف اول - پایین‌تر
      '-translate-y-4 md:-translate-y-6 lg:-translate-y-8',  // کارت سوم (چپ) ردیف دوم - بالاتر
      'translate-y-4 md:translate-y-6 lg:translate-y-8',    // کارت چهارم (راست) ردیف دوم - پایین‌تر
      '',  // کارت پنجم (چپ) - بدون تغییر
      '',  // کارت ششم (راست) - بدون تغییر
    ];
    return transforms[index % transforms.length];
  };

  // فاصله بین ردیف 2 و 3
  const getRowSpacing = (index: number) => {
    if (index === 4 || index === 5) { // ردیف سوم (عکس‌های 5 و 6)
      return 'mt-8 md:mt-12 lg:mt-16';
    }
    return '';
  };

  return (
    <section id="gallery" className="py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-3 md:px-5 lg:px-6 relative z-10">
        
        {/* Grid ساده 2 ستون - دقیقاً مشابه عکس با گوشه‌های گرد و فاصله‌های نامتقارن */}
        <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 reveal">
          {galleryImages.map((item, idx) => (
            <div 
              key={item.id} 
              onClick={() => {
                console.log('Clicked image:', item.id, item.src);
                setSelectedImg(item.src);
              }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl ${getTransformClass(idx)} ${getRowSpacing(idx)} z-10`}
              style={{ willChange: 'transform' }}
            >
              {/* کانتینر تصویر با نسبت ابعاد متغیر و نامتقارن */}
              <div className={`w-full overflow-hidden ${getAspectClass(idx)} rounded-xl md:rounded-2xl lg:rounded-3xl`}>
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-[1.03] pointer-events-none"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Error loading image:', item.src);
                    e.currentTarget.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* لایت‌باکس */}
        {selectedImg && (
          <div 
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8 overflow-hidden"
            onClick={() => setSelectedImg(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-8 md:right-8 text-white/60 hover:text-white transition-all p-2 z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImg(null);
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <img 
                src={selectedImg} 
                alt="Preview" 
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
