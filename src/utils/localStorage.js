// This file is used to save the state to local storage on refresh, helps to stop state from being lost on refresh.
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if(serializedState === null) {
      console.log("No state found");
      return undefined;
    } else {
      console.log(serializedState)
      return JSON.parse(serializedState);
    }
  } catch (error) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState)
  } catch (error) {
    
  }
}