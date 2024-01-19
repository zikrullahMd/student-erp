// src/components/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';



const LandingPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Student Portal</h1>
        <p className="text-lg text-gray-600 mb-8">
          Empowering students through innovative education solutions.
        </p>
        <Link to="/login">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Student Login
          </button>
        </Link>
        <p className="mt-4 text-gray-600">or</p>
        <Link to="/teacher-login">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full mt-4">
            Teacher Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
