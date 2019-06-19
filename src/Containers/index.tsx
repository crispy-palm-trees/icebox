import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import App from "./App/App";

const RootView: React.StatelessComponent<{}> = () => (
  <Fragment>
    <Helmet titleTemplate="IceBox - %s" defaultTitle="IceBox" />

    <main>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </main>
  </Fragment>
);

export default RootView;
