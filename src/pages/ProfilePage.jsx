// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import Footer from '../components/Footer';
import CircularProgress from '../components/CircularProgress';
import { User, Mail, Phone, BookOpen, ClipboardList, FileText } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const mockUser = {
  name: 'محمد السيد',
  email: 'mohamed@gmail.com',
  phone: '123-456-7890',
};

// Mock courses for demonstration
const mockCourses = [
  {
    id: 1,
    name: 'الكورس السنوي - أساسيات الأحياء',
    description: 'منهج شامل يغطي جميع أساسيات علم الأحياء للصف الأول الثانوي مع تدريبات عملية.',
    image: '/images/academic-year1-pTwQSAhi.jpg',
  },
  {
    id: 2,
    name: 'الكورس السنوي - تدريبات متقدمة',
    description: 'تدريبات عملية متقدمة لتعزيز الفهم وتطوير المهارات.',
    image: '/images/academic-year2-DmsxfatL.jpg',
  },
  {
    id: 3,
    name: 'الكورس السنوي - مراجعة نهائية',
    description: 'مراجعة نهائية شاملة لجميع وحدات الأحياء مع اختبارات تفاعلية.',
    image: '/images/academic-year3-DhRzdPGv.jpg',
  },
];

const ProfilePage = () => {
  const { isDarkMode } = useTheme();
  const [activeTab, setActiveTab] = useState('ملف المستخدم');

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }, []);
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`} style={{ direction: 'rtl' }}>
      {/* Top Section with Background */}
      <div 
        className="relative bg-yellow-400 bg-cover bg-center py-28 md:py-32 text-center text-white"
        style={{ backgroundImage: `url('/images/bg-profile-nGhcdco6.png')` }}
       >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 flex flex-col lg:flex-row gap-8 p-6 -mt-20 mx-auto max-w-7xl border rounded-2xl shadow-lg ${
        isDarkMode 
          ? 'bg-gray-900 border-gray-700' 
          : 'bg-white border-gray-200'
      }`}>
        
        {/* Right Sidebar */}
        <div 
          className={`lg:w-1/5 rounded-xl p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100 shadow-lg'}`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="space-y-3">
            {[
              { name: 'ملف المستخدم', icon: User },
              { name: 'كورساتي', icon: BookOpen },
              { name: 'نتائج الامتحانات', icon: ClipboardList },
              { name: 'نتائج الواجب', icon: FileText }
            ].map((tab, index) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`w-full text-right p-4 rounded-lg font-medium transition-all duration-300 border-2 flex items-center justify-end gap-3 ${
                  activeTab === tab.name
                    ? 'bg-blue-500 text-white border-blue-500 font-bold'
                    : `${isDarkMode 
                        ? 'bg-gray-800 text-gray-300 border-gray-600 hover:bg-gray-600' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50 shadow-md'}`
                }`}
                data-aos="fade-up"
                data-aos-delay={300 + (index * 100)}
              >
                {tab.name}
                <tab.icon size={20} />
              </button>
            ))}
          </div>
        </div>

        {/* Left Content */}
        <div className="flex-1">
          {activeTab === 'ملف المستخدم' && (
            <div className="space-y-8">
              {/* User Profile Section */}
              <div className="text-center">
                <div 
                  className="flex items-center justify-center gap-4 mb-6"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <User size={32} className="text-blue-500" />
                  <h3 className="text-2xl font-bold">ملف المستخدم</h3>
                </div>
                
                {/* User Details Card */}
                <div 
                  className={`rounded-xl p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100 shadow-lg'}`}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    <div className="space-y-4 flex-1">
                      <div 
                        className="flex items-center gap-3 text-lg font-medium"
                        data-aos="fade-up"
                        data-aos-delay="500"
                      >
                        <User size={24} className="text-blue-500" />
                        <span>{mockUser.name}</span>
                      </div>
                      <div 
                        className="flex items-center gap-3 text-lg font-medium"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
                        <Mail size={24} className="text-green-500" />
                        <span>{mockUser.email}</span>
                      </div>
                      <div 
                        className="flex items-center gap-3 text-lg font-medium"
                        data-aos="fade-up"
                        data-aos-delay="700"
                      >
                        <Phone size={24} className="text-purple-500" />
                        <span>{mockUser.phone}</span>
                      </div>
                    </div>
                    <div 
                      className="flex-shrink-0"
                      data-aos="zoom-in"
                      data-aos-delay="800"
                    >
                      <img 
                        src="/images/user-placeholder" 
                        alt="profile" 
                        className="w-24 h-24 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Statistics Section */}
              <div className="mt-12">
                <div 
                  className={`h-0.5 bg-gradient-to-l from-transparent via-blue-500 to-transparent mb-8`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                ></div>
                <h3 
                  className="text-2xl font-bold text-center mb-10"
                  data-aos="fade-down"
                  data-aos-delay="500"
                >
                  احصاءيات كورساتك
                </h3>
                <div className="flex flex-col md:flex-row justify-around items-center gap-8 flex-wrap">
                  <div data-aos="flip-left" data-aos-delay="600">
                    <CircularProgress
                      percentage={0}
                      title="عدد الفيديوهات اللي شوفتها"
                      subtitle="0 فيديو من 0"
                      color="#22c55e"
                    />
                  </div>
                  <div data-aos="flip-left" data-aos-delay="700">
                    <CircularProgress
                      percentage={0}
                      title="عدد الاختبارات اللي خلصتها"
                      subtitle="0 امتحان من 0"
                      color="#f97316"
                    />
                  </div>
                  <div data-aos="flip-left" data-aos-delay="800">
                    <CircularProgress
                      percentage={0}
                      title="متوسط النتائج"
                      color="#3b82f6"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'كورساتي' && (
            <div className="mt-8">
              <div 
                className="flex items-center justify-center gap-3 mb-8"
                data-aos="fade-down"
                data-aos-delay="300"
              >
                <BookOpen size={32} className="text-blue-500" />
                <h3 className="text-2xl font-bold text-blue-500">كورساتي</h3>
              </div>
              {mockCourses.length === 0 ? (
                <div 
                  className={`text-center text-xl font-semibold py-12 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  انت لم تشترك في اي كورسات حتي الان
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                  {mockCourses.map((course, index) => (
                    <div 
                      key={course.id} 
                      className={`flex flex-col rounded-xl overflow-hidden shadow-lg border-2 max-w-sm w-full ${
                        isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
                      }`}
                      data-aos="zoom-in"
                      data-aos-delay={400 + (index * 200)}
                    >
                      <img 
                        src={course.image} 
                        alt={course.name} 
                        className="w-full h-48 object-cover"
                      />
                      <div className={`p-4 -mt-4 rounded-t-xl flex flex-col items-center gap-3 text-center ${
                        isDarkMode ? 'bg-gray-800' : 'bg-white shadow-lg'
                      }`}>
                        <h4 className={`text-lg font-bold ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`}>
                          {course.name}
                        </h4>
                        <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {course.description}
                        </p>
                        <button 
                          disabled 
                          className="bg-gray-200 text-gray-500 border-none rounded-full px-5 py-2 text-sm font-semibold cursor-not-allowed opacity-80 mt-2"
                        >
                          انت مشترك في هذا الكورس
                        </button>
                        <button className="bg-blue-500 text-white border-none rounded-full px-5 py-2 text-sm font-semibold cursor-pointer transition-colors duration-200 hover:bg-blue-600 mt-1">
                          الدخول الي الكورس
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Placeholder for other tabs */}
          {activeTab === 'نتائج الامتحانات' && (
            <div 
              className="text-center py-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <ClipboardList size={32} className="text-blue-500" />
                <h3 className="text-2xl font-bold">نتائج الامتحانات</h3>
              </div>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>سيتم عرض نتائج الامتحانات هنا</p>
            </div>
          )}

          {activeTab === 'نتائج الواجب' && (
            <div 
              className="text-center py-12"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <FileText size={32} className="text-blue-500" />
                <h3 className="text-2xl font-bold">نتائج الواجب</h3>
              </div>
              <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>سيتم عرض نتائج الواجب هنا</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;