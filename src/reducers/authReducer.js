// Import types
import {
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED
} from '../actions/types'

// Set up initial state
const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
  errors: {}
}

// If a token exists set isAuthenticated to true, this stops isAuthenticated from being set to false on page refresh
if(initialState.token) initialState.isAuthenticated = true;

// Set up the reducer
export default function authReducer(state = initialState, action) {
  // Destructure payload and type from the action
  const { payload, type } = action;

  switch(type) {
    // Successful login
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }

    // Unsuccesfful login
    case LOGIN_FAIL:
      return {
        ...state,
        errors: payload
      }

     // Logout
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      }
 
    // User Loaded
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      }

    // Account deleted
    case ACCOUNT_DELETED:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      }

    // Return state as default
    default:
      return state;
  }
}