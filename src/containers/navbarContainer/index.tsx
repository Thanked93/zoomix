import React from "react";
import Navbar from "../../components/navbar";
import { useAuth } from "../../context/auth";

const NavbarContainer = () => {
  const { currentUser } = useAuth();

  return (
    <Navbar>
      <Navbar.Brand to={currentUser ? "/dashboard" : "/"}>Zoomix</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Menu>
        <Navbar.List>
          {currentUser ? (
            <>
              <Navbar.Item>
                <Navbar.Link to="/dashboard">Dashboard</Navbar.Link>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Link to="/chat">Chats</Navbar.Link>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Link to="/profile">Profile</Navbar.Link>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Logout>Logout</Navbar.Logout>
              </Navbar.Item>
            </>
          ) : (
            <>
              <Navbar.Item>
                <Navbar.Link to="/login">Login</Navbar.Link>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Link to="/register">Register</Navbar.Link>
              </Navbar.Item>
            </>
          )}
        </Navbar.List>
      </Navbar.Menu>
    </Navbar>
  );
};

export default NavbarContainer;
