import React from "react";
import { Route } from "react-router-dom";
import { Login } from "@mui/icons-material";

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticated ? <Component {...props} /> : <Login />)}
  />
);

export default PrivateRoute;
