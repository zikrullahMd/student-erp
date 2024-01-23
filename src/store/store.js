// store/store.js

import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducers';
import teacherReducer from './reducers/teacherReducer';

const rootReducer = combineReducers({
  user: userReducer,
  teacher: teacherReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
