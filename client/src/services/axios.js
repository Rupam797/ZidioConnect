// src/services/axios.js

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // ✅ your Spring Boot API
});

// Attach token to every request if present
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
