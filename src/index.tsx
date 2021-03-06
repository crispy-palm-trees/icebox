import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Router, Route } from "react-router";
import { Provider } from "react-redux";
import Root from "./Containers";
import { mainReducer } from "./Reducers";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.scss";
import history from "./Utils/history";

//const store = createStore();

//ReactDOM.render(document.getElementById("root"));

const store = createStore(mainReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Root />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
