// Import blog types
import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  UPDATE_POST,
  DELETE_POST
} from '../actions/types'

// Set up state
const initialState = {
  postsList: [],
  singlePost: {},
  loading: true,
  errors: {}
}

// Set up the reducer
export default function blogReducer(state = initialState, action) {
  // Desctructure type and payload from the action
  const { type, payload } = action

  switch(type) {
    // Get all blog posts
    case GET_POSTS:
      return {
        ...state,
        postsList: payload,
        loading: false
      }

    // Get a single blog post
    case GET_POST:
      return {
        ...state,
        singlePost: payload,
        loading: false
      }

    // Add a blog post
    case ADD_POST:
      return {
        ...state,
        // Add the new post to the postsList
        postsList: [payload, ...state.postsList],
        loading: true
      }

    // Update a blog post
    case UPDATE_POST:
      return {
        ...state,
        // Update the post in the postsList
        postsList: state.postsList.map(post => post.postId === payload.postId ? (post = payload) : post),
        loading: true
      }

    // Delete a blog post
    case DELETE_POST:
      return {
        ...state,
        // Remove the post from the postsList
        postsList: state.postsList.filter(post => post.postId !== payload),
        loading: false
      }

    // Default
    default:
      return{
        ...state,
        errors: payload
      }
  }
}