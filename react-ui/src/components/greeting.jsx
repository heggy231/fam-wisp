import React from "react";
import { connect } from "react-redux";

// now we have mapStateToProps -> now we will use like
//  props
const Greeting = ({ username }) => {
  return (
    <div>
      <h1>Hello, {username}</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  // map whatever it is in the store (state)
  //  we want to map it to props
  username: state.username
})

// closure function calling another function
export default connect(mapStateToProps)(Greeting);
