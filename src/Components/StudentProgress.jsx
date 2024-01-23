// src/components/StudentProgress.js

import React from 'react';

const StudentProgress = () => {
  const subjects = [
    'Calculus',
    'Algorithms',
    'Python Programming',
    'Web Development',
    'Computer Architecture',
    'Computer Networks',
    'Operating Systems',
    'Artificial Intelligence',
    'Analytics',
  ];

  const generateRandomMarks = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  const generateRandomProgressData = () => {
    return subjects.map((subject) => {
      const mid1Marks = generateRandomMarks();
      const mid2Marks = generateRandomMarks();
      const see1Marks = generateRandomMarks();
      const see2Marks = generateRandomMarks();

      return {
        subject,
        mid1Marks,
        mid2Marks,
        see1Marks,
        see2Marks,
      };
    });
  };

  const progressData = generateRandomProgressData();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Semester Exam Progress</h1>

        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-300">Subject</th>
              <th className="border border-gray-300">Mid 1 Marks</th>
              <th className="border border-gray-300">Mid 2 Marks</th>
              <th className="border border-gray-300">SEE 1 Marks</th>
              <th className="border border-gray-300">SEE 2 Marks</th>
            </tr>
          </thead>
          <tbody>
            {progressData.map((data) => (
              <tr key={data.subject}>
                <td className="border border-gray-300">{data.subject}</td>
                <td className="border border-gray-300">{data.mid1Marks}</td>
                <td className="border border-gray-300">{data.mid2Marks}</td>
                <td className="border border-gray-300">{data.see1Marks}</td>
                <td className="border border-gray-300">{data.see2Marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProgress;
