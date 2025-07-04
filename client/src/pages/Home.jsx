// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import internshipBanner from '../assets/internship-banner.png';


export default function Home() {
  const { auth } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Professional Icons
  const AcademicCap = ({ className = "w-16 h-16" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );

  const Briefcase = ({ className = "w-16 h-16" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  );

  const ChartBar = ({ className = "w-16 h-16" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  );

  const Shield = ({ className = "w-16 h-16" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );

  const Rocket = ({ className = "w-16 h-16" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  );

  const Users = ({ className = "w-16 h-16" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      {/* Hero Section with Image */}
      <section className="relative py-16 md:py-24 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 via-transparent to-emerald-50/50 dark:from-green-900/20 dark:to-emerald-900/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 dark:bg-green-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-emerald-200 dark:bg-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className={`relative max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content - Left Side */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="mb-6 md:mb-8">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-700">
                  ✨ Connecting Future Leaders with Industry Pioneers
                </span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
                  Connect.
                </span>{' '}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 dark:from-emerald-400 dark:via-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Grow.
                </span>{' '}
                <span className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 dark:from-teal-400 dark:via-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
                  Succeed.
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 leading-relaxed font-light">
                Where ambitious talent meets visionary companies. 
                <span className="font-medium text-green-600 dark:text-green-400"> Zidio Connect</span> is the premium platform 
                revolutionizing how students and recruiters discover each other.
              </p>
              
              {/* Statistics - Adjusted for smaller width */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 dark:text-green-400 mb-1">10K+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Active Students</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">500+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Partner Companies</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-teal-600 dark:text-teal-400 mb-1">95%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-1">24/7</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">Support</div>
                </div>
              </div>
              
              {!auth && (
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Link 
                    to="/register" 
                    className="group px-6 py-3 sm:px-8 sm:py-3 rounded-xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-semibold text-sm sm:text-base hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Start Your Journey
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                  <Link 
                    to="/login" 
                    className="px-6 py-3 sm:px-8 sm:py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 font-semibold text-sm sm:text-base hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-green-300 dark:hover:border-green-600 transition-all duration-300"
                  >
                    Sign In
                  </Link>
                </div>
              )}
              
              {auth && (
                <div className="flex justify-center lg:justify-start">
                  <Link 
                    to={
                      auth.role === 'STUDENT' ? "/student/dashboard" :
                      auth.role === 'RECRUITER' ? "/recruiter/dashboard" :
                      "/admin/dashboard"
                    } 
                    className="group px-8 py-3 rounded-xl bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-semibold text-base hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Access Dashboard
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              )}
            </div>
            
            {/* Image Content - Right Side */}
            <div className="lg:w-1/2 flex justify-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-lg">
                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={internshipBanner} 
                    alt="Students and professionals networking" 
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-200 dark:bg-green-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
                <div className="absolute -top-6 -right-6 w-40 h-40 bg-emerald-200 dark:bg-emerald-800 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
                
                {/* Floating Card 1 */}
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-lg mr-2 sm:mr-3">
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">500+ Jobs</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Posted weekly</div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Card 2 */}
                <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center">
                    <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-lg mr-2 sm:mr-3">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">10K+ Members</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">Active community</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 px-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">
              Why Choose <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Zidio Connect</span>?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of talent acquisition with our cutting-edge platform designed for excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="group relative bg-gradient-to-br from-white to-green-50 dark:from-gray-700 dark:to-green-900/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-green-100 dark:border-green-800">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex justify-center mb-6 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300">
                  <AcademicCap />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white text-center">Elite Student Hub</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  Showcase your expertise through dynamic portfolios, connect with industry leaders, 
                  and unlock premium opportunities that align with your career aspirations.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-emerald-50 dark:from-gray-700 dark:to-emerald-900/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-emerald-100 dark:border-emerald-800">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex justify-center mb-6 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white text-center">Recruiter Excellence</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  Access curated talent pools, leverage AI-powered matching algorithms, 
                  and build lasting relationships with tomorrow's industry leaders.
                </p>
              </div>
            </div>
            
            <div className="group relative bg-gradient-to-br from-white to-teal-50 dark:from-gray-700 dark:to-teal-900/20 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border border-teal-100 dark:border-teal-800">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="flex justify-center mb-6 text-teal-600 dark:text-teal-400 group-hover:scale-110 transition-transform duration-300">
                  <ChartBar />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 dark:text-white text-center">Smart Analytics</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                  Harness advanced data insights and machine learning to optimize matching, 
                  track performance, and make data-driven career decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center group">
              <div className="flex justify-center mb-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">Enterprise Security</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Bank-level encryption and privacy protection for all user data and communications.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="flex justify-center mb-4 text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">Career Acceleration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fast-track your professional journey with personalized mentorship and guidance.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="flex justify-center mb-4 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-12 h-12 md:w-16 md:h-16" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-gray-900 dark:text-white">Global Network</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Connect with professionals and opportunities across continents and industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 dark:text-white">Success Stories</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">Hear from our community of achievers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 dark:border-green-800">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg md:text-xl mr-3 md:mr-4 shadow-lg">
                  JD
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">John Doe</h4>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Software Engineer @ Google</p>
                  <div className="flex text-yellow-400 mt-1 text-sm md:text-base">
                    ★★★★★
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-sm md:text-base">
                "Zidio Connect didn't just help me find a job—it connected me with my dream career. 
                The platform's sophisticated matching system is truly revolutionary."
              </blockquote>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100 dark:border-emerald-800">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg md:text-xl mr-3 md:mr-4 shadow-lg">
                  AS
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">Alice Smith</h4>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Head of Talent @ Microsoft</p>
                  <div className="flex text-yellow-400 mt-1 text-sm md:text-base">
                    ★★★★★
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-sm md:text-base">
                "As a seasoned recruiter, I can confidently say Zidio Connect has transformed our hiring process. 
                The quality of candidates is consistently exceptional."
              </blockquote>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-teal-100 dark:border-teal-800">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg md:text-xl mr-3 md:mr-4 shadow-lg">
                  MJ
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">Maria Johnson</h4>
                  <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Data Scientist @ Tesla</p>
                  <div className="flex text-yellow-400 mt-1 text-sm md:text-base">
                    ★★★★★
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300 italic leading-relaxed text-sm md:text-base">
                "The networking opportunities and mentorship programs available through Zidio Connect 
                have been instrumental in accelerating my career growth."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-700 dark:via-emerald-700 dark:to-teal-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-24 h-24 md:w-32 md:h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 md:w-48 md:h-48 bg-white/10 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 leading-tight">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-12 opacity-95 leading-relaxed max-w-4xl mx-auto">
            Join the elite community of forward-thinking professionals who are shaping the future of work. 
            Your next breakthrough opportunity awaits.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Link 
              to={auth ? (
                auth.role === 'STUDENT' ? "/student/dashboard" :
                auth.role === 'RECRUITER' ? "/recruiter/dashboard" :
                "/admin/dashboard"
              ) : "/register"} 
              className="group inline-flex items-center justify-center px-8 py-3 md:px-12 md:py-4 bg-white text-green-600 rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              {auth ? 'Access Dashboard' : 'Start Your Journey'}
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            {!auth && (
              <Link 
                to="/login" 
                className="inline-flex items-center justify-center px-8 py-3 md:px-12 md:py-4 border-2 border-white/30 text-white rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Sign In
              </Link>
            )}
          </div>
          
          <div className="mt-12 md:mt-16 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 opacity-80">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">10,000+</div>
              <div className="text-xs md:text-sm">Success Stories</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">500+</div>
              <div className="text-xs md:text-sm">Partner Companies</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">95%</div>
              <div className="text-xs md:text-sm">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 md:py-16 px-4 bg-gray-900 dark:bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Zidio Connect
              </h3>
              <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed max-w-md">
                Empowering the next generation of professionals through innovative technology 
                and meaningful connections.
              </p>
              <div className="flex space-x-3 md:space-x-4">
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">For Students</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">For Recruiters</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Enterprise</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors text-sm md:text-base">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
            <p>&copy; 2024 Zidio Connect. All rights reserved. Built with ❤️ for the future of work.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}