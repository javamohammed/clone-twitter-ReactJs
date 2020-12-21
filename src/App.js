import React, {useEffect} from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authCheckState } from "./store/actions/user";

//Components
import MainContainer from "./layouts/MainContainer";
import ProfileContainer from "./layouts/ProfileContainer";
import LoginContainer from "./layouts/LoginContainer";
import RegisterContainer from "./layouts/RegisterContainer";
import CommentsContainer from "./layouts/CommentsContainer";
import BookmarksContainer from "./layouts/BookmarksContainer";

const  App = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  useEffect(() => { 
    dispatch(authCheckState())

  }, [dispatch])

  let routes  = (
            <Switch>
              <Route  path="/login" exact component={LoginContainer} />
              <Route  path="/signin" component={RegisterContainer} />
              <Redirect to="/login" />
            </Switch>)
  if(user != null){
    routes = (
            <Switch>
              <Route exact path="/" component={MainContainer} />
              <Route  path="/profile" component={ProfileContainer} />
              <Route  path="/bookmarks" component={BookmarksContainer} />
              <Route  path="/comments/:tweetId" component={CommentsContainer} />
              <Route  path="/logout" render={()=> <ProfileContainer logout="yes" />} />
              <Redirect to="/" />
            </Switch>)
  }
  return (
    <BrowserRouter>
       {routes}
    </BrowserRouter>
    
  );
}

export default App;
