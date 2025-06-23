// src/pages/NotFound.jsx

import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold text-red-600 mb-4">404 - Page Not Found</h1>
      <p className="mb-4">Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="text-blue-600 underline">Go to Home</Link>
    </div>
  );
}
