// store/store.js

import { createStore, combineReducers } from 'redux';
import userReducer from './reducers/userReducers';

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers if needed
});

const store = createStore(rootReducer);

export default store;
