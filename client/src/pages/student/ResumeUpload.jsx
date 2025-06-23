// src/pages/student/ResumeUpload.jsx

import { useState } from 'react';
import axios from '../../services/axios';

export default function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [resumeUrl, setResumeUrl] = useState('');

  const upload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    try {
      const res = await axios.post('/student/upload-resume', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResumeUrl(res.data);
      alert('Resume uploaded successfully');
    } catch {
      alert('Upload failed');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-4">
      <h2 className="text-xl font-bold">Upload Your Resume</h2>
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 rounded w-full"
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={upload}
      >
        Upload
      </button>
      {resumeUrl && (
        <p className="text-green-700 mt-4">
          Resume URL: <a href={resumeUrl} target="_blank" rel="noreferrer" className="underline">{resumeUrl}</a>
        </p>
      )}
    </div>
  );
}
