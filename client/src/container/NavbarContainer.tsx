import React from "react";
import Navbar from "../components/navbar/Navbar";

export const NavbarContainer: React.FC = () => {
  return (
    <Navbar>
      <Navbar.Nav>
        <Navbar.Item to="/login">Login</Navbar.Item>
        <Navbar.Item to="/register">Register</Navbar.Item>
      </Navbar.Nav>
    </Navbar>
  );
};

export default NavbarContainer;
