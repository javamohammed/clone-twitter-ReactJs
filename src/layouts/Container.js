import React from 'react';
import { Switch, Route } from "react-router-dom";
import MainContainer from "./MainContainer";
import ProfileContainer from "./ProfileContainer";

function Container() {
  return (
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
        </Switch>

  );
}

export default Container;
