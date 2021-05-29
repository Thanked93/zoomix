import React, { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router";
import { Brand, Item, List, Menu, Nav, NavLink, Toggle, ToggleBar, Button } from "./styles";

import { logout } from "../../firebase/auth";

interface ChildProps {
  children: ReactNode;
}

interface IActive {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ActiveContext = createContext({} as IActive);

const Navbar = ({ children, ...restProps }: ChildProps) => {
  const [active, setActive] = useState(false);

  return (
    <Nav {...restProps}>
      <ActiveContext.Provider value={{ active, setActive }}>{children}</ActiveContext.Provider>
    </Nav>
  );
};

interface LinkProps extends ChildProps {
  to?: string;
}

Navbar.Brand = function NavbarBrand({ children, to = "", ...restProps }: LinkProps) {
  return (
    <Brand to={to} {...restProps}>
      {children}
    </Brand>
  );
};

Navbar.Toggle = function NavbarToggle({ ...restProps }) {
  const { active, setActive } = useContext(ActiveContext);
  return (
    <Toggle onClick={() => setActive(!active)} {...restProps}>
      <ToggleBar />
      <ToggleBar />
      <ToggleBar />
    </Toggle>
  );
};

Navbar.Menu = function NavbarMenu({ children, ...restProps }: ChildProps) {
  const { setActive, active } = useContext(ActiveContext);
  return (
    <Menu onMouseLeave={() => (active ? setActive(!active) : null)} active={active} {...restProps}>
      {children}
    </Menu>
  );
};

Navbar.List = function NavbarList({ children, ...restProps }: ChildProps) {
  return <List {...restProps}>{children}</List>;
};

Navbar.Item = function NavbarItem({ children, ...restProps }: ChildProps) {
  return (
    <Item className='border' {...restProps}>
      {children}
    </Item>
  );
};

Navbar.Link = function NavbarLink({ children, to = "", ...restProps }: LinkProps) {
  return (
    <NavLink to={to} {...restProps}>
      {children}
    </NavLink>
  );
};

Navbar.Logout = function NavbarButton({ children, ...restProps }: ChildProps) {
  const history = useHistory();

  async function handleLogout() {
    try {
      await logout();
      history.push("/login");
    } catch (error) {}
  }

  return (
    <Button onClick={handleLogout} {...restProps}>
      {children}
    </Button>
  );
};

export default Navbar;
