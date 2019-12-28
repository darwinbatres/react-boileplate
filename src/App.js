import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";

import Home from "./home/home";
import Nav from "./shared/navigation/Nav";

import Feature1 from "./feature1/pages/feature1";

import Feature2 from "./feature2/pages/feature2";

// axios.defaults.baseURL = "http://localhost:3001/api";
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API;
axios.defaults.headers.common["Authorization"] = "";

const App = () => (
  <BrowserRouter>
    <Nav />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/feature1" exact>
        <Feature1 />
      </Route>
      <Route path="/feature2" exact>
        <Feature2 />
      </Route>
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
);

export default App;
