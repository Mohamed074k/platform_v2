// src/components/SuggestedCourses.jsx
import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const slides = [
  {
    image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5.jpg',
    title: 'أساسيات علم الأحياء',
    price: '150 ج.م',
  },
  {
    image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5.jpg',
    title: 'الأنظمة البيولوجية',
    price: '200 ج.م',
  },
  {
    image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5.jpg',
    title: 'التحضير للثانوية العامة',
    price: '250 ج.م',
  },
];

const SuggestedCourses = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 transition-all duration-300 font-sans w-full ${
      isDarkMode 
        ? 'bg-gray-950' 
        : 'bg-white'
    }`}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          
          {/* Swiper - Left */}
          <div 
            className="w-full xl:w-1/2 flex justify-center xl:justify-start order-2 xl:order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="w-full max-w-2xl">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                navigation
                pagination={{ 
                  clickable: true,
                }}
                spaceBetween={24}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="suggested-courses-swiper w-full h-64 sm:h-80 md:h-96 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl bg-white dark:bg-gray-800 relative mb-12"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                {slides.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div 
                      className="w-full h-full bg-cover bg-center relative group"
                      style={{ backgroundImage: `url(${slide.image})` }}
                    >
                      <div className="flex flex-col items-center justify-center gap-3 absolute inset-0 w-full h-full bg-black/55 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <span className="text-lg sm:text-xl md:text-2xl font-bold bg-white/15 px-4 sm:px-5 py-2 sm:py-3 rounded-lg text-white shadow-sm">
                          {slide.price}
                        </span>
                        <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-base sm:text-lg md:text-xl px-4 sm:px-6 py-2 sm:py-3 rounded-lg border-none font-semibold cursor-pointer transition-colors duration-200 shadow-sm hover:shadow-lg hover:from-cyan-600 hover:to-blue-600">
                          الدخول الي الكورس
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Text Content - Right */}
          <div 
            className="w-full xl:w-1/2 text-center xl:text-right order-1 xl:order-2"
            data-aos="fade-top"
            data-aos-delay="100"
          >
            <div className="space-y-6 sm:space-y-8 max-w-2xl mx-auto xl:mx-0 xl:ml-auto">
              {/* Title with Lamp Images on Both Sides - Updated for Mobile */}
              <div className="flex flex-col items-center">
                <h2 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight flex items-center justify-center gap-3 sm:gap-4"
                  data-aos="fade-down"
                  data-aos-delay="400"
                >
                  {/* Left Lamp Image - Bounce Animation */}
                  <img 
                    src="/images/lamp.png" 
                    alt="bio" 
                    className="h-12 sm:h-16 md:h-20 w-auto animate-bounce"
                    style={{ 
                      animationDuration: '2s',
                      animationDelay: '500ms'
                    }}
                  />
                  
                  {/* Title Text */}
                  <div className="flex items-center gap-2 sm:gap-4">
                    <span className={isDarkMode ? 'text-white' : 'text-black'}>
                      المقترحه
                    </span>
                    <span className="text-blue-500">الكورسات</span>
                  </div>
                  
                  {/* Right Lamp Image - Bounce Animation */}
                  <img 
                    src="/images/lamp.png" 
                    alt="bio" 
                    className="h-12 sm:h-16 md:h-20 w-auto scale-x-[-1] animate-bounce"
                    style={{ 
                      animationDuration: '2s',
                      animationDelay: '700ms'
                    }}
                  />
                </h2>
              </div>
              
              <p 
                className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl ${
                  isDarkMode ? 'text-white' : 'text-black'
                }`}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                اكتشف مجموعة متنوعة من الكورسات المميزة في علم الأحياء، مصممة خصيصاً لطلاب الثانوية العامة. 
                كورسات تفاعلية مع شرح مبسط وأمثلة عملية لضمان الفهم الجيد والتحصيل الممتاز.
              </p>

             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestedCourses;