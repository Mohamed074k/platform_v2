// src/components/Hero.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const nextYear = new Date().getFullYear() + 1;
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const handleButtonClick = (yearId) => {
    navigate(`/academic-year/${yearId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div 
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 transition-all duration-300 font-sans w-full relative ${
        isDarkMode 
          ? 'bg-gray-950 text-white' 
          : 'bg-gray-50 text-gray-950'
      }`}
    >
      {/* Background Overlay - Big Rocks */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/bg-big-rocks.87ab6e5e1e1217f13002.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: isDarkMode ? 0.5 : 0.2
        }}
      />
      
      {/* Background Overlay - Rock Pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/bg-rock.c5a279117bb075f8bb3a.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: isDarkMode ? 0.8 : 0.4,
          mixBlendMode: isDarkMode ? 'overlay' : 'multiply'
        }}
      />
      
      {/* Content */}
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* Image Section - First on mobile, Left on desktop */}
          <div 
            className="w-full lg:w-2/5 flex justify-center order-1"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="relative w-full max-w-md lg:max-w-lg">
              <img 
                src="/images/mainHeroSection.png" 
                alt="د/محمد ايمن" 
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          {/* Content Section - Second on mobile, Right on desktop */}
          <div 
            className="w-full lg:w-3/5 text-center lg:text-right order-2 pr-0 lg:pr-12"
            data-aos="fade-top"
            data-aos-delay="100"
          >
            <div className="space-y-4 sm:space-y-6">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                د/محمد أيمن
              </h1>
              
              <p 
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                اهلا دفعة <span className="text-blue-500">{nextYear}</span>
              </p>
              
              <p
                className={`text-lg sm:text-xl md:text-2xl leading-loose ${
                  isDarkMode ? "text-white" : "text-gray-950"
                }`}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                لكل ما يتعلق بمنهج الاحياء بالثانويه العامه
              </p>
            </div>

            {/* Buttons - Stacked vertically on all devices */}
            <div 
              className="flex flex-col justify-center lg:justify-start items-center lg:items-end gap-3 sm:gap-4 mt-8 sm:mt-12"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button 
                onClick={() => handleButtonClick(1)}
                className="px-8 py-4 rounded-full text-base sm:text-lg font-bold text-white cursor-pointer transition-all duration-300 shadow-md hover:scale-105 text-center bg-gradient-to-r from-blue-400 to-cyan-400 hover:from-blue-500 hover:to-cyan-500"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                الصف الاول الثانوي
              </button>
              
              <button 
                onClick={() => handleButtonClick(2)}
                className="px-8 py-4 rounded-full text-base sm:text-lg font-bold text-white cursor-pointer transition-all duration-300 shadow-md hover:scale-105 text-center bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                الصف الثاني الثانوي
              </button>
              
              <button 
                onClick={() => handleButtonClick(3)}
                className="px-8 py-4 rounded-full text-base sm:text-lg font-bold text-white cursor-pointer transition-all duration-300 shadow-md hover:scale-105 text-center bg-gradient-to-r from-red-500 to-orange-400 hover:from-red-600 hover:to-orange-500"
                data-aos="zoom-in"
                data-aos-delay="900"
              >
                الصف الثالث الثانوي
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;