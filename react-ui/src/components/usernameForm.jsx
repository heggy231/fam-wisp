// a controlled-state form in react needs to use `useState`
//  for component level

// for app wide storage we use connect to maptStateToProps
import { connect } from "react-redux";
import { updateUsername } from "../redux/actions";

const UserNameForm = ({ updateUsername, username }) => {
  const handleChange = (e) => {
    const username = e.target.value;
    // setUsername(e.target.value);
    // when value username form changed => fire off updateUsername fx
    updateUsername(username);
  };

  return <input onChange={handleChange} value={username} />;
};

// to read a value from store
const mapStateToProps = (state) => ({
  // map what is in store => props so we can use it
  username: state.username,
});

// to write a value from state
const mapDispatchToProps = (dispatch) => ({
  // right handside updateUsername action is defined in redux/actions
  updateUsername: (username) => dispatch(updateUsername(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserNameForm);

// if only writing with no reading you must pass in `null` as first arg
// export default connect(null, mapDispatchToProps)(UserNameForm);
