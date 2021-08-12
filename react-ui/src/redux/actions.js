import { GET_USERNAME } from "./actionTypes";

export const updateUsername = (username) => {
  // console.log(username);
  return {
    type: GET_USERNAME,
    payload: {
      username
    }
  }
};

// an action creator is name is a misnomer (misleading name), since its purpose is to fire an action that already exists, not create a new one from scratch
// the action that it initiates is the reducer function we configured `/reducer/username.js`
// action creators usually returns a value, on the `payload` obj, but don't have to
// action creator is the link between redux and reducer
// action creators are necessary to write to the store (we do not need them to read from the store)
