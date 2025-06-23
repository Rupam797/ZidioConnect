// src/pages/Register.jsx

import { useState } from 'react';
import axios from '../services/axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    role: 'STUDENT'
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', form);
      alert('Registration successful. You can now log in.');
      navigate('/login');
    } catch (err) {
      alert('Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border shadow rounded">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="text"
          placeholder="Username"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          type="email"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setForm({ ...form, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="RECRUITER">Recruiter</option>
          <option value="ADMIN">Admin</option>
        </select>
        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
}
