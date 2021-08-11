// this file remains constant for any project.

// named imports from `redux`
import { applyMiddleware, compose, createStore } from "redux";
import thunk from 'redux-thunk'; // un-named import, we will call it `thunk`, async code
// `rootReducer` is `reducers/index.js` file that combines all reducers
import rootReducer from './reducers';

// this line connects allows the redux dev tools Chrome ext to see the store, or state, of the app
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// the reducers, the middleware, and the code that connects the redux dev tools Chrome ext to the app is exported in this manner
export default createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

// Note: 
// the argument `applyMiddleWare(thunk)` passed in `composeEnhancers is only necessary since are planning on making api sync network calls.
// else, => `export default createStore(rootReducer, composeEnhancers());`  here no arg is passed in.