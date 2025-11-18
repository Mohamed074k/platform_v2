// // src/components/AcademicYears.jsx
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTheme } from '../context/ThemeContext';

// const academicYears = [
//   {
//     id: 3,
//     description: 'منهج شامل يغطي أساسيات علم الأحياء مع التركيز على المفاهيم الأساسية والتجارب العملية',
//     image: '/images/academic-year1-pTwQSAhi.jpg',
//     overlapText: '3',
//     cardTitle: 'الصف الثالث الثانوي',
//     cardDescription: 'تعلم المفاهيم الأساسية في علم الأحياء من خلال دروس تفاعلية وتجارب عملية مذهلة',
//   },
//   {
//     id: 2,
//     description: 'تعمق في دراسة الأحياء مع التركيز على الأنظمة البيولوجية والتفاعلات الكيميائية',
//     image: '/images/academic-year2-DmsxfatL.jpg',
//     overlapText: '2',
//     cardTitle: 'الصف الثاني الثانوي',
//     cardDescription: 'اكتشف تعقيدات الأنظمة البيولوجية وكيفية تفاعل الكائنات الحية مع بيئتها',
//   },
//   {
//     id: 1,
//     description: 'تحضير شامل لامتحانات الثانوية العامة مع مراجعة شاملة وتمارين تطبيقية',
//     image: '/images/academic-year3-DhRzdPGv.jpg',
//     overlapText: '1',
//     cardTitle: 'الصف الاول الثانوي',
//     cardDescription: 'استعد لامتحانات الثانوية العامة بثقة من خلال مراجعة شاملة وتمارين تطبيقية متقدمة',
//   },
// ];

// const AcademicYears = () => {
//   const navigate = useNavigate();
//   const { isDarkMode } = useTheme();

//   const handleCardClick = (yearId) => {
//     navigate(`/academic-year/${yearId}`);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <div className={`min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 transition-all duration-300 font-sans w-full ${
//       isDarkMode 
//         ? 'bg-gray-950 text-white' 
//         : 'bg-gray-50 text-gray-950'
//     }`}>
//       <div className="w-full max-w-7xl mx-auto">
//         <div className="flex flex-col items-center justify-center gap-12 sm:gap-16">
          
//           {/* Title Section */}
//           <div className="w-full text-center">
//             <div className="relative flex items-center justify-center mb-8 sm:mb-12 w-full min-h-[100px] sm:min-h-[120px]">
//               <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-500 opacity-10 whitespace-nowrap pointer-events-none select-none z-0 w-full text-center">
//                 السنوات الدراسيه
//               </span>
//               <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-500 leading-tight relative z-10">
//                 السنوات الدراسيه
//               </h2>
//             </div>
//           </div>

//           {/* Cards Grid */}
//           <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
//             {academicYears.map((year) => (
//               <div key={year.id} className="w-full max-w-sm sm:max-w-md flex flex-col gap-4 sm:gap-6">
                
//                 {/* Card */}
//                 <div 
//                   className="w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 relative cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
//                   onClick={() => handleCardClick(year.id)}
//                 >
                  
//                   {/* Overlap Badge */}
//                   <div className="absolute top-[-12px] right-[-12px] w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center z-20 shadow-md transform rotate-15 transition-all duration-300 hover:scale-110">
//                     <span className="text-gray-950 font-extrabold text-xs sm:text-sm text-center transform -rotate-15 leading-none">
//                       {year.overlapText}
//                     </span>
//                   </div>

//                   {/* Image */}
//                   <div className="relative w-full h-full overflow-hidden">
//                     <img 
//                       src={year.image} 
//                       alt={year.cardTitle} 
//                       className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
//                     />
//                   </div>
//                 </div>

//                 {/* Card Info */}
//                 <div className={`text-center px-4 sm:px-6 py-4 sm:py-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 border hover:-translate-y-1 hover:shadow-lg mx-2 ${
//                   isDarkMode 
//                     ? 'bg-gray-900 border-gray-800 text-gray-300' 
//                     : 'bg-white border-gray-200 text-gray-600 !shadow-lg'
//                 }`}
//                   onClick={() => handleCardClick(year.id)}
//                   >
//                   <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-relaxed relative pb-3 sm:pb-4 ${
//                     isDarkMode ? 'text-blue-400' : 'text-blue-500'
//                   }`}>
//                     {year.cardTitle}
//                     <div className="absolute bottom-0 left-1/4 right-1/4 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
//                   </h3>
//                   <p className={`text-sm sm:text-base leading-relaxed opacity-90 ${
//                     isDarkMode ? 'text-gray-300' : 'text-gray-600'
//                   }`}>
//                     {year.cardDescription}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AcademicYears;

// src/components/AcademicYears.jsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const academicYears = [
  {
    id: 3,
    description: 'منهج شامل يغطي أساسيات علم الأحياء مع التركيز على المفاهيم الأساسية والتجارب العملية',
    image: '/images/academic-year1-pTwQSAhi.jpg',
    overlapText: '3',
    cardTitle: 'الصف الثالث الثانوي',
    cardDescription: 'تعلم المفاهيم الأساسية في علم الأحياء من خلال دروس تفاعلية وتجارب عملية مذهلة',
  },
  {
    id: 2,
    description: 'تعمق في دراسة الأحياء مع التركيز على الأنظمة البيولوجية والتفاعلات الكيميائية',
    image: '/images/academic-year2-DmsxfatL.jpg',
    overlapText: '2',
    cardTitle: 'الصف الثاني الثانوي',
    cardDescription: 'اكتشف تعقيدات الأنظمة البيولوجية وكيفية تفاعل الكائنات الحية مع بيئتها',
  },
  {
    id: 1,
    description: 'تحضير شامل لامتحانات الثانوية العامة مع مراجعة شاملة وتمارين تطبيقية',
    image: '/images/academic-year3-DhRzdPGv.jpg',
    overlapText: '1',
    cardTitle: 'الصف الاول الثانوي',
    cardDescription: 'استعد لامتحانات الثانوية العامة بثقة من خلال مراجعة شاملة وتمارين تطبيقية متقدمة',
  },
];

const AcademicYears = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const [titleVisible, setTitleVisible] = useState(false);
  const [cardsVisible, setCardsVisible] = useState([]);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTitleVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    const cardObservers = cardsRef.current.map((card, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setCardsVisible(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        },
        { threshold: 0.2 }
      );

      if (card) {
        observer.observe(card);
      }

      return observer;
    });

    return () => {
      if (titleRef.current) {
        titleObserver.unobserve(titleRef.current);
      }
      cardObservers.forEach((observer, index) => {
        if (cardsRef.current[index]) {
          observer.unobserve(cardsRef.current[index]);
        }
      });
    };
  }, []);

  const handleCardClick = (yearId) => {
    navigate(`/academic-year/${yearId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen font-Cairo flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 transition-all duration-300 font-sans w-full ${
      isDarkMode 
        ? 'bg-gray-950 text-white' 
        : 'bg-gray-50 text-gray-950'
    }`}>
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center gap-12 sm:gap-16">
          
          {/* Title Section */}
          <div 
            ref={titleRef}
            className={`w-full text-center transition-all duration-1000 ${
              titleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-[-50px]'
            }`}
          >
            <div className="relative flex items-center justify-center mb-8 sm:mb-12 w-full min-h-[100px] sm:min-h-[120px]">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-blue-500 opacity-10 whitespace-nowrap pointer-events-none select-none z-0 w-full text-center">
                السنوات الدراسيه
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-500 leading-tight relative z-10">
                السنوات الدراسيه
              </h2>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 justify-items-center">
            {academicYears.map((year, index) => (
              <div 
                key={year.id} 
                ref={el => cardsRef.current[index] = el}
                className={`w-full max-w-sm sm:max-w-md flex flex-col gap-4 sm:gap-6 transition-all duration-1000 ${
                  cardsVisible[index] 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-[50px]'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                
                {/* Card */}
                <div 
                  className="w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 relative cursor-pointer hover:-translate-y-2 hover:shadow-2xl"
                  onClick={() => handleCardClick(year.id)}
                >
                  
                  {/* Overlap Badge */}
                  <div className="absolute top-[-12px] right-[-12px] w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center z-20 shadow-md transform rotate-15 transition-all duration-300 hover:scale-110 hover:rotate-[30deg]">
                    <span className="text-gray-950 font-extrabold text-xs sm:text-sm text-center transform -rotate-15 leading-none">
                      {year.overlapText}
                    </span>
                  </div>

                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img 
                      src={year.image} 
                      alt={year.cardTitle} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>

                {/* Card Info */}
                <div className={`text-center px-4 sm:px-6 py-4 sm:py-6 rounded-xl shadow-md cursor-pointer transition-all duration-300 border hover:-translate-y-1 hover:shadow-lg mx-2 ${
                  isDarkMode 
                    ? 'bg-gray-900 border-gray-800 text-gray-300' 
                    : 'bg-white border-gray-200 text-gray-600 !shadow-lg'
                }`}
                  onClick={() => handleCardClick(year.id)}
                >
                  <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-relaxed relative pb-3 sm:pb-4 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-500'
                  }`}>
                    {year.cardTitle}
                    <div className="absolute bottom-0 left-1/4 right-1/4 w-1/2 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded"></div>
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed opacity-90 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {year.cardDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicYears;