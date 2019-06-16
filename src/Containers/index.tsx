import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import App from "./App";

const RootView: React.StatelessComponent<{}> = () => (
  <Fragment>
    <Helmet
      titleTemplate='React TypeScript Boilerplate - %s'
      defaultTitle='React TypeScript Boilerplate'
    />

    <main>
      <Switch>
        <Route path="/" component={App}/>
      </Switch>
    </main>
  </Fragment>
);

export default RootView;
