import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import LandingPage from './Components/LandingPage'
import StudentLogin from './Components/StudentLogin';
import TeacherLoginPage from './Components/TeacherLogin';
import StudentRegistration from './Components/StudentRegistration';
import Navigation from './Components/Navigation';
import StudentMainPage from './Components/StudentMainPage';
import PrivateRoute from './Components/PrivateRoute';
import StudentAttendance from './Components/StudentAttendance';
import StudentResults from './Components/StudentResults';
import StudentCourse from './Components/StudentCourse';
import StudentProgress from './Components/StudentProgress';
import StudentNews from './Components/StudentNews';

function App() {

  return (
    <div>
      {/* <Navigation/> */}
      <Router>
      <Navigation/>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route exact path='/login' element={<StudentLogin/>} />
          <Route exact path='/teacher-login' element={<TeacherLoginPage/>}/>
          <Route exact path='/registration' element={<StudentRegistration />}/>
          <Route path="/student-main" element={<StudentMainPage/>}/>
          <Route path="/attendance" element={<StudentAttendance/>} />
          <Route path="/results" element={<StudentResults/>} />
          <Route path="/course-details" element={<StudentCourse/>} />
          <Route path="/progress" element={<StudentProgress/>} />
          <Route path="/news" element={<StudentNews/>} />
          {/* Add more routes as needed */}
        </Routes>
    </Router>
    </div>
  )
}

export default App
