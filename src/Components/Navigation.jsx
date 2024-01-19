import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';



const Navigation = () =>{
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Dispatch action to log out the user
        dispatch({ type: 'LOGOUT' });
    };
    return(
        <div>
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">
                    Student Portal
                </Link>
                <div className="space-x-4">
        {isLoggedIn ? (
          <>
            <Link to="/student-main" className="text-white">Home</Link>
            <Link to="/attendance" className="text-white">Attendance</Link>
            <Link to="/results" className="text-white">Results</Link>
            <Link to="/course-details" className="text-white">Course Details</Link>
            <Link to="/progress" className="text-white">Progress</Link>
            <Link to="/news" className="text-white">News</Link>
            <Link to="/" onClick={handleLogout} className="text-white">Logout</Link>
          </>
        ) : (
          // Add other navigation items for logged-out state
          <>
            <Link to="/login" className="text-white">Login</Link>
            <Link to="/registration" className="text-white">Register</Link>
          </>
        )}
      </div>
            </nav>
        </div>
    )
}

export default Navigation;