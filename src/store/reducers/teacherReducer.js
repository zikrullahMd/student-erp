// src/redux/reducers/teacherReducer.js
const initialState = {
    isLoggedIn: false,
    teacher: null,
  };
  
  const teacherReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_TEACHER':
        return {
          ...state,
          isLoggedIn: true,
          teacher: action.payload,
        };
  
      case 'LOGOUT_TEACHER':
        return {
          ...state,
          isLoggedIn: false,
          teacher: null,
        };
  
      default:
        return state;
    }
  };
  
  export default teacherReducer;
  