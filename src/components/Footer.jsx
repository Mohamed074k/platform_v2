// src/components/Footer.jsx
import React from 'react';
import { Facebook, Twitter, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16 border-t-2 border-gray-800 font-sans relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
        <img 
          src="/images/join-bg1.8a81836e76fd6087ff19-BvJ0jFsO.png" 
          alt="Footer Background" 
          className="w-full h-full object-cover object-center opacity-100 absolute top-0 left-0 z-0"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-gray-900/80 to-blue-900/90 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Logo & Copyright */}
        <div className="flex flex-col gap-2 sm:gap-3 items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <span className="text-lg sm:text-xl font-bold text-cyan-400">د/محمد أيمن</span>
          <span className="text-sm sm:text-base text-gray-300 flex items-center gap-1">
            &copy; {currentYear} جميع الحقوق محفوظة 
            {/* <Heart size={16} className="text-red-500 fill-red-500" /> */}
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-row gap-4 sm:gap-6 items-center order-1 lg:order-2">
          <a href="#" className="text-white text-base sm:text-lg no-underline transition-colors duration-200 hover:text-cyan-400">
            الرئيسية
          </a>
          <a href="#" className="text-white text-base sm:text-lg no-underline transition-colors duration-200 hover:text-cyan-400">
            الكورسات
          </a>
          <a href="#" className="text-white text-base sm:text-lg no-underline transition-colors duration-200 hover:text-cyan-400">
            تواصل معنا
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-3 sm:gap-4 items-center order-3">
          <a 
            href="#" 
            className="text-gray-300 transition-colors duration-200 hover:text-cyan-400 flex items-center" 
            aria-label="فيسبوك"
          >
          <Facebook 
          size={20} 
          color="currentColor" 
          strokeWidth={2}
          className="hover:scale-110 transition-transform"
          />          
       </a>
           <a 
            href="#" 
            className="text-gray-300 transition-colors duration-200 hover:text-cyan-400 flex items-center" 
            aria-label="تويتر"
          >
            <Twitter 
              size={20} 
              color="currentColor" 
              strokeWidth={2}
              className="hover:scale-110 transition-transform"
            />
          </a>
          <a 
            href="#" 
            className="text-gray-300 transition-colors duration-200 hover:text-cyan-400 flex items-center" 
            aria-label="انستجرام"
          >
            <Instagram   size={20} 
            color="currentColor" 
            strokeWidth={2}
            className="hover:scale-110 transition-transform"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;