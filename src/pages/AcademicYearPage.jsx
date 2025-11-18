// // src/pages/AcademicYearPage.jsx
// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useTheme } from '../context/ThemeContext';
// import Footer from '../components/Footer';
// import SuggestedCourses from '../components/SuggestedCourses';
// // import AcademicYearNavbar from '../components/AcademicYearNavbar';

// // Mock user name (replace with backend data later)
// const mockUserName = 'محمد';

// const yearTitles = {
//   1: 'الصف الاول الثانوي',
//   2: 'الصف الثاني الثانوي',
//   3: 'الصف الثالث الثانوي',
// };

// const allAnnualCourses = {
//   1: [
//     {
//       id: 1,
//       name: 'الكورس السنوي - أساسيات الأحياء',
//       description: 'منهج شامل يغطي جميع أساسيات علم الأحياء للصف الأول الثانوي مع تدريبات عملية.',
//       image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
//     },
//     {
//       id: 2,
//       name: 'الكورس السنوي - تدريبات متقدمة',
//       description: 'تدريبات عملية متقدمة لتعزيز الفهم وتطوير المهارات.',
//       image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
//     },
//     {
//       id: 3,
//       name: 'الكورس السنوي - مراجعة نهائية',
//       description: 'مراجعة نهائية شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
//       image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
//     },
//   ],
//   2: [
//     {
//       id: 1,
//       name: 'الكورس السنوي - الأنظمة البيولوجية',
//       description: 'تعمق في دراسة الأنظمة البيولوجية والتفاعلات الكيميائية للصف الثاني الثانوي.',
//       image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
//     },
//     {
//       id: 2,
//       name: 'الكورس السنوي - مراجعة شاملة',
//       description: 'مراجعة شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
//       image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
//     },
//     {
//       id: 3,
//       name: 'الكورس السنوي - تدريبات تطبيقية',
//       description: 'تدريبات تطبيقية متقدمة لتعزيز الفهم.',
//       image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
//     },
//   ],
//   3: [
//     {
//       id: 1,
//       name: 'الكورس السنوي - التحضير للثانوية العامة',
//       description: 'تحضير شامل لامتحانات الثانوية العامة مع مراجعة شاملة وتمارين تطبيقية.',
//       image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
//     },
//     {
//       id: 2,
//       name: 'الكورس السنوي - بنك الأسئلة',
//       description: 'بنك أسئلة شامل لجميع الدروس مع حلول نموذجية.',
//       image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
//     },
//     {
//       id: 3,
//       name: 'الكورس السنوي - مراجعة نهائية',
//       description: 'مراجعة نهائية شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
//       image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
//     },
//   ],
// };

// const allFaslCourses = {
//   1: [
//     { id: 1, name: 'كورس الفصل الأول', description: 'شرح مفصل لجميع دروس الفصل الأول مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 2, name: 'كورس الفصل الثاني', description: 'شرح مفصل لجميع دروس الفصل الثاني مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 3, name: 'كورس الفصل الثالث', description: 'شرح مفصل لجميع دروس الفصل الثالث مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//   ],
//   2: [
//     { id: 1, name: 'كورس الفصل الأول', description: 'شرح مفصل لجميع دروس الفصل الأول مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 2, name: 'كورس الفصل الثاني', description: 'شرح مفصل لجميع دروس الفصل الثاني مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 3, name: 'كورس الفصل الثالث', description: 'شرح مفصل لجميع دروس الفصل الثالث مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//   ],
//   3: [
//     { id: 1, name: 'كورس الفصل الأول', description: 'شرح مفصل لجميع دروس الفصل الأول مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 2, name: 'كورس الفصل الثاني', description: 'شرح مفصل لجميع دروس الفصل الثاني مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 3, name: 'كورس الفصل الثالث', description: 'شرح مفصل لجميع دروس الفصل الثالث مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//   ],
// };

// const allWeeklyLectures = {
//   1: [
//     { id: 1, name: 'المحاضرة الأسبوعية 1', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 2, name: 'المحاضرة الأسبوعية 2', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 3, name: 'المحاضرة الأسبوعية 3', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//   ],
//   2: [
//     { id: 1, name: 'المحاضرة الأسبوعية 1', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 2, name: 'المحاضرة الأسبوعية 2', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 3, name: 'المحاضرة الأسبوعية 3', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//   ],
//   3: [
//     { id: 1, name: 'المحاضرة الأسبوعية 1', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 2, name: 'المحاضرة الأسبوعية 2', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//     { id: 3, name: 'المحاضرة الأسبوعية 3', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
//   ],
// };

// const AcademicYearPage = () => {
//   const { isDarkMode } = useTheme();
//   const { yearId } = useParams();
//   const navigate = useNavigate();
//   const yearTitle = yearTitles[yearId];
//   const annualCourses = allAnnualCourses[yearId];
//   const faslCourses = allFaslCourses[yearId];
//   const weeklyLectures = allWeeklyLectures[yearId];

//   // Toggle state for each section
//   const [showAnnual, setShowAnnual] = useState(true);
//   const [showFasl, setShowFasl] = useState(false);
//   const [showWeekly, setShowWeekly] = useState(false);

//   const handleCourseClick = (courseId) => {
//     navigate(`/course/${courseId}`);
//   };

//   if (!yearTitle) {
//     return (
//       <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
//         {/* <AcademicYearNavbar /> */}
//         <main className="pt-20">
//           <section className="flex flex-col items-center justify-center text-center p-8">
//             <h1>الصف الدراسي غير موجود</h1>
//           </section>
//         </main>
//       </div>
//     );
//   }

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`} style={{ direction: 'rtl' }}>
//       {/* <AcademicYearNavbar /> */}
//       <main className="pt-20">
//         {/* Welcome Section - No shadow, same background as page */}
//    <section className={`flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 w-full min-h-96 ${
//           isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
//         }`}>
//           <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
//             isDarkMode ? 'text-white' : 'text-gray-900'
//           }`}>
//             <span className="relative inline-block">
//               اهلا
//               <span className={`absolute bottom-2 left-4 right-4 h-4 -skew-x-12 transform ${
//                 isDarkMode ? 'bg-blue-500/20' : 'bg-blue-600/20'
//               }`}></span>
//             </span>{' '}
//             {mockUserName}
//           </h1>
//           <h2 className={`text-xl md:text-2xl mb-8 ${
//             isDarkMode ? 'text-gray-300' : 'text-gray-700'
//           }`}>
//             مرحبا بك في منصه د/محمد السيد
//           </h2>
//           <div className="flex flex-col items-center gap-4">
//             <div className={`text-lg ${
//               isDarkMode ? 'text-gray-300' : 'text-gray-700'
//             }`}>
//               للدخول علي اشتراكاتك
//             </div>
//           <button 
//   className="px-12 py-3 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] flex items-center justify-center whitespace-nowrap border-2 border-blue-500 text-blue-500 dark:text-blue-300 dark:border-blue-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-300 dark:hover:text-gray-900"
// >
//   اشتراكاتك
// </button>
//             <div className={`text-lg ${
//               isDarkMode ? 'text-gray-300' : 'text-gray-700'
//             }`}>
//               او تصفح الكورسات للاشتراك بكورس جديد
//             </div>
//           </div>
//         </section>

//         {/* Suggested Courses Section */}
//         {/* <section className="py-12">
//           <SuggestedCourses />
//         </section> */}

//         {/* Academic Year Courses Section */}
//         <section className={`py-12 px-4 md:px-8 ${
//           isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
//         }`}>
//           {/* Main Title */}
//           <div className="relative flex items-center justify-center mb-12 min-h-32">
//             <span className={`absolute text-4xl md:text-5xl lg:text-6xl font-black opacity-10 whitespace-nowrap pointer-events-none select-none ${
//               isDarkMode ? 'text-blue-400' : 'text-blue-500'
//             }`}>
//               {yearTitle}
//             </span>
//             <h2 className={`text-3xl md:text-4xl font-extrabold relative z-10 ${
//               isDarkMode ? 'text-blue-400' : 'text-blue-500'
//             }`}>
//               {yearTitle}
//             </h2>
//           </div>

//           <h3 className="text-2xl font-bold text-center mb-8 text-yellow-500">احدث الكورسات</h3>

//           {/* Annual Courses */}
//           <button 
//             onClick={() => setShowAnnual(v => !v)}
//             className="flex items-center gap-2 text-lg font-bold mb-6 text-blue-500 hover:text-blue-600 transition-colors duration-200"
//           >
//             <span>{showAnnual ? '▼' : '►'}</span> الكورس السنوي
//           </button>
          
//           {showAnnual && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//               {annualCourses && annualCourses.map((course) => (
//                 <div key={course.id} className="w-full max-w-sm flex flex-col gap-6">
//                   <div className="w-full h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
//                     <img 
//                       src={course.image} 
//                       alt={course.name} 
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>
//                   <div className={`text-center p-6 rounded-xl shadow-lg -mt-8 relative z-10 ${
//                     isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
//                   } border`}>
//                     <h4 className={`text-xl font-bold mb-3 ${
//                       isDarkMode ? 'text-blue-400' : 'text-blue-500'
//                     }`}>
//                       {course.name}
//                     </h4>
//                     <p className={`text-sm mb-4 ${
//                       isDarkMode ? 'text-gray-300' : 'text-gray-600'
//                     }`}>
//                       {course.description}
//                     </p>
//                     <div className="flex gap-3 justify-center">
//                       <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:shadow-lg hover:from-cyan-600 hover:to-blue-600">
//                         اشترك الان
//                       </button>
//                       <button 
//                         onClick={() => handleCourseClick(course.id)}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:bg-blue-600"
//                       >
//                         الدخول الي الكورس
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Fasl Courses */}
//           <button 
//             onClick={() => setShowFasl(v => !v)}
//             className="flex items-center gap-2 text-lg font-bold my-8 text-blue-500 hover:text-blue-600 transition-colors duration-200"
//           >
//             <span>{showFasl ? '▼' : '►'}</span> كورسات الفصول
//           </button>
          
//           {showFasl && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//               {faslCourses && faslCourses.map((course) => (
//                 <div key={course.id} className="w-full max-w-sm flex flex-col gap-6">
//                   <div className="w-full h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
//                     <img 
//                       src={course.image} 
//                       alt={course.name} 
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>
//                   <div className={`text-center p-6 rounded-xl shadow-lg -mt-8 relative z-10 ${
//                     isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
//                   } border`}>
//                     <h4 className={`text-xl font-bold mb-3 ${
//                       isDarkMode ? 'text-blue-400' : 'text-blue-500'
//                     }`}>
//                       {course.name}
//                     </h4>
//                     <p className={`text-sm mb-4 ${
//                       isDarkMode ? 'text-gray-300' : 'text-gray-600'
//                     }`}>
//                       {course.description}
//                     </p>
//                     <div className="flex gap-3 justify-center">
//                       <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:shadow-lg hover:from-cyan-600 hover:to-blue-600">
//                         اشترك الان
//                       </button>
//                       <button 
//                         onClick={() => handleCourseClick(course.id)}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:bg-blue-600"
//                       >
//                         الدخول الي الكورس
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Weekly Lectures */}
//           <button 
//             onClick={() => setShowWeekly(v => !v)}
//             className="flex items-center gap-2 text-lg font-bold my-8 text-blue-500 hover:text-blue-600 transition-colors duration-200"
//           >
//             <span>{showWeekly ? '▼' : '►'}</span> المحاضرات الاسبوعيه
//           </button>
          
//           {showWeekly && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
//               {weeklyLectures && weeklyLectures.map((course) => (
//                 <div key={course.id} className="w-full max-w-sm flex flex-col gap-6">
//                   <div className="w-full h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
//                     <img 
//                       src={course.image} 
//                       alt={course.name} 
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>
//                   <div className={`text-center p-6 rounded-xl shadow-lg -mt-8 relative z-10 ${
//                     isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
//                   } border`}>
//                     <h4 className={`text-xl font-bold mb-3 ${
//                       isDarkMode ? 'text-blue-400' : 'text-blue-500'
//                     }`}>
//                       {course.name}
//                     </h4>
//                     <p className={`text-sm mb-4 ${
//                       isDarkMode ? 'text-gray-300' : 'text-gray-600'
//                     }`}>
//                       {course.description}
//                     </p>
//                     <div className="flex gap-3 justify-center">
//                       <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:shadow-lg hover:from-cyan-600 hover:to-blue-600">
//                         اشترك الان
//                       </button>
//                       <button 
//                         onClick={() => handleCourseClick(course.id)}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:bg-blue-600"
//                       >
//                         الدخول الي الكورس
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default AcademicYearPage;

// src/pages/AcademicYearPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import SuggestedCourses from '../components/SuggestedCourses';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import AcademicYearNavbar from '../components/AcademicYearNavbar';

// Mock user name (replace with backend data later)
const mockUserName = 'محمد';

const yearTitles = {
  1: 'الصف الاول الثانوي',
  2: 'الصف الثاني الثانوي',
  3: 'الصف الثالث الثانوي',
};

const allAnnualCourses = {
  1: [
    {
      id: 1,
      name: 'الكورس السنوي - أساسيات الأحياء',
      description: 'منهج شامل يغطي جميع أساسيات علم الأحياء للصف الأول الثانوي مع تدريبات عملية.',
      image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
    },
    {
      id: 2,
      name: 'الكورس السنوي - تدريبات متقدمة',
      description: 'تدريبات عملية متقدمة لتعزيز الفهم وتطوير المهارات.',
      image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
    },
    {
      id: 3,
      name: 'الكورس السنوي - مراجعة نهائية',
      description: 'مراجعة نهائية شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
      image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
    },
  ],
  2: [
    {
      id: 1,
      name: 'الكورس السنوي - الأنظمة البيولوجية',
      description: 'تعمق في دراسة الأنظمة البيولوجية والتفاعلات الكيميائية للصف الثاني الثانوي.',
      image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
    },
    {
      id: 2,
      name: 'الكورس السنوي - مراجعة شاملة',
      description: 'مراجعة شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
      image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
    },
    {
      id: 3,
      name: 'الكورس السنوي - تدريبات تطبيقية',
      description: 'تدريبات تطبيقية متقدمة لتعزيز الفهم.',
      image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
    },
  ],
  3: [
    {
      id: 1,
      name: 'الكورس السنوي - التحضير للثانوية العامة',
      description: 'تحضير شامل لامتحانات الثانوية العامة مع مراجعة شاملة وتمارين تطبيقية.',
      image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
    },
    {
      id: 2,
      name: 'الكورس السنوي - بنك الأسئلة',
      description: 'بنك أسئلة شامل لجميع الدروس مع حلول نموذجية.',
      image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
    },
    {
      id: 3,
      name: 'الكورس السنوي - مراجعة نهائية',
      description: 'مراجعة نهائية شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
      image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg',
    },
  ],
};

const allFaslCourses = {
  1: [
    { id: 1, name: 'كورس الفصل الأول', description: 'شرح مفصل لجميع دروس الفصل الأول مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 2, name: 'كورس الفصل الثاني', description: 'شرح مفصل لجميع دروس الفصل الثاني مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 3, name: 'كورس الفصل الثالث', description: 'شرح مفصل لجميع دروس الفصل الثالث مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
  ],
  2: [
    { id: 1, name: 'كورس الفصل الأول', description: 'شرح مفصل لجميع دروس الفصل الأول مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 2, name: 'كورس الفصل الثاني', description: 'شرح مفصل لجميع دروس الفصل الثاني مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 3, name: 'كورس الفصل الثالث', description: 'شرح مفصل لجميع دروس الفصل الثالث مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
  ],
  3: [
    { id: 1, name: 'كورس الفصل الأول', description: 'شرح مفصل لجميع دروس الفصل الأول مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 2, name: 'كورس الفصل الثاني', description: 'شرح مفصل لجميع دروس الفصل الثاني مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 3, name: 'كورس الفصل الثالث', description: 'شرح مفصل لجميع دروس الفصل الثالث مع تدريبات.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
  ],
};

const allWeeklyLectures = {
  1: [
    { id: 1, name: 'المحاضرة الأسبوعية 1', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 2, name: 'المحاضرة الأسبوعية 2', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 3, name: 'المحاضرة الأسبوعية 3', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
  ],
  2: [
    { id: 1, name: 'المحاضرة الأسبوعية 1', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 2, name: 'المحاضرة الأسبوعية 2', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 3, name: 'المحاضرة الأسبوعية 3', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
  ],
  3: [
    { id: 1, name: 'المحاضرة الأسبوعية 1', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 2, name: 'المحاضرة الأسبوعية 2', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
    { id: 3, name: 'المحاضرة الأسبوعية 3', description: 'محاضرة تفاعلية مع تدريبات عملية.', image: '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg' },
  ],
};

const AcademicYearPage = () => {
  const { isDarkMode } = useTheme();
  const { yearId } = useParams();
  const navigate = useNavigate();
  const yearTitle = yearTitles[yearId];
  const annualCourses = allAnnualCourses[yearId];
  const faslCourses = allFaslCourses[yearId];
  const weeklyLectures = allWeeklyLectures[yearId];

  // Toggle state for each section
  const [showAnnual, setShowAnnual] = useState(true);
  const [showFasl, setShowFasl] = useState(false);
  const [showWeekly, setShowWeekly] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  if (!yearTitle) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        {/* <AcademicYearNavbar /> */}
        <main className="pt-20">
          <section className="flex flex-col items-center justify-center text-center p-8">
            <h1>الصف الدراسي غير موجود</h1>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`} style={{ direction: 'rtl' }}>
      {/* <AcademicYearNavbar /> */}
      <main className="pt-20">
        {/* Welcome Section - No shadow, same background as page */}
        <section 
          className={`flex flex-col items-center justify-center text-center p-8 md:p-12 lg:p-16 w-full min-h-96 ${
            isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
          }`}
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className="relative inline-block">
              اهلا
              <span className={`absolute bottom-2 left-4 right-4 h-4 -skew-x-12 transform ${
                isDarkMode ? 'bg-blue-500/20' : 'bg-blue-600/20'
              }`}></span>
            </span>{' '}
            {mockUserName}
          </h1>
          <h2 
            className={`text-xl md:text-2xl mb-8 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            مرحبا بك في منصه د/محمد أيمن
          </h2>
          <div 
            className="flex flex-col items-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className={`text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              للدخول علي اشتراكاتك
            </div>
            <button 
              className="px-12 py-3 rounded-lg text-lg font-bold transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[44px] flex items-center justify-center whitespace-nowrap border-2 border-blue-500 text-blue-500 dark:text-blue-300 dark:border-blue-300 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-300 dark:hover:text-gray-900"
              // data-aos="zoom-in"
              // data-aos-delay="500"
            >
              اشتراكاتك
            </button>
            <div className={`text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              او تصفح الكورسات للاشتراك بكورس جديد
            </div>
          </div>
        </section>

        {/* Suggested Courses Section */}
        {/* <section className="py-12">
          <SuggestedCourses />
        </section> */}

        {/* Academic Year Courses Section */}
        <section 
          className={`py-12 px-4 md:px-8 ${
            isDarkMode ? 'bg-gray-950' : 'bg-gray-50'
          }`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Main Title */}
          <div 
            className="relative flex items-center justify-center mb-12 min-h-32"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <span className={`absolute text-4xl md:text-5xl lg:text-6xl font-black opacity-10 whitespace-nowrap pointer-events-none select-none ${
              isDarkMode ? 'text-blue-400' : 'text-blue-500'
            }`}>
              {yearTitle}
            </span>
            <h2 className={`text-3xl md:text-4xl font-extrabold relative z-10 ${
              isDarkMode ? 'text-blue-400' : 'text-blue-500'
            }`}>
              {yearTitle}
            </h2>
          </div>

          <h3 
            className="text-2xl font-bold text-center mb-8 text-yellow-500"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            احدث الكورسات
          </h3>

          {/* Annual Courses */}
          <button 
            onClick={() => setShowAnnual(v => !v)}
            className="flex items-center gap-2 text-lg font-bold mb-6 text-blue-500 hover:text-blue-600 transition-colors duration-200"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <span>{showAnnual ? '▼' : '►'}</span> الكورس السنوي
          </button>
          
          {showAnnual && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {annualCourses && annualCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className="w-full max-w-sm flex flex-col gap-6"
                  data-aos="zoom-in"
                  data-aos-delay={500 + (index * 100)}
                >
                  <div className="w-full h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                    <img 
                      src={course.image} 
                      alt={course.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className={`text-center p-6 rounded-xl shadow-lg -mt-8 relative z-10 ${
                    isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                  } border`}>
                    <h4 className={`text-xl font-bold mb-3 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-500'
                    }`}>
                      {course.name}
                    </h4>
                    <p className={`text-sm mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {course.description}
                    </p>
                    <div className="flex gap-3 justify-center">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:shadow-lg hover:from-cyan-600 hover:to-blue-600">
                        اشترك الان
                      </button>
                      <button 
                        onClick={() => handleCourseClick(course.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:bg-blue-600"
                      >
                        الدخول الي الكورس
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Fasl Courses */}
          <button 
            onClick={() => setShowFasl(v => !v)}
            className="flex items-center gap-2 text-lg font-bold my-8 text-blue-500 hover:text-blue-600 transition-colors duration-200"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <span>{showFasl ? '▼' : '►'}</span> كورسات الفصول
          </button>
          
          {showFasl && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {faslCourses && faslCourses.map((course, index) => (
                <div 
                  key={course.id} 
                  className="w-full max-w-sm flex flex-col gap-6"
                  data-aos="zoom-in"
                  data-aos-delay={500 + (index * 100)}
                >
                  <div className="w-full h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                    <img 
                      src={course.image} 
                      alt={course.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className={`text-center p-6 rounded-xl shadow-lg -mt-8 relative z-10 ${
                    isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                  } border`}>
                    <h4 className={`text-xl font-bold mb-3 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-500'
                    }`}>
                      {course.name}
                    </h4>
                    <p className={`text-sm mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {course.description}
                    </p>
                    <div className="flex gap-3 justify-center">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:shadow-lg hover:from-cyan-600 hover:to-blue-600">
                        اشترك الان
                      </button>
                      <button 
                        onClick={() => handleCourseClick(course.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:bg-blue-600"
                      >
                        الدخول الي الكورس
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Weekly Lectures */}
          <button 
            onClick={() => setShowWeekly(v => !v)}
            className="flex items-center gap-2 text-lg font-bold my-8 text-blue-500 hover:text-blue-600 transition-colors duration-200"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <span>{showWeekly ? '▼' : '►'}</span> المحاضرات الاسبوعيه
          </button>
          
          {showWeekly && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {weeklyLectures && weeklyLectures.map((course, index) => (
                <div 
                  key={course.id} 
                  className="w-full max-w-sm flex flex-col gap-6"
                  data-aos="zoom-in"
                  data-aos-delay={500 + (index * 100)}
                >
                  <div className="w-full h-64 rounded-2xl overflow-hidden shadow-xl cursor-pointer">
                    <img 
                      src={course.image} 
                      alt={course.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className={`text-center p-6 rounded-xl shadow-lg -mt-8 relative z-10 ${
                    isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'
                  } border`}>
                    <h4 className={`text-xl font-bold mb-3 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-500'
                    }`}>
                      {course.name}
                    </h4>
                    <p className={`text-sm mb-4 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {course.description}
                    </p>
                    <div className="flex gap-3 justify-center">
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:shadow-lg hover:from-cyan-600 hover:to-blue-600">
                        اشترك الان
                      </button>
                      <button 
                        onClick={() => handleCourseClick(course.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 hover:bg-blue-600"
                      >
                        الدخول الي الكورس
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AcademicYearPage;