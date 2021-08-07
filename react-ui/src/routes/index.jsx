import { Route } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <Route 
        path="/"
        render={() => <p>I am at home</p>}
      />
      <Route 
        path="/about"
        render={() => <p>I am at about</p>}
      />
      <p>Hello! Routes!</p>
    </>
  );
};

export default Routes;
