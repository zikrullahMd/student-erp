// src/components/TeacherLoginPage.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import axios from 'axios';

const TeacherLoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5001/api/login-teacher', loginData);
  
      if (response.status === 200) {
        // Assuming the server responds with a success status code (e.g., 200 OK)
        // Dispatch the authenticated teacher to the Redux store
        dispatch({ type: 'SET_TEACHER', payload: 'teacher' });
        alert('Teacher login successful');
        navigate('/teacher-main');
      } else {
        console.error('Unexpected response status:', response.status);
        alert('Unexpected response from the server. Check console for details.');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.error('Invalid credentials:', error.response.data);
        alert('Invalid email or password. Please try again.');
      } else {
        console.error('Error authenticating teacher:', error.response || error);
        alert('Error authenticating teacher. Check console for details.');
      }
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Faculty Login</h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1">
              Faculty ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleInputChange}
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
              value={loginData.password}
              onChange={handleInputChange}
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
          <div className="text-center">
            <Link to={'/register-teacher'}>New Faculty?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherLoginPage;
