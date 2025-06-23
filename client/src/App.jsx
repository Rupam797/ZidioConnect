import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

// 🧑‍🎓 Student
import StudentDashboard from './pages/student/Dashboard';
import Profile from './pages/student/Profile';
import ResumeUpload from './pages/student/ResumeUpload';
import JobList from './pages/student/JobList';
import Applications from './pages/student/Applications';

// 🧑‍💼 Recruiter
import RecruiterDashboard from './pages/recruiter/Dashboard';
import PostJob from './pages/recruiter/PostJob';
import MyJobs from './pages/recruiter/MyJobs';
import RecruiterApplications from './pages/recruiter/Applications';

// 🛠️ Admin
import AdminDashboard from './pages/admin/Dashboard';
import ManageUsers from './pages/admin/ManageUsers';

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Student Routes */}
        <Route
          path="/student/dashboard"
          element={
            <ProtectedRoute role="STUDENT">
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/profile"
          element={
            <ProtectedRoute role="STUDENT">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/resume"
          element={
            <ProtectedRoute role="STUDENT">
              <ResumeUpload />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/jobs"
          element={
            <ProtectedRoute role="STUDENT">
              <JobList />
            </ProtectedRoute>
          }
        />
        <Route
          path="/student/applications"
          element={
            <ProtectedRoute role="STUDENT">
              <Applications />
            </ProtectedRoute>
          }
        />

        {/* Recruiter Routes */}
        <Route
          path="/recruiter/dashboard"
          element={
            <ProtectedRoute role="RECRUITER">
              <RecruiterDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/post-job"
          element={
            <ProtectedRoute role="RECRUITER">
              <PostJob />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/my-jobs"
          element={
            <ProtectedRoute role="RECRUITER">
              <MyJobs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/recruiter/applications"
          element={
            <ProtectedRoute role="RECRUITER">
              <RecruiterApplications />
            </ProtectedRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <ProtectedRoute role="ADMIN">
              <ManageUsers />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
