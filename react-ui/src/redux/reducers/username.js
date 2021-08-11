// create a username reducer called `username.js`

// every reducer needs at least one action type, we'll create this in a step
import { GET_USERNAME } from '../actionTypes'; // named import

// every reducer needs an initial val, even it's empty
const initialState = 'Heggy'; // when redux adds this state to the store => it becomes obj

// a reducer, in the simplest of terms, is nothing more than a fx that takes in the current state and values, on the `action` object, that can be used to update the current state
function usernameReducer (state=initialState, action) {
  // a reducer listens for at least one action type
  // if (action.type === GET_USERNAME) {
    // a reducer updates the state if it hears an action type
    // in this case, `initialState` is replaced with the value of `action.payload.username`
    // return action.payload.username;
  // }
  // a reducer must always return the initial state if the action type does not trigger a return before it gets to this line
  return state;
}

// it's best to export the reducer as a named function in order to avoid a console warning, be clear about what the reducer does
export default usernameReducer;