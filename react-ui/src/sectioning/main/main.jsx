import React from "react";
import { Switch } from "react-router-dom";
import Routes from "../../routes";
import "./style.css";

const Main = () => {
  return (
    <div>
      <main>
        <Switch>
          <Routes />
        </Switch>
      </main>
    </div>
  );
};

export default Main;
