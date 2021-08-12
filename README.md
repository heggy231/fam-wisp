# FamWisp

live website: https://hc-fam-wisp.herokuapp.com/

My code: https://github.com/heggy231/fam-wisp

- express-session: for session ID cookie

- Jung WooJin
Jung JiOh
- Im SooAh

```js
// inside of user redux reducer
// updating single thing inside user object
const user = {
  name: 'john',
  age: 30,
  city: 'Fargo'
};

export default function usercityInfo (state = initialState, action) {
  if (action.type === 'GET_USERCITY') {
    return {
      ...user, // make copy of user obj
      city: action.payload.user.city // update city info
    }
  }
}

// ex 2 with array of hobbies
const user = {
  name: 'john',
  age: 30,
  city: 'Fargo',
  hobbies: ['hiking', 'biking', 'climbing'],
};

// => from component level, replace the hobbies array entirely


// ex 3) 
const user = {
  name: 'john',
  age: 30,
  city: 'Fargo',
  hobbies: [{name: 'ddd'}, {date: 'dsome date'}],
};



````