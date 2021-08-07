import { GET_USERNAME } from '../actionTypes';

const initialState = 'Anna';

export default function(state=initialState, action) {
  if (action.type === GET_USERNAME) {
    return action.payload.username;
  }
  return state;
}