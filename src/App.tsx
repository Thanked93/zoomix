import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavbarContainer from "./containers/navbarContainer";
import AuthContainer from "./context/auth";
import Theme from "./context/theme";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Theme>
        <AuthContainer>
          <NavbarContainer />

          <Switch>
            <Route path="/" exact component={Login} />

            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </AuthContainer>
      </Theme>
    </Router>
  );
}

export default App;
