import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlockingRoute from "./components/blockingRoute";
import PrivateRoute from "./components/privateRoute";
import NavbarContainer from "./containers/navbarContainer";
import AuthContainer from "./context/auth";
import PeerConnection from "./context/peerConnection";
import Theme from "./context/theme";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ResetPassword from "./pages/auth/resetPassword";
import Dashboard from "./pages/dashboard";
import Profile from "./pages/profile";

function App() {
  return (
    <Router>
      <Theme>
        <AuthContainer>
          <NavbarContainer />

          <Switch>
            <Route path="/home" exact component={Login} />

            <BlockingRoute path="/login" component={Login} />
            <BlockingRoute path="/register" component={Register} />
            <Route path="/reset-password" component={ResetPassword} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/chat" component={Dashboard} />
            <PeerConnection>
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </PeerConnection>
          </Switch>
        </AuthContainer>
      </Theme>
    </Router>
  );
}

export default App;
