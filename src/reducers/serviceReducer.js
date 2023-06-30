// Import services types
import {
  GET_SERVICES,
  GET_SERVICE,
  ADD_SERVICE,
  UPDATE_SERVICE,
  DELETE_SERVICE
} from '../actions/types'

// Set up state
const initialState = {
  servicesList: [],
  singleService: {},
  loading: true,
  errors: {}
}

// Set up the reducer
export default function serviceReducer(state = initialState, action) {
  // Destructure payload and type from the action
  const { payload, type } = action;

  switch(type) {
    // Get all services
    case GET_SERVICES:
      return {
        ...state,
        servicesList: payload,
        loading: false
      }
    
    // Get a single service
    case GET_SERVICE:
      return {
        ...state,
        singleService: payload,
        loading: false
      }

    // Add a service
    case ADD_SERVICE:
      return {
        ...state,
        // Add the new service to the servicesList
        servicesList: [payload, ...state.servicesList],
        loading: true
      }

    // Update a service
    case UPDATE_SERVICE:
      return {
        ...state,
        // Update the service in the servicesList
        servicesList: state.servicesList.map(service => service.serviceId === payload.serviceId ? (service = payload) : service),
        loading: true
      }

    // Delete a service
    case DELETE_SERVICE:
      return {
        ...state,
        // Remove the service from the servicesList
        servicesList: state.servicesList.filter(service => service.serviceId !== payload),
        loading: false
    }

    default:
      return {
        ...state,
        errors: payload
      }
    }
}