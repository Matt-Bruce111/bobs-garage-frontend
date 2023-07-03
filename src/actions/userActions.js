// Import types
import {
  GET_USERS,
  GET_USER,
  GET_ALL,
  ENVIRONMENT
} from './types'

// Import axios
import axios from 'axios'
// Import set alert
import { setAlert } from './alertActions'

// Get users - admin only
export const getUsers = () => async dispatch => {
  console.log('Getting users')

  // Call the api to get all users
  try {
    const res = await axios.get(`${ENVIRONMENT}/api/users`)
    
    // Dispatch to the reducers
    dispatch({
      type: GET_USERS,
      payload: res.data
    })
  } catch (error) {
    // Catch any errors and dispatch them
    const errors = error.response.data.errors
    if (errors) {
      errors.array.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
  }
}

// Get a single user
export const getUser = (id) => async dispatch => {
  console.log('Getting a user')
  try {
    // Call the endpoint
    const res = await axios.get(`${ENVIRONMENT}/api/users/${id}`)

    // Dispatch to the reducer
    dispatch({
      type: GET_USER,
      payload: res.data
    })
  } catch (error) {
    // Catch any errors and dispatch them
    const errors = error.response.data.errors
    if (errors) {
      errors.array.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
  }
}

// Get all users for feedback
export const getAll = () => async dispatch => {
  console.log('Getting all users for feedback')
  try {
    // Call the endpoint
    const res = await axios.get(`${ENVIRONMENT}/api/users/all`)

    // Dispatch to the reducer
    dispatch({
      type: GET_ALL,
      payload: res.data
    })
  } catch (error) {
    // Catch any errors and dispatch them
    const errors = error.response.data.errors
    if (errors) {
      errors.array.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }
  }
}
