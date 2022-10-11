import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from "./pages/Login";
import Software_development from "./pages/client/Software_development";
import IT_support from "./pages/client/IT_support";

import "bootstrap/dist/css/bootstrap.css";
import "./scss/style.scss";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <ProtectedRoute exact path="/software-development" component={Software_development} />
      <ProtectedRoute exact path="/it-support" component={IT_support} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
