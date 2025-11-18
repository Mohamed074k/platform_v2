// src/components/MenuToggle.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const MenuToggle = ({ className = '' }) => {
  const { isMenuOpen, toggleMenu, isMobile } = useTheme();

  if (!isMobile) {
    return null;
  }

  return (
    <button
      className={`w-11 h-11 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex flex-col items-center justify-center gap-1.5 transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white ${
        isMenuOpen ? 'bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg' : ''
      } ${className}`}
      onClick={toggleMenu}
      aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
    >
      <span
        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
          isMenuOpen ? 'transform rotate-45 translate-y-2' : ''
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
          isMenuOpen ? 'opacity-0' : ''
        }`}
      />
      <span
        className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
          isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''
        }`}
      />
    </button>
  );
};

export default MenuToggle;