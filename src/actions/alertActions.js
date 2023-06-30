// Import uuid, this will be used to create ids for alerts
import { v4 as uuidv4 } from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

// Create the setAlert function.
export const setAlert = ( msg, alertType, timeout = 5000) => dispatch => {
  // Create an id for the alert
  const id = uuidv4();
  // Dispatch the alert and payload
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id}
  });

  // Set timeout will automatically remove the alert from the ui
  setTimeout(() => dispatch ({ type: REMOVE_ALERT, payload: id}), timeout);
};