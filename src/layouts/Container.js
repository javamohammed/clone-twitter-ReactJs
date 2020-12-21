import React from 'react';
import { Switch, Route } from "react-router-dom";
import MainContainer from "./MainContainer";
import ProfileContainer from "./ProfileContainer";
import CommentsContainer from "./CommentsContainer";

function Container() {
  return (
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/profile" component={ProfileContainer} />
          <Route  path="/comments/:tweetId" component={CommentsContainer} />
        </Switch>

  );
}

export default Container;
