// // src/components/Join.jsx
// import React from 'react';

// const Join = () => {
//   return (
//     <div className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-16 md:py-20 lg:py-24 transition-all duration-300 font-sans w-full overflow-hidden text-white" style={{ direction: 'rtl' }}>
      
//       {/* Background Image */}
//       <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
//         <img 
//           src="/images/join-bg1.8a81836e76fd6087ff19-BvJ0jFsO.png" 
//           alt="Join Background" 
//           className="w-full h-full object-cover object-center"
//         />
//         <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-gray-950 to-gray-800/95"></div>
//       </div>
      
//       {/* Content */}
//       <div className="relative z-10 w-full max-w-md mx-auto px-6 md:px-8 lg:px-10 text-center">
//         <div className="flex flex-col items-center justify-center gap-8 md:gap-10">
          
//           {/* Buttons */}
//           <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full">
//             {/* Primary Button - Baby Blue Gradient */}
//             <button className="px-12 md:px-16 py-5 md:py-6 rounded-[35px] text-xl md:text-2xl font-bold cursor-pointer transition-all duration-300 relative overflow-hidden shadow-2xl min-w-[280px] bg-gradient-to-br from-sky-300 to-sky-500 via-teal-400 text-gray-900 hover:-translate-y-1 hover:shadow-3xl active:translate-y-0.5">
//               <span className="relative z-10">انضم الينا الان!</span>
//               <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-sky-400 via-teal-300 opacity-0 hover:opacity-100 transition-opacity duration-300 z-0"></div>
//             </button>
            
//             {/* Secondary Button - Indian Red Gradient */}
//             <button className="px-12 md:px-16 py-5 md:py-6 rounded-[35px] text-xl md:text-2xl font-bold cursor-pointer transition-all duration-300 relative overflow-hidden shadow-2xl min-w-[280px] bg-gradient-to-br from-red-400 to-red-600 via-red-500 text-white hover:-translate-y-1 hover:shadow-3xl active:translate-y-0.5">
//               <span className="relative z-10">شراء المذكرات</span>
//               <div className="absolute inset-0 bg-gradient-to-br from-red-300 to-red-500 via-red-400 opacity-0 hover:opacity-100 transition-opacity duration-300 z-0"></div>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Join;


import React, { useState, useEffect, useRef } from 'react';

const Join = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Parallax mouse effect
  const handleMouseMove = (e) => {
    if (contentRef.current) {
      const rect = contentRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x, y });
    }
  };

  return (
    <div 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center py-16 md:py-20 lg:py-24 transition-all duration-300 font-sans w-full overflow-hidden text-white" 
      style={{ direction: 'rtl' }}
    >
      
      {/* Background Image with Parallax */}
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-0">
        <img 
          src="/images/join-bg1.8a81836e76fd6087ff19-BvJ0jFsO.png" 
          alt="Join Background" 
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
          style={{
            transform: `scale(${1 + Math.abs(mousePosition.y) * 0.02}) translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
          }}
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-gray-950 to-gray-800/95 transition-opacity duration-500"></div>
      </div>

      {/* Animated Overlay Particles */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-64 h-64 bg-gradient-radial from-sky-400/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 25}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div 
        ref={contentRef}
        className="relative z-10 w-full max-w-md mx-auto px-6 md:px-8 lg:px-10 text-center"
        style={{
          transform: `translateY(${mousePosition.y * -5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      >
        <div className="flex flex-col items-center justify-center gap-8 md:gap-10">
          
          {/* Buttons */}
          <div className="flex flex-col justify-center items-center gap-6 md:gap-8 w-full">
            {/* Primary Button - Baby Blue Gradient */}
            <button 
              className={`px-12 md:px-16 py-5 md:py-6 rounded-[35px] text-xl md:text-2xl font-bold cursor-pointer relative overflow-hidden shadow-2xl min-w-[280px] bg-gradient-to-br from-sky-300 to-sky-500 via-teal-400 text-gray-900 group transition-all duration-500 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: '200ms'
              }}
            >
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-105">
                انضم الينا الان!
              </span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-sky-400 via-teal-300 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" />
              
              {/* Ripple Effect on Hover */}
              <div className="absolute inset-0 rounded-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-[35px] animate-ping-slow bg-sky-300/30" />
              </div>
              
              {/* Button Scale and Shadow on Hover */}
           
            </button>
            
            {/* Secondary Button - Indian Red Gradient */}
            <button 
              className={`px-12 md:px-16 py-5 md:py-6 rounded-[35px] text-xl md:text-2xl font-bold cursor-pointer relative overflow-hidden shadow-2xl min-w-[280px] bg-gradient-to-br from-red-400 to-red-600 via-red-500 text-white group transition-all duration-500 transform ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: '400ms'
              }}
            >
              <span className="relative z-10 inline-block transition-transform duration-300 group-hover:scale-105">
                شراء المذكرات
              </span>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-300 to-red-500 via-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300 z-0" />
              
              {/* Ripple Effect on Hover */}
              <div className="absolute inset-0 rounded-[35px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 rounded-[35px] animate-ping-slow bg-red-400/30" />
              </div>
              
              {/* Button Scale and Shadow on Hover */}
           
            </button>
          </div>
        </div>
      </div>

      {/* Global Animations */}
    
    </div>
  );
};

export default Join;