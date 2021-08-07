import { Route } from "react-router-dom";
import About from "./about/about";
import Landing from "./landing/landing";

const Routes = () => {
  return (
    <>
      <Route 
        path="/"
        render={() => <Landing />}
        exact
      />
      <Route 
        path="/about"
        render={() => <About />}
        exact
      />
      <Route 
        path="/about/me"
        render={() => <p>Aboutme: I like to eat</p>}
        exact
      />
      <p>Hello! Routes!</p>
    </>
  );
};

export default Routes;
