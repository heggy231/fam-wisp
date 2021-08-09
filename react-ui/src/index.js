import React from "react";
import ReactDOM from "react-dom";
// this component is critical to connecting react with redux which we do by wrapping it around the entire app itself
import { Provider } from "react-redux";
// because the store we created in step 7 is default export, i.e. unnamed, we can call it anything we want but the convention is to import it as `store`
import store from "./redux/store";
import App from "./app";
import {BrowserRouter as Router} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
