// src/components/StudentAttendance.js

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StudentAttendance = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const totalClasses = 10;
  const attendedClasses = 5;

  const renderAttendanceTable = () => {
    const rows = [];

    for (let i = 1; i <= totalClasses; i++) {
      const isAttended = i <= attendedClasses;

      rows.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{isAttended ? 'Attended' : 'Absent'}</td>
        </tr>
      );
    }

    return rows;
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">Student Attendance</h1>

        <div className="mb-4">
          <label htmlFor="datepicker" className="block text-gray-600 text-sm font-medium mb-1">
            Select Date:
          </label>
          <DatePicker
            id="datepicker"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-300">Class</th>
              <th className="border border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {renderAttendanceTable()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentAttendance;
