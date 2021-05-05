import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Main } from "./pages/styles";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";
import Home from "./pages/Home";
import NavbarContainer from "./container/NavbarContainer";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Main>
          <NavbarContainer />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
