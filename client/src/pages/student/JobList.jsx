// src/pages/student/JobList.jsx

import { useEffect, useState } from 'react';
import axios from '../../services/axios';

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('/student/jobs').then(res => setJobs(res.data));
  }, []);

  const apply = async (id) => {
    try {
      await axios.post(`/student/apply/${id}`);
      alert('Applied successfully');
    } catch {
      alert('Failed to apply');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Available Jobs & Internships</h2>
      {jobs.map(job => (
        <div key={job.id} className="p-4 mb-3 border rounded shadow-sm">
          <h3 className="font-semibold">{job.title}</h3>
          <p className="text-gray-600">{job.company}</p>
          <p className="text-sm text-gray-500 mb-2">Deadline: {job.deadline}</p>
          <button
            className="bg-green-600 text-white px-3 py-1 rounded"
            onClick={() => apply(job.id)}
          >
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}
