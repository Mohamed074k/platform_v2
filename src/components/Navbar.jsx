// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import MenuToggle from './MenuToggle';
import { User } from 'lucide-react'; // Import Lucide User icon

const Navbar = () => {
  const { isDarkMode, isMenuOpen, closeMenu, isMobile } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  // const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMenuOpen, closeMenu]);

 

  const handleSignupClick = () => {
    navigate('/signup');
    closeMenu();
  };

  const handleLoginClick = () => {
    navigate('/signin');
    closeMenu();
  };

  const handleProfileClick = () => {
    navigate('/profile');
    closeMenu();
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-4 md:px-8 lg:px-16 transition-all duration-300 backdrop-blur-sm  ${
          isDarkMode 
            ? 'bg-gray-950 border-b border-gray-900 text-white' 
            : 'bg-white/95 border-b border-gray-200 text-gray-950'
        }`}
        style={{ direction: 'rtl' }}
      >
        {/* Mobile Menu Button and Dropdown */}
        <div className="relative md:hidden" ref={menuRef}>
          <MenuToggle />
          
          {/* Mobile Dropdown Menu */}
          <div
            className={`absolute top-full right-0 mt-2 rounded-lg shadow-xl border p-3 flex flex-col gap-2 min-w-[180px] transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-900 border-gray-800' 
                : 'bg-white border-gray-200'
            } ${
              isMenuOpen
                ? 'opacity-100 visible transform translate-y-0'
                : 'opacity-0 invisible transform -translate-y-2'
            }`}
          >
            <button 
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-blue-600"
              onClick={handleSignupClick}
            >
              انشأ حسابك الان
            </button>
            <button 
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] flex items-center justify-center whitespace-nowrap border-2 border-cyan-500 text-cyan-500 dark:text-cyan-300 dark:border-cyan-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-300 dark:hover:text-gray-900"
              onClick={handleLoginClick}
            >
              تسجيل الدخول
            </button>
            {/* Mobile Profile Link - Kept the same with Lucide icon */}
            <button 
              className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] flex items-center justify-center gap-2 whitespace-nowrap border-2 border-gray-400 text-gray-600 dark:text-gray-300 dark:border-gray-600 hover:bg-gray-500 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900"
              onClick={handleProfileClick}
            >
              <User className="w-5 h-5" /> {/* Replaced with Lucide icon */}
              الملف الشخصي
            </button>
          </div>
        </div>

        {/* Logo Container - Center */}
        <div className="relative flex items-center justify-center flex-1 md:flex-none mx-4">
          <img 
            src="/images/logo.ec57654f06e8a768a566-Bq0MjZMn.png" 
            alt="LOGO" 
            className="h-10 w-auto cursor-pointer max-w-[120px]"
            onClick={handleLogoClick}
          />
          
          {/* Theme Toggle behind logo for desktop */}
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <ThemeToggle />
          </div>
        </div>

        {/* Right Side - Theme Toggle (mobile) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle - Mobile */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>

        {/* Desktop Buttons with Profile Icon */}
        <div className="hidden md:flex items-center gap-4">
          {/* Profile Icon - Now positioned to the left of signup button */}
          <button 
            onClick={handleProfileClick}
            className={`p-2 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'hover:bg-gray-700 text-gray-300' 
                : 'hover:bg-gray-200 text-gray-600'
            }`}
            aria-label="الملف الشخصي"
          >
            <User className="w-6 h-6" /> {/* Replaced with Lucide icon */}
          </button>

          <button 
            className="px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] flex items-center justify-center whitespace-nowrap bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md hover:shadow-lg hover:from-cyan-600 hover:to-blue-600"
            onClick={handleSignupClick}
          >
            انشأ حسابك الان
          </button>
          
          <button
            onClick={handleLoginClick}
            className={`
              px-4 py-2 rounded-lg font-semibold transition-all duration-300 
              hover:scale-105 focus:outline-none focus:ring-2 min-h-[44px] 
              flex items-center justify-center whitespace-nowrap border-2 
              ${isDarkMode 
                ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white focus:ring-cyan-500' 
                : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500'
              }
            `}
          >
            تسجيل الدخول
          </button>
        </div>

        {/* Theme Toggle for desktop (right side) */}
        <div className="hidden md:block lg:hidden">
          <ThemeToggle />
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;