import { Redirect, Route, RouteProps } from "react-router-dom";

import { useAuth } from "../../context/auth";

interface PrivateRouteProps extends RouteProps {}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ ...rest }) => {
  const { currentUser } = useAuth();

  if (!currentUser) return <Redirect to="/login" />;
  return <Route {...rest} />;
};

export default PrivateRoute;
