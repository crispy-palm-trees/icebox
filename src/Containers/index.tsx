import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App/App";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const RootView: React.StatelessComponent<{}> = () => (
  <Fragment>
    <Helmet titleTemplate='IceBox - %s' defaultTitle='IceBox' />

    <main>
      <Router basename='/icebox'>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
        </div>
      </Router>
    </main>
  </Fragment>
);

export default RootView;
