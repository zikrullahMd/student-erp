// src/components/StudentCourse.js

import React from 'react';

const StudentCourse = () => {
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

  const generateRandomCourseId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let courseId = '';

    for (let i = 0; i < 8; i++) {
      courseId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return courseId;
  };

  const generateRandomCredits = () => {
    return Math.floor(Math.random() * 5) + 1;
  };

  const generateCourseData = () => {
    return subjects.map((subject) => {
      const courseId = generateRandomCourseId();
      const credits = generateRandomCredits();
      const description = generateRandomDescription();

      return {
        courseId,
        courseName: subject,
        description,
        credits,
      };
    });
  };

  const generateRandomDescription = (courseName) => {
    const descriptions = {
      'Calculus': 'Explore the foundations of Calculus, mastering concepts like limits, derivatives, and integrals. Develop problem-solving skills and mathematical reasoning, laying the groundwork for applications in science and engineering.',
      'Algorithms': 'Delve into the world of Algorithms, understanding their design and implementation. Foster critical thinking and algorithmic problem-solving, essential skills for computer scientists and software developers.',
      'Python Programming': 'Embrace the versatility of Python. From scripting to web development, discover its applications. Gain proficiency in coding, leveraging Python\'s simplicity and extensive libraries for various programming tasks.',
      'Web Development': 'Embark on a journey in Web Development. Learn HTML, CSS, and JavaScript to build responsive and interactive websites. Explore front-end and back-end frameworks, making strides in modern web application development.',
      'Computer Architecture': 'Investigate the fundamentals of Computer Architecture. Study the organization of computer systems, including processors, memory, and peripheral devices. Gain insights into the inner workings of computers and their impact on software performance.',
      'Computer Networks': 'Dive into the intricate realm of Computer Networks. Examine network protocols, data transmission, and connectivity principles. Acquire skills in designing and managing networks, crucial for modern communication infrastructures.',
      'Operating Systems': 'Explore the core concepts of Operating Systems. Delve into process management, memory allocation, and file systems. Understand the role of operating systems in creating efficient computing environments for various applications.',
      'Artificial Intelligence': 'Venture into Artificial Intelligence, encompassing machine learning, natural language processing, and cognitive computing. Discover how AI algorithms emulate human intelligence, transforming industries through automation and intelligent decision-making.',
      'Analytics': 'Unlock the potential of Analytics. Learn statistical methods and data interpretation to extract valuable insights. Develop skills in data visualization and analysis, empowering decision-makers in diverse fields with actionable information.'
    };

    return descriptions[courseName] || 'No description available.';
  };

  const courseData = generateCourseData();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white">
        <h1 className="text-4xl font-bold mb-6 text-center">Course Details</h1>

        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr>
              <th className="border border-gray-300">Course ID</th>
              <th className="border border-gray-300">Course Name</th>
              <th className="border border-gray-300">Description</th>
              <th className="border border-gray-300">Credits</th>
            </tr>
          </thead>
          <tbody>
            {courseData.map((course) => (
              <tr key={course.courseId}>
                <td className="border border-gray-300">{course.courseId}</td>
                <td className="border border-gray-300">{course.courseName}</td>
                <td className="border border-gray-300">{generateRandomDescription(course.courseName)}</td>
                <td className="border border-gray-300">{course.credits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentCourse;
