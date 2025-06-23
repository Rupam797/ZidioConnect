// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, UserIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const { auth, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage or system preference
    return localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-green-100 dark:border-green-900/30 shadow-lg transition-all duration-300">
      {/* Logo */}
      <Link 
        to="/" 
        className="text-2xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 hover:scale-105 transition-transform duration-200"
      >
        Zidio Connect
      </Link>

      {/* Navigation Items */}
      <div className="flex gap-6 items-center">
        {auth ? (
          <>
            <div className="flex items-center gap-4">
              {/* Role Badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700">
                <UserIcon className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="text-sm font-medium text-green-800 dark:text-green-300">
                  {auth.role.charAt(0) + auth.role.slice(1).toLowerCase()}
                </span>
              </div>
              
              {/* Dashboard Link */}
              <Link 
                to={
                  auth.role === 'STUDENT' ? "/student/dashboard" :
                  auth.role === 'RECRUITER' ? "/recruiter/dashboard" :
                  "/admin/dashboard"
                } 
                className="px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 font-medium"
              >
                Dashboard
              </Link>
              
              {/* Logout Button */}
              <button
                onClick={logout}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 font-medium"
              >
                Logout
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3">
            {/* Login Button */}
            <Link 
              to="/login" 
              className="px-6 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 font-medium"
            >
              Login
            </Link>
            
            {/* Register Button */}
            <Link 
              to="/register" 
              className="px-6 py-2 rounded-lg bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105 font-medium"
            >
              Register
            </Link>
          </div>
        )}
        
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-3 rounded-full hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 group"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <SunIcon className="h-5 w-5 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
          ) : (
            <MoonIcon className="h-5 w-5 text-gray-600 group-hover:text-green-600 transition-colors" />
          )}
        </button>
      </div>
    </nav>
  );
}