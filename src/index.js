// index.js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MDBContainer } from "mdbreact";
import { Doughnut } from "react-chartjs-2";
import Chart from 'chart.js/auto'
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
