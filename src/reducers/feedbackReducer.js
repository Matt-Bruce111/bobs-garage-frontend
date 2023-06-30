// Import types
import {
  GET_FEEDBACK,
  GET_SINGLE_FEEDBACK,
  ADD_FEEDBACK,
  UPDATE_FEEDBACK,
  DELETE_FEEDBACK,
  DEL_ERROR
} from '../actions/types'

// Set up initial state
const initialState = {
  singleFeedback: {},
  feedbackList: [],
  loading: true,
  errors: {},
}

// Set up the reducer
export default function feedbackReducer(state = initialState, action) {
  // Destructure payload and type from the action.
  const { type, payload } = action

  switch(type) {
    // Get feedback
    case GET_FEEDBACK:
      // Return state and the new feedback list
      return {
        ...state,
        feedbackList: payload,
        // loading: false,
      }

    // Get single feedback
    case GET_SINGLE_FEEDBACK:
      // Return state and the new single feedback
      return {
        ...state,
        singleFeedback: payload,
        loading: false,
      }

    // Add feedback
    case ADD_FEEDBACK:
      // Get everything from state, and add the new feedback to the feedback list
      return {
        ...state,
        feedbackList: [payload, ...state.feedbackList],
        loading: true,
      }
    
    // Update feedback
    case UPDATE_FEEDBACK:
      return{
        ...state,
        // Check if the feedbackId matches the payload, if so return the payload, if not return the current item
        feedbackList: state.feedbackList.map(
          item => item.feedbackId === payload.feedbackId ? (item = payload) : item
        ),
        loading: true
      }

    // Delete feedback
    case DELETE_FEEDBACK:
      return {
        ...state,
        // Chang the state based on the id passed in the payload
        feedbackList: state.feedbackList.filter(
          item => item.feedbackId !== payload
        ),
        loading: false
      }

    // Delete error
    case DEL_ERROR:
      return{
        ...state,
        errors: payload
      };

    // Return state by default
    default:
      return state;
  }
}