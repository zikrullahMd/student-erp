// src/components/LoginPage.js

import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    e.preventDefault();
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Fetch existing registrations from localStorage
    const existingRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];

    if(!loginData.email && !loginData.password){
      alert("Insuffient entry!!");
      return;
    }

    // Find the user with the provided email, phone, and password
    const user = existingRegistrations.find(u => u.email === loginData.email && u.password === loginData.password);

    if (user) {
      alert('Login successful');
      dispatch({ type: 'SET_USER', payload: user });
      history('/student-main')
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Student Login</h1>
        <form >
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1">
              Student Email
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
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <div className='text-center'>
            <Link to={'/'}>Back to main page</Link>
            </div>
        <div className="text-center">

        <Link to={'/registration'}><span>New user ?</span></Link>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;
