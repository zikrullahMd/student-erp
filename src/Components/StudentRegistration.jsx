// src/components/StudentRegistration.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';

const StudentRegistration = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    branch: '',
    phone: '',
    address: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = () => {
    // Fetch existing registrations from localStorage
    const existingRegistrations = JSON.parse(localStorage.getItem('registrations')) || [];

    // Check if the email or phone is already registered
    const existingUser = existingRegistrations.find(user => user.email === formData.email || user.phone === formData.phone);

    if (existingUser) {
      alert('User with the provided email or phone already exists');
      return;
    }

    // Store registration details in localStorage
    const newRegistration = { ...formData };
    existingRegistrations.push(newRegistration);
    localStorage.setItem('registrations', JSON.stringify(existingRegistrations));

    alert('Student registered successfully');
    dispatch({type: 'SET_USER',payload:newRegistration});
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Student Registration</h1>
        <form >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="branch" className="block text-gray-600 text-sm font-medium mb-1">
              Branch
            </label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-600 text-sm font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-1">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block text-gray-600 text-sm font-medium mb-1">
              Password
            </label>
            <textarea
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            onClick={handleRegistration}
          >
            Register
          </button>
        </form>
        <div className="text-center">
        <Link to={'/login'}>Already a user?</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentRegistration;
