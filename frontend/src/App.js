import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Splash from "./components/Splash";
import Friends from "./components/Friends";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/' exact>
            <Splash />
          </Route>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>
          <Route path ='/friends'>
            <Friends />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
