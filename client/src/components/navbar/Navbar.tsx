import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Nav, NavbarNav, NavbarItem } from "./styles";

interface NavbarProps {
  children: ReactNode;
}

export const Navbar = ({ children, ...restProps }: NavbarProps) => {
  return <Nav {...restProps}>{children}</Nav>;
};

Navbar.Nav = function Navbarnav({ children, ...restProps }: NavbarProps) {
  return <NavbarNav {...restProps}>{children}</NavbarNav>;
};

interface NavbarItemProps extends NavbarProps {
  to: string;
}

Navbar.Item = function Navbaritem({
  children,
  to,
  ...restProps
}: NavbarItemProps) {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      <NavbarItem {...restProps}>{children}</NavbarItem>
    </Link>
  );
};

export default Navbar;
