// src/components/StudentResults.js

import React from 'react';

const StudentResults = () => {
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

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const generateRandomGrade = () => {
    const grades = ['A', 'B', 'C', 'D', 'F'];
    return grades[Math.floor(Math.random() * grades.length)];
  };

  const generateResultsData = () => {
    return subjects.map((subject, index) => {
      const marks = generateRandomNumber(50, 100);
      const totalMarks = 100;
      const credits = generateRandomNumber(1, 5);
      const grade = generateRandomGrade();

      return {
        id: index + 1,
        subject,
        marks,
        totalMarks,
        credits,
        grade,
      };
    });
  };

  const resultsData = generateResultsData();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Student Results</h1>

        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-300">S.No</th>
              <th className="border border-gray-300">Subject</th>
              <th className="border border-gray-300">Marks</th>
              <th className="border border-gray-300">Total</th>
              <th className="border border-gray-300">Credits</th>
              <th className="border border-gray-300">Grade</th>
            </tr>
          </thead>
          <tbody>
            {resultsData.map((result) => (
              <tr key={result.id}>
                <td className="border border-gray-300">{result.id}</td>
                <td className="border border-gray-300">{result.subject}</td>
                <td className="border border-gray-300">{result.marks}</td>
                <td className="border border-gray-300">{result.totalMarks}</td>
                <td className="border border-gray-300">{result.credits}</td>
                <td className="border border-gray-300">{result.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentResults;
