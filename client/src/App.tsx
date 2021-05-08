import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./pages/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Home from "./pages/Home";
import NavbarContainer from "./container/NavbarContainer";
import { Login } from "./pages/Login";
import AuthProvider from "./context/AuthContext";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Main>
          <AuthProvider>
            <NavbarContainer />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
            </Switch>
          </AuthProvider>
        </Main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
