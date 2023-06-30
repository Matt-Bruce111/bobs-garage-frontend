// Import combineReducers from redux
import { combineReducers } from '@reduxjs/toolkit';

// Import our reducers
import feedbackReducer from './feedbackReducer';
import authReducer from './authReducer';
import alertReducer from './alertReducer';
import userReducer from './userReducer';
import serviceReducer from './serviceReducer';
import blogReducer from './blogReducer';

// Use the combineReducers function to export a single reducer to the store.
export default combineReducers({
  feedback: feedbackReducer,
  auth: authReducer,
  alert: alertReducer,
  users: userReducer,
  services: serviceReducer,
  blog: blogReducer
});