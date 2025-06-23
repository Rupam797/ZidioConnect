// src/components/RoleBasedRedirect.jsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function RoleBasedRedirect() {
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth?.token) return;
    if (auth.role === 'STUDENT') navigate('/student/dashboard');
    else if (auth.role === 'RECRUITER') navigate('/recruiter/dashboard');
    else if (auth.role === 'ADMIN') navigate('/admin/dashboard');
  }, [auth, navigate]);

  return null;
}
