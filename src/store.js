// Import configureStore from redux
import { configureStore } from '@reduxjs/toolkit';

// Import our root reducer.
import rootReducer from './reducers/rootReducer';

// Set up initial state.
import { loadState, saveState } from './utils/localStorage';
const initialState = loadState();

// Create our store.
const store = configureStore({
  reducer: rootReducer,
  // Midddleware
  devTools: true, // This defaults to true.
  // devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

store.subscribe(() => {
  saveState({
    auth: store.getState().auth
  });
})

export default store;