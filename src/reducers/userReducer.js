// Import types
import {
  GET_USER,
  GET_USERS,
  GET_ALL,
} from '../actions/types';

// Set up initial state
const initialState = {
  user: {},
  users: [],
  all_users: [],
  loading: true,
  errors: {},
}

// Set up the reducer
export default function userReducer(state = initialState, action) {
  // Destructure payload and type from the action.
  const { type, payload } = action;

  switch(type) {
    // Get user
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      }

    // Get users
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      }

    // Get all users
    case GET_ALL:
      return {
        ...state,
        all_users: payload,
        loading: false,
      }

    // Return state by default
    default:
      return state;
  }
}