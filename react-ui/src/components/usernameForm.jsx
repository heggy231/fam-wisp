// for form in react you must get `useState`
import { useState } from "react";

const UserNameForm = () => {
  // why we need useState hook for form?
  //  b/c form is controlled component which needs state
  //  hmtl gives it to us by default -
  const [username, setUsername] = useState("JooAh");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return <input onChange={handleChange} value={username} />;
};

export default UserNameForm;
