import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";

import { AuthProvider } from "./shared/context/auth.context";
import AuthRoute from "./shared/utils/AuthRoute";

import Home from "./home/home";
import Nav from "./shared/navigation/Nav";

import Feature1 from "./feature1/pages/feature1";
import Feature2 from "./feature2/pages/feature2";

// axios.defaults.baseURL = "http://localhost:3001/api";
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API;
axios.defaults.headers.common["Authorization"] = "";

const App = () => (
  <AuthProvider>
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <AuthRoute exact path="/feature1" component={Feature1} />
        <AuthRoute exact path="/feature2" component={Feature2} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </AuthProvider>
);

export default App;
