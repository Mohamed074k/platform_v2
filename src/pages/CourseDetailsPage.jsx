// import {React, useEffect} from 'react';
// import { useTheme } from '../context/ThemeContext';
// import { useParams } from 'react-router-dom';
// import CourseCard from '../components/CourseCard';
// import CourseContent from '../components/CourseContent';
// import Footer from '../components/Footer';
// import course1Image from '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg';

// const CourseDetailsPage = () => {
//   const { isDarkMode } = useTheme();
//   const { courseId } = useParams();

//     useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [courseId]);


//   // Mock course data based on courseId - in real app this would come from API
//   const courseData = {
//     1: {
//       id: 1,
//       name: "الكورس السنوي - أساسيات الأحياء",
//       description: "منهج شامل يغطي جميع أساسيات علم الأحياء للصف الأول الثانوي مع تدريبات عملية.",
//       stats: {
//         videos: 320,
//         exams: 96,
//         assignments: 45,
//         files: 128
//       },
//       descriptionItems: [
//         "شرح مفصل لجميع الدروس مع أمثلة عملية",
//         "أكثر من 320 فيديو تعليمي عالي الجودة",
//         "96 امتحان تفاعلي مع التصحيح التلقائي",
//         "45 واجب منزلي لتعزيز الفهم",
//         "128 ملف PDF للتحميل والمراجعة",
//         "شهادة إتمام معتمدة",
//         "دعم فني على مدار الساعة",
//         "مجموعة واتساب للطلاب للتفاعل مع المعلم"
//       ]
//     },
//     2: {
//       id: 2,
//       name: "الكورس السنوي - تدريبات متقدمة",
//       description: "تدريبات عملية متقدمة لتعزيز الفهم وتطوير المهارات في علم الأحياء.",
//       stats: {
//         videos: 280,
//         exams: 85,
//         assignments: 38,
//         files: 95
//       },
//       descriptionItems: [
//         "تدريبات متقدمة على جميع الدروس",
//         "280 فيديو تعليمي متخصص",
//         "85 امتحان تفاعلي متقدم",
//         "38 واجب تطبيقي",
//         "95 ملف PDF متخصص",
//         "شهادة إتمام معتمدة",
//         "دعم فني متخصص",
//         "مجموعة دراسية تفاعلية"
//       ]
//     },
//     3: {
//       id: 3,
//       name: "الكورس السنوي - مراجعة نهائية",
//       description: "مراجعة نهائية شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.",
//       stats: {
//         videos: 150,
//         exams: 120,
//         assignments: 25,
//         files: 80
//       },
//       descriptionItems: [
//         "مراجعة شاملة لجميع المنهج",
//         "150 فيديو مراجعة مركزة",
//         "120 امتحان مراجعة نهائية",
//         "25 واجب مراجعة",
//         "80 ملف مراجعة سريعة",
//         "شهادة إتمام معتمدة",
//         "دعم فني مكثف",
//         "مجموعة مراجعة نهائية"
//       ]
//     }
//   };

//   // Get course data based on ID or show not found
//   const course = courseData[courseId];

//   const handleEnroll = () => {
//     // Handle enrollment logic here
//     console.log('Enrolling in course:', courseId);
//     // You can add navigation, API calls, or other logic here
//   };

//   // If course not found
//   if (!course) {
//     return (
//       <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`} style={{ direction: 'rtl' }}>
//         <div className="max-w-6xl mx-auto px-4 py-16 text-center">
//           <h1 className="text-3xl font-bold text-red-500 mb-4">الكورس غير موجود</h1>
//           <p className="text-lg mb-8">عذراً، لم يتم العثور على الكورس المطلوب.</p>
//           <button 
//             onClick={() => window.history.back()}
//             className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
//           >
//             العودة للخلف
//           </button>
//         </div>
//         <Footer />
//       </div>
//     );
//   }

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`} style={{ direction: 'rtl' }}>
//  {/* Header Section with Yellow Background */}
// <div className="relative bg-yellow-500 bg-cover bg-center py-20 md:py-24 px-4">
//   {/* Background Overlay */}
//   <div className="absolute inset-0 bg-black/40"></div>
  
//   {/* Stats Container */}
//   <div className="relative z-10 max-w-6xl mx-auto">
//     <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
//       {/* Videos Stat */}
//       <div className="bg-green-500/95 backdrop-blur-sm rounded-3xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
//         <div className="flex items-center gap-3 justify-center md:justify-start mb-2 md:mb-0">
//           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
//               <polygon points="23,7 16,12 23,17 23,7"></polygon>
//               <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
//             </svg>
//           </div>
//           <div className="text-white font-bold text-xl md:text-2xl">+{course.stats.videos}</div>
//         </div>
//         <div className="hidden md:block w-px h-10 bg-white/30 mx-2"></div>
//         <div className="md:hidden w-full h-px bg-white/30 my-2"></div>
//         <div className="text-white font-semibold text-sm md:text-base text-center md:text-right">فيديوهات</div>
//       </div>

//       {/* Exams Stat */}
//       <div className="bg-orange-500/95 backdrop-blur-sm rounded-3xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
//         <div className="flex items-center gap-3 justify-center md:justify-start mb-2 md:mb-0">
//           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
//               <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//               <polyline points="14,2 14,8 20,8"></polyline>
//               <line x1="16" y1="13" x2="8" y2="13"></line>
//               <line x1="16" y1="17" x2="8" y2="17"></line>
//               <polyline points="10,9 9,9 8,9"></polyline>
//             </svg>
//           </div>
//           <div className="text-white font-bold text-xl md:text-2xl">+{course.stats.exams}</div>
//         </div>
//         <div className="hidden md:block w-px h-10 bg-white/30 mx-2"></div>
//         <div className="md:hidden w-full h-px bg-white/30 my-2"></div>
//         <div className="text-white font-semibold text-sm md:text-base text-center md:text-right">امتحانات</div>
//       </div>

//       {/* Assignments Stat */}
//       <div className="bg-blue-500/95 backdrop-blur-sm rounded-3xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
//         <div className="flex items-center gap-3 justify-center md:justify-start mb-2 md:mb-0">
//           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
//               <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//               <polyline points="14,2 14,8 20,8"></polyline>
//               <line x1="16" y1="13" x2="8" y2="13"></line>
//               <line x1="16" y1="17" x2="8" y2="17"></line>
//               <polyline points="10,9 9,9 8,9"></polyline>
//             </svg>
//           </div>
//           <div className="text-white font-bold text-xl md:text-2xl">+{course.stats.assignments}</div>
//         </div>
//         <div className="hidden md:block w-px h-10 bg-white/30 mx-2"></div>
//         <div className="md:hidden w-full h-px bg-white/30 my-2"></div>
//         <div className="text-white font-semibold text-sm md:text-base text-center md:text-right">واجبات</div>
//       </div>

//       {/* Files Stat */}
//       <div className="bg-purple-500/95 backdrop-blur-sm rounded-3xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
//         <div className="flex items-center gap-3 justify-center md:justify-start mb-2 md:mb-0">
//           <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
//               <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
//               <polyline points="14,2 14,8 20,8"></polyline>
//             </svg>
//           </div>
//           <div className="text-white font-bold text-xl md:text-2xl">+{course.stats.files}</div>
//         </div>
//         <div className="hidden md:block w-px h-10 bg-white/30 mx-2"></div>
//         <div className="md:hidden w-full h-px bg-white/30 my-2"></div>
//         <div className="text-white font-semibold text-sm md:text-base text-center md:text-right">ملفات</div>
//       </div>
//     </div>
//   </div>
// </div>
//       {/* Main Content */}
//       <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
//         <div className={`rounded-2xl ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border shadow-lg p-6 md:p-8`}>
          
//           {/* Course Name */}
//           <h1 className={`text-3xl md:text-4xl font-bold text-center mb-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} relative`}>
//             {course.name}
//             <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
//           </h1>
          
//           {/* Course Description */}
//           <div className="mb-12 text-center">
//             <p className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
//               {course.description}
//             </p>
//           </div>

//           {/* Course Features & Card - UPDATED FOR CENTERING */}
//           <div className="mb-12">
//             {/* Features Title - Centered on all devices */}
//             <h3 className={`text-2xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
//               مميزات الكورس
//             </h3>

//             <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
//               {/* Features Content - Centered and full width on mobile */}
//               <div className="w-full lg:flex-1 flex justify-center">
//                 <div className="w-full max-w-2xl">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
//                     {course.descriptionItems.map((item, index) => (
//                       <div key={index} className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:shadow-lg w-full max-w-xs ${
//                         isDarkMode 
//                           ? 'bg-gray-800 border-gray-700 hover:border-cyan-400' 
//                           : 'bg-gray-50 border-gray-200 hover:border-blue-500'
//                       } border`}>
//                         <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
//                           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="text-white">
//                             <polyline points="20,6 9,17 4,12"></polyline>
//                           </svg>
//                         </div>
//                         <span className={`font-medium text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
//                           {item}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
              
//               {/* Course Card - Centered on all devices */}
//               <div className="w-full flex justify-center lg:w-auto lg:flex-shrink-0">
//                 <div className="w-full max-w-sm lg:w-80">
//                   <CourseCard
//                     courseImage={course1Image}
//                     courseName={course.name}
//                     price="199 ريال"
//                     duration="500 ساعة"
//                     totalQuestions="1500 سؤال"
//                     onEnroll={handleEnroll}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Course Content */}
//           <CourseContent courseId={courseId} />
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CourseDetailsPage;

import {React, useEffect} from 'react';
import { useTheme } from '../context/ThemeContext';
import { useParams } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import CourseContent from '../components/CourseContent';
import Footer from '../components/Footer';
import course1Image from '/images/WhatsApp Image 2025-08-10 at 22.16.51_e151c4a5-PsSJE1zC.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CourseDetailsPage = () => {
  const { isDarkMode } = useTheme();
  const { courseId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, [courseId]);

  // Mock course data based on courseId - in real app this would come from API
  const courseData = {
    1: {
      id: 1,
      name: "الكورس السنوي - أساسيات الأحياء",
      description: "منهج شامل يغطي جميع أساسيات علم الأحياء للصف الأول الثانوي مع تدريبات عملية.",
      stats: {
        videos: 320,
        exams: 96,
        assignments: 45,
        files: 128
      },
      descriptionItems: [
        "شرح مفصل لجميع الدروس مع أمثلة عملية",
        "أكثر من 320 فيديو تعليمي عالي الجودة",
        "96 امتحان تفاعلي مع التصحيح التلقائي",
        "45 واجب منزلي لتعزيز الفهم",
        "128 ملف PDF للتحميل والمراجعة",
        "شهادة إتمام معتمدة",
        "دعم فني على مدار الساعة",
        "مجموعة واتساب للطلاب للتفاعل مع المعلم"
      ]
    },
    2: {
      id: 2,
      name: "الكورس السنوي - تدريبات متقدمة",
      description: "تدريبات عملية متقدمة لتعزيز الفهم وتطوير المهارات في علم الأحياء.",
      stats: {
        videos: 280,
        exams: 85,
        assignments: 38,
        files: 95
      },
      descriptionItems: [
        "تدريبات متقدمة على جميع الدروس",
        "280 فيديو تعليمي متخصص",
        "85 امتحان تفاعلي متقدم",
        "38 واجب تطبيقي",
        "95 ملف PDF متخصص",
        "شهادة إتمام معتمدة",
        "دعم فني متخصص",
        "مجموعة دراسية تفاعلية"
      ]
    },
    3: {
      id: 3,
      name: "الكورس السنوي - مراجعة نهائية",
      description: "مراجعة نهائية شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.",
      stats: {
        videos: 150,
        exams: 120,
        assignments: 25,
        files: 80
      },
      descriptionItems: [
        "مراجعة شاملة لجميع المنهج",
        "150 فيديو مراجعة مركزة",
        "120 امتحان مراجعة نهائية",
        "25 واجب مراجعة",
        "80 ملف مراجعة سريعة",
        "شهادة إتمام معتمدة",
        "دعم فني مكثف",
        "مجموعة مراجعة نهائية"
      ]
    }
  };

  // Get course data based on ID or show not found
  const course = courseData[courseId];

  const handleEnroll = () => {
    // Handle enrollment logic here
    console.log('Enrolling in course:', courseId);
    // You can add navigation, API calls, or other logic here
  };

  // If course not found
  if (!course) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`} style={{ direction: 'rtl' }}>
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">الكورس غير موجود</h1>
          <p className="text-lg mb-8">عذراً، لم يتم العثور على الكورس المطلوب.</p>
          <button 
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            العودة للخلف
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`} style={{ direction: 'rtl' }}>
      {/* Header Section with Yellow Background */}
      <div 
        className="relative bg-yellow-500 bg-cover bg-center py-20 md:py-24 px-4"
        style={{ backgroundImage: `url('/images/bg-profile-nGhcdco6.png')` }}
        >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Stats Container */}
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
           data-aos="zoom-in"
              data-aos-delay="200"
              >
            {/* Videos Stat */}
         <div 
            className="bg-green-500/95 backdrop-blur-sm rounded-3xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
             >
           <div className="flex items-center gap-3 justify-center md:justify-start mb-2 md:mb-0">
    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
   <svg 
  width="20" 
  height="20" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth="2" 
  className="text-white group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
    >
  <polygon points="23,7 16,12 23,17 23,7"></polygon>
  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
  </svg>
    </div>
    <div className="text-white font-bold text-xl md:text-2xl">+{course.stats.videos}</div>
  </div>
  <div className="hidden md:block w-px h-10 bg-white/30 mx-2"></div>
  <div className="md:hidden w-full h-px bg-white/30 my-2"></div>
  <div className="text-white font-semibold text-sm md:text-base text-center md:text-right">فيديوهات</div>
</div>

{/* Exams Stat */}
<div 
  className="bg-orange-500/95 backdrop-blur-sm rounded-3xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
>
  <div className="flex items-center gap-3 justify-center md:justify-start mb-2 md:mb-0">
    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        className="text-white group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14,2 14,8 20,8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10,9 9,9 8,9"></polyline>
      </svg>
    </div>
    <div className="text-white font-bold text-xl md:text-2xl">+{course.stats.exams}</div>
  </div>
  <div className="hidden md:block w-px h-10 bg-white/30 mx-2"></div>
  <div className="md:hidden w-full h-px bg-white/30 my-2"></div>
  <div className="text-white font-semibold text-sm md:text-base text-center md:text-right">امتحانات</div>
</div>

{/* Assignments Stat */}
<div 
  className="bg-blue-500/95 backdrop-blur-sm rounded-3xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
>
  <div className="flex items-center gap-3 justify-center md:justify-start mb-2 md:mb-0">
    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        className="text-white group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14,2 14,8 20,8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10,9 9,9 8,9"></polyline>
      </svg>
    </div>
    <div className="text-white font-bold text-xl md:text-2xl">+{course.stats.assignments}</div>
  </div>
  <div className="hidden md:block w-px h-10 bg-white/30 mx-2"></div>
  <div className="md:hidden w-full h-px bg-white/30 my-2"></div>
  <div className="text-white font-semibold text-sm md:text-base text-center md:text-right">واجبات</div>
</div>

{/* Files Stat */}
<div 
  className="bg-purple-500/95 backdrop-blur-sm rounded-3xl p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
>
  <div className="flex items-center gap-3 justify-center md:justify-start mb-2 md:mb-0">
    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        className="text-white group-hover:rotate-[360deg] transition-transform duration-1000 ease-in-out"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14,2 14,8 20,8"></polyline>
      </svg>
    </div>
    <div className="text-white font-bold text-xl md:text-2xl">+{course.stats.files}</div>
  </div>
  <div className="hidden md:block w-px h-10 bg-white/30 mx-2"></div>
  <div className="md:hidden w-full h-px bg-white/30 my-2"></div>
  <div className="text-white font-semibold text-sm md:text-base text-center md:text-right">ملفات</div>
</div>       
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div 
        className="max-w-6xl mx-auto px-4 py-8 md:py-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className={`rounded-2xl ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border shadow-lg p-6 md:p-8`}>
          
          {/* Course Name */}
          <h1 
            className={`text-3xl md:text-4xl font-bold text-center mb-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} relative`}
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {course.name}
            <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2 w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
          </h1>
          
          {/* Course Description */}
          <div 
            className="mb-12 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <p className={`text-lg md:text-xl leading-relaxed max-w-4xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {course.description}
            </p>
          </div>

          {/* Course Features & Card - UPDATED FOR CENTERING */}
          <div className="mb-12">
            {/* Features Title - Centered on all devices */}
            <h3 
              className={`text-2xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
              data-aos="fade-down"
              data-aos-delay="400"
            >
              مميزات الكورس
            </h3>

            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
              {/* Features Content - Centered and full width on mobile */}
              <div 
                className="w-full lg:flex-1 flex justify-center"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="w-full max-w-2xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
                    {course.descriptionItems.map((item, index) => (
                      <div 
                        key={index} 
                        className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 hover:shadow-lg w-full max-w-xs ${
                          isDarkMode 
                            ? 'bg-gray-800 border-gray-700 hover:border-cyan-400' 
                            : 'bg-gray-50 border-gray-200 hover:border-blue-500'
                        } border`}
                        data-aos="zoom-in"
                        data-aos-delay={600 + (index * 100)}
                      >
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" className="text-white">
                            <polyline points="20,6 9,17 4,12"></polyline>
                          </svg>
                        </div>
                        <span className={`font-medium text-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Course Card - Centered on all devices */}
              <div 
                className="w-full flex justify-center lg:w-auto lg:flex-shrink-0"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="w-full max-w-sm lg:w-80">
                  <CourseCard
                    courseImage={course1Image}
                    courseName={course.name}
                    price="199 ريال"
                    duration="500 ساعة"
                    totalQuestions="1500 سؤال"
                    onEnroll={handleEnroll}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Course Content */}
          <div data-aos="fade-up" data-aos-delay="800">
            <CourseContent courseId={courseId} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetailsPage;