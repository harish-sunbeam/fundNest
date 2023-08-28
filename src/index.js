// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import Landing from "./Pages/Landing";
import store from "./store";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
