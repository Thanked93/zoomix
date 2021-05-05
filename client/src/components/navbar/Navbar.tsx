import React, { ReactNode } from "react";
import { Nav } from "./styles";

interface NavbarProps {
  children?: ReactNode;
}

export const Navbar = ({ children, ...restProps }: NavbarProps) => {
  return <Nav {...restProps}>{children}</Nav>;
};

export default Navbar;
