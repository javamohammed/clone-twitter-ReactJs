import React from 'react';
import { Switch, Route } from "react-router-dom";

import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";
import MainContainer from "./MainContainer";
import ProfileContainer from "./ProfileContainer";
import "../css/home.css";

function Container() {
  return (
    <div className="container">
        <div className="row">
            <LeftContainer />
                <Switch>
                  <Route exact path="/" component={MainContainer} />
                  <Route exact path="/profile" component={ProfileContainer} />
                </Switch>
            <RightContainer/>
        </div>
    </div>
  );
}

export default Container;
