import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const CourseContent = () => {
  const { isDarkMode } = useTheme();
  const [openLecture, setOpenLecture] = useState(null);
  const [openVideo, setOpenVideo] = useState(null);

  const courseContent = [
    {
      id: 1,
      title: "المحاضرة الأولى",
      videos: [
        {
          id: 1,
          title: "استفتاح سنة جديدة مع دفعة العباقرة",
          description: "وصف الفيديو: مقدمة شاملة للكورس وأهدافه",
          duration: "45 دقيقة",
          views: "1,250 مشاهدة",
          watchTime: "38,500 دقيقة"
        },
        {
          id: 2,
          title: "أساسيات علم الأحياء",
          description: "وصف الفيديو: شرح المفاهيم الأساسية في علم الأحياء",
          duration: "60 دقيقة",
          views: "980 مشاهدة",
          watchTime: "52,800 دقيقة"
        },
        {
          id: 3,
          title: "التجارب العملية الأولى",
          description: "وصف الفيديو: تطبيق عملي للمفاهيم النظرية",
          duration: "30 دقيقة",
          views: "750 مشاهدة",
          watchTime: "22,500 دقيقة"
        }
      ]
    },
    {
      id: 2,
      title: "المحاضرة الثانية",
      videos: [
        {
          id: 4,
          title: "الخلية الحية",
          description: "وصف الفيديو: دراسة تفصيلية لبنية الخلية",
          duration: "55 دقيقة",
          views: "890 مشاهدة",
          watchTime: "48,950 دقيقة"
        },
        {
          id: 5,
          title: "الأنسجة الحيوانية",
          description: "وصف الفيديو: أنواع الأنسجة ووظائفها",
          duration: "40 دقيقة",
          views: "720 مشاهدة",
          watchTime: "28,800 دقيقة"
        }
      ]
    },
    {
      id: 3,
      title: "المحاضرة الثالثة",
      videos: [
        {
          id: 6,
          title: "الجهاز الهضمي",
          description: "وصف الفيديو: دراسة شاملة للجهاز الهضمي",
          duration: "70 دقيقة",
          views: "1,100 مشاهدة",
          watchTime: "77,000 دقيقة"
        },
        {
          id: 7,
          title: "الجهاز التنفسي",
          description: "وصف الفيديو: آلية التنفس وتبادل الغازات",
          duration: "50 دقيقة",
          views: "850 مشاهدة",
          watchTime: "42,500 دقيقة"
        }
      ]
    }
  ];

  const toggleLecture = (lectureId) => {
    setOpenLecture(openLecture === lectureId ? null : lectureId);
    setOpenVideo(null);
  };

  const toggleVideo = (videoId) => {
    setOpenVideo(openVideo === videoId ? null : videoId);
  };

  return (
    <div className="mt-12">
      <h3 className={`text-2xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'} relative`}>
        محتوي الكورس
        <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-2 w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
      </h3>
      
      <div className="space-y-4">
        {courseContent.map((lecture) => (
          <div key={lecture.id} className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 border-gray-700 hover:border-cyan-500' 
              : 'bg-white border-gray-200 hover:border-blue-500'
          }`}>
            {/* Lecture Header */}
            <button
              className={`w-full p-4 md:p-6 flex items-center justify-between transition-all duration-300 ${
                openLecture === lecture.id
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                  : isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-600 text-white' 
                    : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
              }`}
              onClick={() => toggleLecture(lecture.id)}
            >
              <div className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14,2 14,8 20,8"></polyline>
                </svg>
                <span className="font-bold text-lg">{lecture.title}</span>
              </div>
              <svg 
                className={`transform transition-transform duration-300 ${
                  openLecture === lecture.id ? 'rotate-180' : ''
                }`}
                width="20" height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            
            {/* Lecture Content */}
            {openLecture === lecture.id && (
              <div className="p-4 space-y-3">
                {lecture.videos.map((video) => (
                  <div key={video.id} className={`rounded-lg overflow-hidden border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 border-gray-600 hover:border-cyan-400' 
                      : 'bg-gray-50 border-gray-200 hover:border-blue-400'
                  }`}>
                    {/* Video Header */}
                    <button
                      className={`w-full p-3 md:p-4 flex items-center justify-between transition-all duration-300 ${
                        openVideo === video.id
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                          : isDarkMode 
                            ? 'bg-gray-700 hover:bg-gray-500 text-white' 
                            : 'bg-white hover:bg-gray-100 text-gray-900'
                      }`}
                      onClick={() => toggleVideo(video.id)}
                    >
                      <div className="flex items-center gap-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="23,7 16,12 23,17 23,7"></polygon>
                          <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                        </svg>
                        <span className="font-medium text-right">{video.title}</span>
                      </div>
                      <svg 
                        className={`transform transition-transform duration-300 ${
                          openVideo === video.id ? 'rotate-180' : ''
                        }`}
                        width="16" height="16" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2"
                      >
                        <polyline points="6,9 12,15 18,9"></polyline>
                      </svg>
                    </button>
                    
                    {/* Video Details */}
                    {openVideo === video.id && (
                      <div className="p-4 space-y-3">
                        <div className={`flex items-center gap-3 p-3 rounded-lg ${
                          isDarkMode ? 'bg-gray-600' : 'bg-white'
                        }`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'}>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14,2 14,8 20,8"></polyline>
                          </svg>
                          <span className="font-semibold min-w-20">الوصف:</span>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{video.description}</span>
                        </div>
                        
                        <div className={`flex items-center gap-3 p-3 rounded-lg ${
                          isDarkMode ? 'bg-gray-600' : 'bg-white'
                        }`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'}>
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                          </svg>
                          <span className="font-semibold min-w-20">مدة الفيديو:</span>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{video.duration}</span>
                        </div>
                        
                        <div className={`flex items-center gap-3 p-3 rounded-lg ${
                          isDarkMode ? 'bg-gray-600' : 'bg-white'
                        }`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'}>
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                          </svg>
                          <span className="font-semibold min-w-20">المشاهدات:</span>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{video.views}</span>
                        </div>
                        
                        <div className={`flex items-center gap-3 p-3 rounded-lg ${
                          isDarkMode ? 'bg-gray-600' : 'bg-white'
                        }`}>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'}>
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                          </svg>
                          <span className="font-semibold min-w-20">وقت المشاهدة:</span>
                          <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{video.watchTime}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseContent;