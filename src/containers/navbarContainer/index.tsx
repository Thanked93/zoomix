import React from "react";
import Navbar from "../../components/navbar";
import { useAuth } from "../../context/auth";

const NavbarContainer = () => {
  const { currentUser, logout } = useAuth();

  return (
    <Navbar>
      <Navbar.Brand to={currentUser ? "/dashboard" : "/"}>Zoomix</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Menu>
        <Navbar.List>
          {currentUser ? (
            <>
              <Navbar.Item>
                <Navbar.Link>Dashboard</Navbar.Link>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Link>Chats</Navbar.Link>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Link>Profile</Navbar.Link>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Link>Logout</Navbar.Link>
              </Navbar.Item>
            </>
          ) : (
            <>
              <Navbar.Item>
                <Navbar.Link>Login</Navbar.Link>
              </Navbar.Item>
              <Navbar.Item>
                <Navbar.Logout logout={logout}>
                  <Navbar.Link>Register</Navbar.Link>
                </Navbar.Logout>
              </Navbar.Item>
            </>
          )}
        </Navbar.List>
      </Navbar.Menu>
    </Navbar>
  );
};

export default NavbarContainer;
