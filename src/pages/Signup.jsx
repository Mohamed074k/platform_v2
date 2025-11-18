// // src/pages/Signup.jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTheme } from '../context/ThemeContext';
// import Footer from '../components/Footer';

// const Signup = () => {
//   const { isDarkMode } = useTheme();
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phoneNumber: '',
//     fatherPhoneNumber: '',
//     gender: '',
//     government: '',
//     academicYear: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const governments = [
//     'القاهرة',
//     'الجيزة',
//     'الإسكندرية',
//     'الشرقية',
//     'الغربية',
//     'المنوفية',
//     'القليوبية',
//     'البحيرة',
//     'كفر الشيخ',
//     'الدمياط',
//     'الدقهلية',
//     'الشرقية',
//     'بورسعيد',
//     'الإسماعيلية',
//     'السويس',
//     'بني سويف',
//     'الفيوم',
//     'المنيا',
//     'أسيوط',
//     'سوهاج',
//     'قنا',
//     'الأقصر',
//     'أسوان',
//     'البحر الأحمر',
//     'الوادي الجديد',
//     'مطروح',
//     'شمال سيناء',
//     'جنوب سيناء'
//   ];

//   const academicYears = [
//     'الصف الأول الثانوي',
//     'الصف الثاني الثانوي',
//     'الصف الثالث الثانوي'
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//        useEffect(() => {
//         window.scrollTo(0, 0);
//       }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   const handleLoginClick = () => {
//     navigate('/signin');
//   };

//   // Define image source once for reusability
//   const signupImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";

//   return (
//     <div className={`min-h-screen w-full flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} ${isDarkMode ? 'text-white' : 'text-gray-900'}`} style={{ direction: 'rtl' }}>
//       {/* Main Container - Full Width & Height */}
//       <div className="flex-1 flex overflow-hidden">
        
//         {/* Desktop: Left Side - Image (30%) */}
//         <div className="hidden md:block w-3/10 bg-black relative">
//           <img 
//             src={signupImage} 
//             alt="Sign Up Illustration"
//             className="absolute inset-0 w-full h-full object-cover"
//           />
//         </div>
        
//         {/* Right Side - Form (70% on desktop, 100% on mobile) */}
//         <div className={`w-full md:w-7/10 ${isDarkMode ? 'bg-gray-950' : 'bg-white'} flex flex-col`}>
          
//           {/* Mobile/Tablet: Image at Top */}
//           <div className="md:hidden relative h-40"> {/* Reduced height for mobile */}
//             <img 
//               src={signupImage} 
//               alt="Sign Up Illustration"
//               className="absolute inset-0 w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//               <h2 className="text-xl font-bold text-white text-center px-6">
//                 أنشئ حسابك الآن!
//               </h2>
//             </div>
//           </div>

//           {/* Form Content - No Scroll */}
//           <div className="flex-1 p-6 md:p-8 lg:p-10">
//             {/* Title */}
//             <h1 className="text-2xl md:text-3xl font-bold text-blue-500 text-center mb-6 md:mb-8 relative pb-3">
//               انشئ حسابك الان
//               <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
//             </h1>
            
//             {/* Form */}
//             <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto w-full">
              
//               {/* Name Fields - Row */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 <div>
//                   <label htmlFor="firstName" className="block text-xs md:text-sm font-semibold mb-1 text-right">
//                     الاسم الأول
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="أدخل اسمك الأول"
//                     className={`w-full px-3 py-2 border-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                       isDarkMode 
//                         ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400' 
//                         : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
//                     }`}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="lastName" className="block text-xs md:text-sm font-semibold mb-1 text-right">
//                     اسم العائلة
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="أدخل اسم العائلة"
//                     className={`w-full px-3 py-2 border-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                       isDarkMode 
//                         ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400' 
//                         : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
//                     }`}
//                   />
//                 </div>
//               </div>

//               {/* Phone Fields - Row */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 <div>
//                   <label htmlFor="phoneNumber" className="block text-xs md:text-sm font-semibold mb-1 text-right">
//                     رقم الهاتف
//                   </label>
//                   <input
//                     type="tel"
//                     id="phoneNumber"
//                     name="phoneNumber"
//                     value={formData.phoneNumber}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="أدخل رقم هاتفك"
//                     className={`w-full px-3 py-2 border-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                       isDarkMode 
//                         ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400' 
//                         : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
//                     }`}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="fatherPhoneNumber" className="block text-xs md:text-sm font-semibold mb-1 text-right">
//                     رقم هاتف الأب
//                   </label>
//                   <input
//                     type="tel"
//                     id="fatherPhoneNumber"
//                     name="fatherPhoneNumber"
//                     value={formData.fatherPhoneNumber}
//                     onChange={handleInputChange}
//                     required
//                     placeholder="أدخل رقم هاتف الأب"
//                     className={`w-full px-3 py-2 border-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                       isDarkMode 
//                         ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400' 
//                         : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
//                     }`}
//                   />
//                 </div>
//               </div>

//               {/* Gender Dropdown */}
//               <div>
//                 <label htmlFor="gender" className="block text-xs md:text-sm font-semibold mb-1 text-right">
//                   الجنس
//                 </label>
//                 <select
//                   id="gender"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleInputChange}
//                   required
//                   className={`w-full px-3 py-2 border-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
//                     isDarkMode 
//                       ? 'bg-gray-900 border-gray-600 text-white' 
//                       : 'bg-white border-gray-300 text-gray-900'
//                   }`}
//                 >
//                   <option value="">اختر الجنس</option>
//                   <option value="male">ذكر</option>
//                   <option value="female">أنثى</option>
//                 </select>
//               </div>

//               {/* Government Dropdown */}
//               <div>
//                 <label htmlFor="government" className="block text-xs md:text-sm font-semibold mb-1 text-right">
//                   المحافظة
//                 </label>
//                 <select
//                   id="government"
//                   name="government"
//                   value={formData.government}
//                   onChange={handleInputChange}
//                   required
//                   className={`w-full px-3 py-2 border-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
//                     isDarkMode 
//                       ? 'bg-gray-900 border-gray-600 text-white' 
//                       : 'bg-white border-gray-300 text-gray-900'
//                   }`}
//                 >
//                   <option value="">اختر المحافظة</option>
//                   {governments.map((gov, index) => (
//                     <option key={index} value={gov}>{gov}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Academic Year Dropdown */}
//               <div>
//                 <label htmlFor="academicYear" className="block text-xs md:text-sm font-semibold mb-1 text-right">
//                   السنة الدراسية
//                 </label>
//                 <select
//                   id="academicYear"
//                   name="academicYear"
//                   value={formData.academicYear}
//                   onChange={handleInputChange}
//                   required
//                   className={`w-full px-3 py-2 border-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer ${
//                     isDarkMode 
//                       ? 'bg-gray-900 border-gray-600 text-white' 
//                       : 'bg-white border-gray-300 text-gray-900'
//                   }`}
//                 >
//                   <option value="">اختر السنة الدراسية</option>
//                   {academicYears.map((year, index) => (
//                     <option key={index} value={year}>{year}</option>
//                   ))}
//                 </select>
//               </div>

//               {/* Email Field */}
//               <div>
//                 <label htmlFor="email" className="block text-xs md:text-sm font-semibold mb-1 text-right">
//                   البريد الإلكتروني
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="أدخل بريدك الإلكتروني"
//                   className={`w-full px-3 py-2 border-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                     isDarkMode 
//                       ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400' 
//                       : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
//                   }`}
//                 />
//               </div>

//               {/* Password Fields */}
//               <div>
//                 <label htmlFor="password" className="block text-xs md:text-sm font-semibold mb-1 text-right">
//                   كلمة المرور
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="أدخل كلمة المرور"
//                   className={`w-full px-3 py-2 border-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                     isDarkMode 
//                       ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400' 
//                       : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
//                   }`}
//                 />
//               </div>

//               <div>
//                 <label htmlFor="confirmPassword" className="block text-xs md:text-sm font-semibold mb-1 text-right">
//                   تأكيد كلمة المرور
//                 </label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   required
//                   placeholder="أعد إدخال كلمة المرور"
//                   className={`w-full px-3 py-2 border-2 rounded-lg text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
//                     isDarkMode 
//                       ? 'bg-gray-900 border-gray-600 text-white placeholder-gray-400' 
//                       : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
//                   }`}
//                 />
//               </div>

//               {/* Submit Button */}
//               <button 
//                 type="submit" 
//                 className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg text-base font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 mt-4"
//               >
//                 انشء حسابك
//               </button>
//             </form>

//             {/* Login Link */}
//             <div className="text-center mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
//               <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
//                 هل يوجد لديك حساب بالفعل؟{' '}
//                 <button 
//                   onClick={handleLoginClick} 
//                   className="text-blue-500 font-semibold transition-colors duration-300 hover:text-cyan-400 hover:underline bg-transparent border-none cursor-pointer"
//                 >
//                   ادخل الي حسابك الان!
//                 </button>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
// <Footer />
//     </div>
//   );
// };

// export default Signup;


// src/pages/Signup.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { User, Phone, Lock, Mail, MapPin, Book, Users } from 'lucide-react';
import Footer from '../components/Footer';

const Signup = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    fatherPhoneNumber: '',
    gender: '',
    government: '',
    academicYear: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [focusedField, setFocusedField] = useState('');
  const [shineField, setShineField] = useState('');

  const governments = [
    'القاهرة',
    'الجيزة',
    'الإسكندرية',
    'الشرقية',
    'الغربية',
    'المنوفية',
    'القليوبية',
    'البحيرة',
    'كفر الشيخ',
    'الدمياط',
    'الدقهلية',
    'الشرقية',
    'بورسعيد',
    'الإسماعيلية',
    'السويس',
    'بني سويف',
    'الفيوم',
    'المنيا',
    'أسيوط',
    'سوهاج',
    'قنا',
    'الأقصر',
    'أسوان',
    'البحر الأحمر',
    'الوادي الجديد',
    'مطروح',
    'شمال سيناء',
    'جنوب سيناء'
  ];

  const academicYears = [
    'الصف الأول الثانوي',
    'الصف الثاني الثانوي',
    'الصف الثالث الثانوي'
  ];

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
    setTimeout(() => {
      setShineField('');
    }, 1500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleLoginClick = () => {
    navigate('/signin');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  const isFieldActive = (fieldName) => {
    return focusedField === fieldName || formData[fieldName];
  };

  const signupImage = "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80";

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
            src={signupImage} 
            alt="Sign Up Illustration"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        {/* Right Side - Form (70% on desktop, 100% on mobile) */}
        <div className={`w-full md:w-7/10 ${isDarkMode ? 'bg-gray-950' : 'bg-white'} flex flex-col`}>
          
          {/* Mobile/Tablet: Image at Top */}
          <div className="md:hidden relative h-40">
            <img 
              src={signupImage} 
              alt="Sign Up Illustration"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-xl font-bold text-white text-center px-6">
                أنشئ حسابك الآن!
              </h2>
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1 p-6 md:p-8 lg:p-10">
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-blue-500 text-center mb-6 md:mb-8 relative pb-3">
              انشئ حسابك الان
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
            </h1>
            
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto w-full">
              
              {/* Name Fields - Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name Field */}
                <div className="relative pt-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('firstName')}
                      onBlur={() => setFocusedField('')}
                      required
                      dir="rtl"
                      className={`w-full px-3 pr-10 pt-4 pb-2 border-0 border-b-2 rounded-t-lg text-sm transition-all duration-300 focus:outline-none bg-transparent relative text-right ${
                        focusedField === 'firstName' 
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
                    <User 
                      size={14} 
                      className={`absolute right-6 transition-all duration-300 pointer-events-none ${
                        isFieldActive('firstName')
                          ? 'top-1'
                          : 'top-6'
                      } ${
                        focusedField === 'firstName'
                          ? 'text-blue-500'
                          : isDarkMode
                            ? 'text-gray-400'
                            : 'text-gray-500'
                      }`}
                    />
                    <label 
                      htmlFor="firstName" 
                      className={`absolute right-10 transition-all duration-300 pointer-events-none ${
                        isFieldActive('firstName')
                          ? 'text-xs top-0 font-semibold'
                          : 'text-sm top-5'
                      } ${
                        focusedField === 'firstName'
                          ? 'text-blue-500'
                          : isDarkMode
                            ? 'text-gray-400'
                            : 'text-gray-500'
                      }`}
                    >
                      الاسم الأول
                    </label>
                  </div>
                </div>

                {/* Last Name Field */}
                <div className="relative pt-4">
                  <div className="relative">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('lastName')}
                      onBlur={() => setFocusedField('')}
                      required
                      dir="rtl"
                      className={`w-full px-3 pr-10 pt-4 pb-2 border-0 border-b-2 rounded-t-lg text-sm transition-all duration-300 focus:outline-none bg-transparent relative text-right ${
                        focusedField === 'lastName' 
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
                    <Users 
                      size={14} 
                      className={`absolute right-6 transition-all duration-300 pointer-events-none ${
                        isFieldActive('lastName')
                          ? 'top-1'
                          : 'top-6'
                      } ${
                        focusedField === 'lastName'
                          ? 'text-blue-500'
                          : isDarkMode
                            ? 'text-gray-400'
                            : 'text-gray-500'
                      }`}
                    />
                    <label 
                      htmlFor="lastName" 
                      className={`absolute right-10 transition-all duration-300 pointer-events-none ${
                        isFieldActive('lastName')
                          ? 'text-xs top-0 font-semibold'
                          : 'text-sm top-5'
                      } ${
                        focusedField === 'lastName'
                          ? 'text-blue-500'
                          : isDarkMode
                            ? 'text-gray-400'
                            : 'text-gray-500'
                      }`}
                    >
                      اسم العائلة
                    </label>
                  </div>
                </div>
              </div>

              {/* Phone Fields - Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Phone Number Field */}
                <div className="relative pt-4">
                  <div className="relative">
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

                {/* Father Phone Number Field */}
                <div className="relative pt-4">
                  <div className="relative">
                    <input
                      type="tel"
                      id="fatherPhoneNumber"
                      name="fatherPhoneNumber"
                      value={formData.fatherPhoneNumber}
                      onChange={handleInputChange}
                      onFocus={() => handleFocus('fatherPhoneNumber')}
                      onBlur={() => setFocusedField('')}
                      required
                      dir="rtl"
                      className={`w-full px-3 pr-10 pt-4 pb-2 border-0 border-b-2 rounded-t-lg text-sm transition-all duration-300 focus:outline-none bg-transparent relative text-right ${
                        focusedField === 'fatherPhoneNumber' 
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
                        isFieldActive('fatherPhoneNumber')
                          ? 'top-1'
                          : 'top-6'
                      } ${
                        focusedField === 'fatherPhoneNumber'
                          ? 'text-blue-500'
                          : isDarkMode
                            ? 'text-gray-400'
                            : 'text-gray-500'
                      }`}
                    />
                    <label 
                      htmlFor="fatherPhoneNumber" 
                      className={`absolute right-10 transition-all duration-300 pointer-events-none ${
                        isFieldActive('fatherPhoneNumber')
                          ? 'text-xs top-0 font-semibold'
                          : 'text-sm top-5'
                      } ${
                        focusedField === 'fatherPhoneNumber'
                          ? 'text-blue-500'
                          : isDarkMode
                            ? 'text-gray-400'
                            : 'text-gray-500'
                      }`}
                    >
                      رقم هاتف الأب
                    </label>
                  </div>
                </div>
              </div>

              {/* Gender Dropdown */}
      <div className="relative pt-4">
  <div className="relative">
    <select
      id="gender"
      name="gender"
      value={formData.gender}
      onChange={handleInputChange}
      onFocus={() => handleFocus('gender')}
      onBlur={() => setFocusedField('')}
      required
      className={`w-full px-3 pr-10 pt-4 pb-2 border-0 border-b-2 rounded-t-lg text-sm transition-all duration-300 focus:outline-none bg-transparent relative text-right cursor-pointer appearance-none ${
        focusedField === 'gender' 
          ? 'border-blue-500' 
          : isDarkMode 
            ? 'border-gray-600' 
            : 'border-gray-300'
      } ${
        isDarkMode 
          ? 'text-white dark-select' 
          : 'text-gray-900'
      }`}
    >
      <option value=""></option>
      <option value="male">ذكر</option>
      <option value="female">أنثى</option>
    </select>
    <User 
      size={14} 
      className={`absolute right-6 transition-all duration-300 pointer-events-none ${
        isFieldActive('gender')
          ? 'top-1'
          : 'top-6'
      } ${
        focusedField === 'gender'
          ? 'text-blue-500'
          : isDarkMode
            ? 'text-gray-400'
            : 'text-gray-500'
      }`}
    />
    <label 
      htmlFor="gender" 
      className={`absolute right-10 transition-all duration-300 pointer-events-none ${
        isFieldActive('gender')
          ? 'text-xs top-0 font-semibold'
          : 'text-sm top-5'
      } ${
        focusedField === 'gender'
          ? 'text-blue-500'
          : isDarkMode
            ? 'text-gray-400'
            : 'text-gray-500'
      }`}
    >
      الجنس
    </label>
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
      </div>

              {/* Government Dropdown */}
          <div className="relative pt-4">
  <div className="relative">
    <select
      id="government"
      name="government"
      value={formData.government}
      onChange={handleInputChange}
      onFocus={() => handleFocus('government')}
      onBlur={() => setFocusedField('')}
      required
      className={`w-full px-3 pr-10 pt-4 pb-2 border-0 border-b-2 rounded-t-lg text-sm transition-all duration-300 focus:outline-none bg-transparent relative text-right cursor-pointer appearance-none ${
        focusedField === 'government' 
          ? 'border-blue-500' 
          : isDarkMode 
            ? 'border-gray-600' 
            : 'border-gray-300'
      } ${
        isDarkMode 
          ? 'text-white dark-select' 
          : 'text-gray-900'
      }`}
    >
      <option value=""></option>
      {governments.map((gov, index) => (
        <option key={index} value={gov}>{gov}</option>
      ))}
    </select>
    <MapPin 
      size={14} 
      className={`absolute right-6 transition-all duration-300 pointer-events-none ${
        isFieldActive('government')
          ? 'top-1'
          : 'top-6'
      } ${
        focusedField === 'government'
          ? 'text-blue-500'
          : isDarkMode
            ? 'text-gray-400'
            : 'text-gray-500'
      }`}
    />
    <label 
      htmlFor="government" 
      className={`absolute right-10 transition-all duration-300 pointer-events-none ${
        isFieldActive('government')
          ? 'text-xs top-0 font-semibold'
          : 'text-sm top-5'
      } ${
        focusedField === 'government'
          ? 'text-blue-500'
          : isDarkMode
            ? 'text-gray-400'
            : 'text-gray-500'
      }`}
    >
      المحافظة
    </label>
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
          </div>

              {/* Academic Year Dropdown */}
          <div className="relative pt-4">
  <div className="relative">
    <select
      id="academicYear"
      name="academicYear"
      value={formData.academicYear}
      onChange={handleInputChange}
      onFocus={() => handleFocus('academicYear')}
      onBlur={() => setFocusedField('')}
      required
      className={`w-full px-3 pr-10 pt-4 pb-2 border-0 border-b-2 rounded-t-lg text-sm transition-all duration-300 focus:outline-none bg-transparent relative text-right cursor-pointer appearance-none ${
        focusedField === 'academicYear' 
          ? 'border-blue-500' 
          : isDarkMode 
            ? 'border-gray-600' 
            : 'border-gray-300'
      } ${
        isDarkMode 
          ? 'text-white dark-select' 
          : 'text-gray-900'
      }`}
    >
      <option value=""></option>
      {academicYears.map((year, index) => (
        <option key={index} value={year}>{year}</option>
      ))}
    </select>
    <Book 
      size={14} 
      className={`absolute right-6 transition-all duration-300 pointer-events-none ${
        isFieldActive('academicYear')
          ? 'top-1'
          : 'top-6'
      } ${
        focusedField === 'academicYear'
          ? 'text-blue-500'
          : isDarkMode
            ? 'text-gray-400'
            : 'text-gray-500'
      }`}
    />
    <label 
      htmlFor="academicYear" 
      className={`absolute right-10 transition-all duration-300 pointer-events-none ${
        isFieldActive('academicYear')
          ? 'text-xs top-0 font-semibold'
          : 'text-sm top-5'
      } ${
        focusedField === 'academicYear'
          ? 'text-blue-500'
          : isDarkMode
            ? 'text-gray-400'
            : 'text-gray-500'
      }`}
    >
      السنة الدراسية
    </label>
    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
          </div>

              {/* Email Field */}
              <div className="relative pt-4">
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={() => setFocusedField('')}
                    required
                    dir="rtl"
                    className={`w-full px-3 pr-10 pt-4 pb-2 border-0 border-b-2 rounded-t-lg text-sm transition-all duration-300 focus:outline-none bg-transparent relative text-right ${
                      focusedField === 'email' 
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
                  <Mail 
                    size={14} 
                    className={`absolute right-6 transition-all duration-300 pointer-events-none ${
                      isFieldActive('email')
                        ? 'top-1'
                        : 'top-6'
                    } ${
                      focusedField === 'email'
                        ? 'text-blue-500'
                        : isDarkMode
                          ? 'text-gray-400'
                          : 'text-gray-500'
                    }`}
                  />
                  <label 
                    htmlFor="email" 
                    className={`absolute right-10 transition-all duration-300 pointer-events-none ${
                      isFieldActive('email')
                        ? 'text-xs top-0 font-semibold'
                        : 'text-sm top-5'
                    } ${
                      focusedField === 'email'
                        ? 'text-blue-500'
                        : isDarkMode
                          ? 'text-gray-400'
                          : 'text-gray-500'
                    }`}
                  >
                    البريد الإلكتروني
                  </label>
                </div>
              </div>

              {/* Password Field */}
              <div className="relative pt-4">
                <div className="relative">
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
                        ? 'top-1'
                        : 'top-6'
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

              {/* Confirm Password Field */}
              <div className="relative pt-4">
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    onFocus={() => handleFocus('confirmPassword')}
                    onBlur={() => setFocusedField('')}
                    required
                    dir="rtl"
                    className={`w-full px-3 pr-10 pt-4 pb-2 border-0 border-b-2 rounded-t-lg text-sm transition-all duration-300 focus:outline-none bg-transparent relative text-right ${
                      focusedField === 'confirmPassword' 
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
                      isFieldActive('confirmPassword')
                        ? 'top-1'
                        : 'top-6'
                    } ${
                      focusedField === 'confirmPassword'
                        ? 'text-blue-500'
                        : isDarkMode
                          ? 'text-gray-400'
                          : 'text-gray-500'
                    }`}
                  />
                  <label 
                    htmlFor="confirmPassword" 
                    className={`absolute right-10 transition-all duration-300 pointer-events-none ${
                      isFieldActive('confirmPassword')
                        ? 'text-xs top-0 font-semibold'
                        : 'text-sm top-5'
                    } ${
                      focusedField === 'confirmPassword'
                        ? 'text-blue-500'
                        : isDarkMode
                          ? 'text-gray-400'
                          : 'text-gray-500'
                    }`}
                  >
                    تأكيد كلمة المرور
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 px-6 rounded-lg text-base font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 mt-4"
              >
                انشء حسابك
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
              <p className={`text-xs md:text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                هل يوجد لديك حساب بالفعل؟{' '}
                <button 
                  onClick={handleLoginClick} 
                  className="text-blue-500 font-semibold transition-colors duration-300 hover:text-cyan-400 hover:underline bg-transparent border-none cursor-pointer"
                >
                  ادخل الي حسابك الان!
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

export default Signup;