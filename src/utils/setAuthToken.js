// This sets our token in our headers for when we send requests to the server
// Import axios
import axios from 'axios'

const setAuthToken = token => {
  // Check if token exists
  if (token) {
    // If token exists, set it to the headers
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    // If token does not exist, delete it from the headers
    delete axios.defaults.headers.common['x-auth-token']
  }
}

// Export the function
export default setAuthToken