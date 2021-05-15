import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./theme";

interface ThemeProviderProps {
  children: ReactNode;
}

const Theme: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
