import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

// ✅ Custom hook for cleaner usage
export const useAuth = () => useContext(AuthContext);
