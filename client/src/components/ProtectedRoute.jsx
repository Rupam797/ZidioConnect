// src/components/ProtectedRoute.jsx

import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({ children, role }) {
  const { auth } = useAuth();

  if (!auth?.token) return <Navigate to="/login" />;
  if (role && auth.role !== role) return <Navigate to="/" />;

  return children;
}
