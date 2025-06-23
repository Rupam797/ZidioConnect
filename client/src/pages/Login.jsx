import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../services/axios';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!form.username.trim() || !form.password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await axios.post('/auth/login', form);
      login(res.data.token, res.data.role);
      
      // Role-based navigation
      const roleRoutes = {
        STUDENT: '/student/dashboard',
        RECRUITER: '/recruiter/dashboard',
        ADMIN: '/admin/dashboard'
      };
      
      navigate(roleRoutes[res.data.role] || '/dashboard');
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Invalid credentials. Please try again.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
    // Clear error when user starts typing
    if (error) setError('');
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border shadow rounded">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Username
          </label>
          <input
            id="username"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Enter your username"
            value={form.username}
            onChange={handleInputChange('username')}
            disabled={loading}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            id="password"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleInputChange('password')}
            disabled={loading}
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-2 rounded transition-colors"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}