// StudentMain.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StudentMainPage = () => {
  const currentUser = useSelector((state) => state.user.user);

  // Check if currentUser is null before accessing its properties

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-500">
      <div className="bg-white p-8 rounded-md shadow-lg w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Welcome!!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-indigo-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-indigo-800">Attendance</h2>
            <p className="text-gray-700">Your attendance details go here.</p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-indigo-800">Results</h2>
            <p className="text-gray-700">Your result information goes here.</p>
          </div>
          <div className="bg-indigo-100 p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-indigo-800">Progress</h2>
            <p className="text-gray-700">Details about your courses go .</p><Link to="/progress">here</Link>
          </div>
          {/* Add more sections as needed */}
        </div>
        {/* Add other components and content specific to the main page */}
      </div>
    </div>
  );
};

export default StudentMainPage;
