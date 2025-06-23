import { Link } from 'react-router-dom';

export default function StudentDashboard() {
  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">🎓 Student Dashboard</h1>
      <p className="text-gray-600 mb-6">Welcome to your student portal! What would you like to do?</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Profile */}
        <Link
          to="/student/profile"
          className="block p-6 bg-white border rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-blue-600">📝 Manage Profile</h2>
          <p className="text-sm text-gray-500">Update your personal details and skills</p>
        </Link>

        {/* Resume */}
        <Link
          to="/student/resume"
          className="block p-6 bg-white border rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-green-600">📄 Upload Resume</h2>
          <p className="text-sm text-gray-500">Upload your latest resume in PDF format</p>
        </Link>

        {/* Job List */}
        <Link
          to="/student/jobs"
          className="block p-6 bg-white border rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-purple-600">💼 View Jobs & Internships</h2>
          <p className="text-sm text-gray-500">Browse and apply for open positions</p>
        </Link>

        {/* Applications */}
        <Link
          to="/student/applications"
          className="block p-6 bg-white border rounded shadow hover:shadow-lg transition"
        >
          <h2 className="text-lg font-semibold text-red-600">📊 Track Applications</h2>
          <p className="text-sm text-gray-500">Check status of jobs you’ve applied to</p>
        </Link>
      </div>
    </div>
  );
}
