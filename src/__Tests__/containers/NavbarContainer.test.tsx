import * as React from "react";
import { fireEvent, render } from "@testing-library/react";

import Navbar from "../../containers/navbarContainer";
import NavbarContainer from "../../containers/navbarContainer";

test("Testing Navbar", () => {
  const { getByText, getByLabelText } = render(<NavbarContainer />);
  const title = getByText("Zoomix");
});
