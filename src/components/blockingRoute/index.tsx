import React from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";

import { useAuth } from "../../context/auth";

const BlockingRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const { currentUser } = useAuth();

  if (currentUser) return <Redirect to="/dashboard" />;
  return <Route {...rest} />;
};
export default BlockingRoute;
