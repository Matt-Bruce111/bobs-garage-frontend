// Import the service types
import {
  GET_SERVICES,
  GET_SERVICE,
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE
} from './types'

// Import axios
import axios from 'axios'

// Import setAlert
import { setAlert } from './alertActions'

// Get all services
export const getServices = () => async dispatch => {
  try {
    // Call the api to get all services
    console.log('Getting services')
    const res = await axios.get('/api/services')
  
    // Dispatch the response to the reducer
    dispatch({
      type: GET_SERVICES,
      payload: res.data
    })
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
  }
}

// Get a single service
export const getService = (id) => async dispatch => {
  try {
    // Call the api to get a single service
    const res = await axios.get(`/api/services/${id}`)
    console.log(res)
    // Dispatch the response to the reducer
    dispatch({
      type: GET_SERVICE,
      payload: res.data
    })
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
  }
}

// Add a service
export const addService = (service) => async dispatch => {
  try {
    // Call the api to add a service
    const res = await axios.post('/api/services', service)
  
    // Dispatch the response to the reducer
    dispatch({
      type: ADD_SERVICE,
      payload: res.data
    })
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
  }
}

// Update a service
export const updateService = (service) => async dispatch => {
  try {
    // Call the api to update a service
    const res = await axios.put(`/api/services/${service.serviceId}`, service)
  
    // Dispatch the response to the reducer
    dispatch({
      type: UPDATE_SERVICE,
      payload: res.data
    })
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
  }
}

// Delete a service
export const deleteService = (id) => async dispatch => {
  try {
    // Call the api to delete a service
    await axios.delete(`/api/services/${id}`)
  
    // Dispatch the response to the reducer
    dispatch({
      type: DELETE_SERVICE,
      payload: id
    }) 
  } catch (error) {
    // If we get an error, display the error message
    const errors = error.response.data.errors;
    if(errors){
      errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
    }
  }
}