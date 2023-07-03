// Import blog types
import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ENVIRONMENT
} from './types'

// Import axios
import axios from 'axios'

// Import setAlert
import { setAlert } from './alertActions'

// Get all blog posts
export const getPosts = () => async dispatch => {
  try {
    // Call the api to get all posts
    console.log('Getting blog posts')
    const res = await axios.get(`${ENVIRONMENT}/api/blog`)
  
    // Dispatch the response to the reducer
    dispatch({
      type: GET_POSTS,
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

// Get a single blog post
export const getPost = (id) => async dispatch => {
  try {
    // Call the api to get a single service
    console.log('Getting a blog post')
    const res = await axios.get(`${ENVIRONMENT}/api/blog/${id}`)
  
    // Dispatch the response to the reducer
    dispatch({
      type: GET_POST,
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

// Add a post
export const addPost = (post) => async dispatch => {
  try {
    // Call the api to add a service
    const res = await axios.post(`${ENVIRONMENT}/api/blog`, post)
  
    // Dispatch the response to the reducer
    dispatch({
      type: ADD_POST,
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

// Update a post
export const updatePost = (post) => async dispatch => {
  try {
    console.log("Updating a post")
    //console.log(post)
    // Call the api to update a service
    const res = await axios.put(`${ENVIRONMENT}/api/blog/${post.postId}`, post)
  
    // Dispatch the response to the reducer
    dispatch({
      type: UPDATE_POST,
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

// Delete a post
export const deletePost = (id) => async dispatch => {
  try {
    // Call the api to delete a post
    await axios.delete(`${ENVIRONMENT}/api/blog/${id}`)
  
    // Dispatch the response to the reducer
    dispatch({
      type: DELETE_POST,
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
