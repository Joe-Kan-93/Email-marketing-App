import React from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const token = sessionStorage.getItem("Token");
  return (
    <Route
      {...restOfProps}
      render={props => (token ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}

export default ProtectedRoute;
