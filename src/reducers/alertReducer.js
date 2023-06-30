// Import alert types
import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

// Set up state.
const initialState = [];

// Set up the reducer.
export default function alertReducer(state = initialState, action)
{
  // Destructure payload and type from the action.
  const { payload, type } = action;
  switch(type){
    // Set alert
    case SET_ALERT:
      return [...state, payload];
    // Remove alert
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}