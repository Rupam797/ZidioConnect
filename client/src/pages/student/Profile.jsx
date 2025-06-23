// src/pages/student/Profile.jsx

import { useEffect, useState } from 'react';
import axios from '../../services/axios';

export default function Profile() {
  const [profile, setProfile] = useState({
    fullName: '',
    education: '',
    skills: '',
    resumeUrl: ''
  });

  useEffect(() => {
    axios.get('/student/profile').then(res => {
      if (res.data) setProfile(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.post('/student/profile', profile);
      alert('Profile saved');
    } catch {
      alert('Failed to save');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-bold">Your Profile</h2>
      <input
        className="w-full p-2 border rounded"
        placeholder="Full Name"
        name="fullName"
        value={profile.fullName}
        onChange={handleChange}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Education"
        name="education"
        value={profile.education}
        onChange={handleChange}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Skills"
        name="skills"
        value={profile.skills}
        onChange={handleChange}
      />
      <input
        className="w-full p-2 border rounded"
        placeholder="Resume URL"
        name="resumeUrl"
        value={profile.resumeUrl}
        onChange={handleChange}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleSave}>
        Save Profile
      </button>
    </div>
  );
}
