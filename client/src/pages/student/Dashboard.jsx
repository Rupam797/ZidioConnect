import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 dark:from-green-400 dark:via-emerald-400 dark:to-teal-400 mb-4">
          🎓 Student Dashboard
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Welcome back! Manage your academic and career journey with ease.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Profile */}
        <Link
          to="/student/profile"
          className="group bg-white/60 dark:bg-gray-800/60 border border-emerald-100 dark:border-emerald-800 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300"
        >
          <div className="text-emerald-600 dark:text-emerald-400 text-4xl mb-4">📝</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
            Manage Profile
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Update your personal info and showcase your skills.
          </p>
        </Link>

        {/* Resume */}
        <Link
          to="/student/resume"
          className="group bg-white/60 dark:bg-gray-800/60 border border-green-100 dark:border-green-800 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300"
        >
          <div className="text-green-600 dark:text-green-400 text-4xl mb-4">📄</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
            Upload Resume
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Upload your latest resume in PDF format.
          </p>
        </Link>

        {/* Job List */}
        <Link
          to="/student/jobs"
          className="group bg-white/60 dark:bg-gray-800/60 border border-purple-100 dark:border-purple-800 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300"
        >
          <div className="text-purple-600 dark:text-purple-400 text-4xl mb-4">💼</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            View Jobs & Internships
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Explore and apply for available positions.
          </p>
        </Link>

        {/* Applications */}
        <Link
          to="/student/applications"
          className="group bg-white/60 dark:bg-gray-800/60 border border-red-100 dark:border-red-800 backdrop-blur-md p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-300"
        >
          <div className="text-red-600 dark:text-red-400 text-4xl mb-4">📊</div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
            Track Applications
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Monitor the status of your applications.
          </p>
        </Link>
      </div>
    </div>
  );
}
