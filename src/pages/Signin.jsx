// src/pages/Signin.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Phone, Lock } from 'lucide-react';
import Footer from '../components/Footer';

const Signin = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: ''
  });
  const [focusedField, setFocusedField] = useState('');
  const [shineField, setShineField] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
    setShineField(fieldName);
    // Remove shine after animation completes
    setTimeout(() => {
      setShineField('');
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signin form submitted:', formData);
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const signinImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";

  const isFieldActive = (fieldName) => {
    return focusedField === fieldName || formData[fieldName];
  };

  return (
    <div className={`min-h-screen w-full flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ direction: 'rtl' }}>
      <style>{`
        @keyframes shine {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
 
      `}</style>

      {/* Main Container */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Desktop: Left Side - Image (30%) */}
        <div className="hidden md:block w-3/10 bg-black relative">
          <img 
            src={signinImage} 
            alt="Sign In Illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side - Form (70% on desktop, 100% on mobile) */}
        <div className={`w-full md:w-7/10 ${isDarkMode ? 'bg-gray-950' : 'bg-white'} flex flex-col`}>
          
          {/* Mobile/Tablet: Image at Top */}
          <div className="md:hidden relative h-40">
            <img 
              src={signinImage} 
              alt="Sign In Illustration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-xl font-bold text-white text-center px-6">
                تسجيل الدخول
              </h2>
            </div>
          </div>

          {/* Form Content - Compact, No Scroll */}
          <div className="flex-1 p-6 md:p-8 lg:p-10">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-blue-500 text-center mb-6 md:mb-8 relative pb-3">
              تسجيل الدخول
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
            </h1>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto w-full">
              
              {/* Phone Number Field */}
              <div className="relative pt-4">
                <div className={`relative`}>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('phoneNumber')}
                    onBlur={() => setFocusedField('')}
                    required
                    dir="rtl"
                    className={`w-full px-3 pr-10 pt-4 pb-2 border-0 border-b-2 rounded-t-lg text-sm transition-all duration-300 focus:outline-none bg-transparent relative text-right ${
                      focusedField === 'phoneNumber' 
                        ? 'border-blue-500' 
                        : isDarkMode 
                          ? 'border-gray-600' 
                          : 'border-gray-300'
                    } ${
                      isDarkMode 
                        ? 'text-white' 
                        : 'text-gray-900'
                    }`}
                  />
                  <Phone 
                    size={14} 
                    className={`absolute right-6 transition-all duration-300 pointer-events-none ${
                      isFieldActive('phoneNumber')
                        ? 'top-1'
                        : 'top-6'
                    } ${
                      focusedField === 'phoneNumber'
                        ? 'text-blue-500'
                        : isDarkMode
                          ? 'text-gray-400'
                          : 'text-gray-500'
                    }`}
                  />
                  <label 
                    htmlFor="phoneNumber" 
                    className={`absolute right-10 transition-all duration-300 pointer-events-none ${
                      isFieldActive('phoneNumber')
                        ? 'text-xs top-0 font-semibold'
                        : 'text-sm top-5'
                    } ${
                      focusedField === 'phoneNumber'
                        ? 'text-blue-500'
                        : isDarkMode
                          ? 'text-gray-400'
                          : 'text-gray-500'
                    }`}
                  >
                    رقم الهاتف
                  </label>
                </div>
              </div>

              {/* Password Field */}
              <div className="relative pt-4">
                <div className={`relative`}>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('password')}
                    onBlur={() => setFocusedField('')}
                    required
                    dir="rtl"
                    className={`w-full px-3 pr-10 pt-4 pb-2 border-0 border-b-2 rounded-t-lg text-sm transition-all duration-300 focus:outline-none bg-transparent relative text-right ${
                      focusedField === 'password' 
                        ? 'border-blue-500' 
                        : isDarkMode 
                          ? 'border-gray-600' 
                          : 'border-gray-300'
                    } ${
                      isDarkMode 
                        ? 'text-white' 
                        : 'text-gray-900'
                    }`}
                  />
                  <Lock 
                    size={14} 
                    className={`absolute right-6 transition-all duration-300 pointer-events-none ${
                      isFieldActive('password')
                        ? 'top-0'
                        : 'top-5'
                    } ${
                      focusedField === 'password'
                        ? 'text-blue-500'
                        : isDarkMode
                          ? 'text-gray-400'
                          : 'text-gray-500'
                    }`}
                  />
                  <label 
                    htmlFor="password" 
                    className={`absolute right-10 transition-all duration-300 pointer-events-none ${
                      isFieldActive('password')
                        ? 'text-xs top-0 font-semibold'
                        : 'text-sm top-5'
                    } ${
                      focusedField === 'password'
                        ? 'text-blue-500'
                        : isDarkMode
                          ? 'text-gray-400'
                          : 'text-gray-500'
                    }`}
                  >
                    كلمة المرور
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg text-base font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 mt-4"
              >
                تسجيل الدخول
              </button>
            </form>

            {/* Signup Link */}
            <div className="text-center mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
              <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                ليس لديك حساب؟{' '}
                <button 
                  onClick={handleSignupClick} 
                  className="text-blue-500 font-semibold transition-colors duration-300 hover:text-cyan-400 hover:underline bg-transparent border-none cursor-pointer"
                >
                  انشئ حسابك الآن!
                </button>
              </p>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-4">
              <button 
                onClick={handleBackToHome}
                className={`px-5 py-2 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 border ${
                  isDarkMode 
                    ? 'bg-transparent border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white' 
                    : 'bg-transparent border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
                }`}
              >
                العودة للرئيسية
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signin;