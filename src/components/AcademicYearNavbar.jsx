// src/components/AcademicYearNavbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const mockUserName = 'محمد'; // Replace with backend user name

const AcademicYearNavbar = () => {
  const { isDarkMode } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const profileRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-6 border-b transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-900/95 border-gray-700' 
          : 'bg-white/95 border-gray-200'
      }`} style={{ direction: 'rtl' }}>
        
        {/* Right: Profile Icon with Dropdown */}
        <div ref={profileRef} className="relative flex items-center">
          <button
            className="bg-transparent border-none cursor-pointer p-0"
            onClick={() => setDropdownOpen((open) => !open)}
            aria-label="Open profile menu"
          >
            <svg
              width="38"
              height="38"
              viewBox="0 0 24 24"
              fill="none"
              stroke={isDarkMode ? '#fbbf24' : '#0ea5e9'}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
            </svg>
          </button>
          
          {dropdownOpen && (
            <div className={`absolute top-full right-0 min-w-56 p-4 rounded-xl shadow-2xl z-50 flex flex-col gap-3 ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            }`}>
              {/* الصفحة الرئيسية */}
              <button 
                onClick={() => { setDropdownOpen(false); navigate('/'); }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500/10 transition-colors duration-200 text-right w-full"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12V19a2 2 0 0 0 2 2h3m6 0h3a2 2 0 0 0 2-2V12M12 3l8 8-8-8-8 8"/>
                  <path d="M9 21V12h6v9"/>
                </svg>
                الصفحة الرئيسية
              </button>
              
              {/* اهلا (user name) */}
              <div className="flex items-center gap-3 p-3 text-right">
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="7" r="4"/>
                  <path d="M21 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/>
                </svg>
                اهلا ({mockUserName})
              </div>
              
              {/* حسابي */}
              <button 
                onClick={() => { setDropdownOpen(false); navigate('/profile'); }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500/10 transition-colors duration-200 text-right w-full"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="7" r="4"/>
                  <path d="M5.5 21h13a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4h-9a4 4 0 0 0-4 4v2a2 2 0 0 0 2 2z"/>
                </svg>
                حسابي
              </button>
              
              {/* كورساتي */}
              <button 
                onClick={() => { setDropdownOpen(false); navigate('/profile'); }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-500/10 transition-colors duration-200 text-right w-full"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 1 4 16.5z"/>
                </svg>
                كورساتي
              </button>
              
              {/* تسجيل الخروج */}
              <button 
                onClick={() => { setDropdownOpen(false); /* Add logout logic */ }}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-500/10 transition-colors duration-200 text-right w-full text-red-500"
              >
                <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                تسجيل الخروج
              </button>
            </div>
          )}
        </div>

        {/* Left: Dark mode toggle and logo */}
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <img 
            src="/images/logo.ec57654f06e8a768a566.png" 
            alt="LOGO" 
            className="h-10 w-auto cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
      </nav>

      {/* Scroll Progress Bar */}
      <div
        className={`fixed top-16 left-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 z-40 transition-all duration-200 ${
          scrollProgress > 0 ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Spacer for fixed navbar */}
      <div className="h-24" />
    </>
  );
};

export default AcademicYearNavbar;