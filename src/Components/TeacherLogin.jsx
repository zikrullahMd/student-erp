// src/components/TeacherLoginPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const TeacherLoginPage = () => {
    const handleLogin = (e) =>{
        e.preverntDefault();
        console.log("Teacher Logged in");
    }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Faculty Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="studentId" className="block text-gray-600 text-sm font-medium mb-1">
              Faculty ID
            </label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-600 text-sm font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
          <div className="text-center">
          <Link to={'/'}>Back to main page</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherLoginPage;
