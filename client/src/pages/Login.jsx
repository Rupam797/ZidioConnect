import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../services/axios';
import { useAuth } from '../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleInputChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.password.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post('/auth/login', form);
      login(res.data.token, res.data.role);

      toast.success('Login successful!');

      const roleRoutes = {
        STUDENT: '/student/dashboard',
        RECRUITER: '/recruiter/dashboard',
        ADMIN: '/admin/dashboard',
      };

      setTimeout(() => {
        navigate(roleRoutes[res.data.role] || '/dashboard');
      }, 1000);
    } catch (err) {
      toast.error(err.response?.data || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-50 dark:bg-gray-900">
      <ToastContainer />

      <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-green-600 dark:text-green-400">Zidio Connect</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={form.email}
              onChange={handleInputChange('email')}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="you@example.com"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={form.password}
              onChange={handleInputChange('password')}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="••••••••"
              required
              disabled={loading}
            />
            <p className="text-right text-sm mt-1">
              <Link to="/forgot-password" className="text-green-600 dark:text-green-400 font-medium hover:underline">
                Forgot password?
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-2 rounded-lg font-semibold hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transition-all duration-300"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-green-600 dark:text-green-400 font-medium hover:underline">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
}
