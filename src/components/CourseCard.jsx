import React from 'react';
import { useTheme } from '../context/ThemeContext';

const CourseCard = ({ 
  courseImage, 
  courseName, 
  price = "199 ريال", 
  duration = "500 ساعة", 
  totalQuestions = "1500 سؤال",
  onEnroll 
}) => {
  const { isDarkMode } = useTheme();

  const handleEnroll = () => {
    if (onEnroll) {
      onEnroll();
    }
  };

  return (
    <div className={`w-full max-w-sm mx-auto rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
      isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    } border`}>
      {/* Course Image */}
      <div className="w-full h-48 overflow-hidden">
        <img 
          src={courseImage} 
          alt={courseName} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      
      {/* Card Content */}
      <div className="p-6 space-y-4">
        {/* Price */}
        <div className={`text-2xl font-bold text-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          {price}
        </div>
        
        {/* Enroll Button */}
        <button 
          onClick={handleEnroll}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:from-cyan-500 hover:to-blue-500 hover:shadow-lg transform hover:-translate-y-1"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
          اشترك الان
        </button>
        
        {/* Duration */}
        <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12,6 12,12 16,14"></polyline>
            </svg>
            <span className={`font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>المحتوي</span>
          </div>
          <div className={`text-center font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {duration}
          </div>
        </div>
        
        {/* Total Questions */}
        <div className={`p-3 rounded-lg text-center ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'} font-medium`}>
          اجمالي الأسئلة: {totalQuestions}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;