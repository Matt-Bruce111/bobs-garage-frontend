// Import axios
import axios from 'axios'

// Import action types
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types'

// Import setAuthToken
import setAuthToken from '../utils/setAuthToken'

// Import setAlert
import { setAlert } from './alertActions'

// Load User function
export const loadUser = () => async dispatch => {
  // Check if there is a token in local storage, if so set it in the headers
  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }

  // Try to load the user
  try {
    // Call the auth endpoint on the server
    const res = await axios.get('/api/auth')
    // Dispatch the response to the reducer
    dispatch({
      type: USER_LOADED,
      payload: res.data
    })
  } catch (error){
    // If there are any errors dispatch the error to the reducer
    dispatch({
      type: AUTH_ERROR,
      payload: error
    })
  }
}

// Register User action
export const register = (user) => async dispatch => {
  // Log user
  console.log(user)
  //console.log(user.image)

  try {
    // Call register endpoint on the server
    const res = await axios.post('/api/users/register', user)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })

    // Load the user after registration and display a success message
    dispatch(loadUser())
    dispatch(setAlert('Registration Successful', 'success'))
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }

    // Dispatch the error
    dispatch({
      type: REGISTER_FAIL
    });
  }
}

// Login User action
export const login = (details) => async dispatch => {
  try {
    // Call the login endpoint on the server
    const res = await axios.post('/api/auth', details)

    // Dispatch the response to the reducer
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })

    // Load the user after login and display a success message
    dispatch(loadUser())
    dispatch(setAlert('Login Successful', 'success'))
  } catch (error) {
    // Dispatch any errors
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }

    // Dispatch login fail if there are any errors
    dispatch({
      type: LOGIN_FAIL,
    })
  }
}

// Logout
export const logout = () => dispatch => {
  // Dispatch a logout message
  dispatch(setAlert('You have logged out', 'warning'))

  dispatch({
    type: LOGOUT
  })
}