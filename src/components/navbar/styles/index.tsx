import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.dark};
  color: white;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Brand = styled(Link)`
  font-size: ${(props) => props.theme.fontSizes.large};
  margin: 0.5em;
  text-decoration: none;
  color: white;
`;

export const Toggle = styled.div`
  position: absolute;
  top: 1.5em;
  right: 1em;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const ToggleBar = styled.span`
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
`;

export const Menu = styled.div<{ active: boolean }>`
  @media (max-width: 768px) {
    display: ${({ active }) => (active ? "flex" : "none")};
    width: 100%;
    padding-bottom: 5px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Item = styled.li`
  list-style: none;
  font-size: ${(props) => props.theme.fontSizes.medium};

  @media (max-width: 768px) {
    text-align: center;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin: 0 1em;
  display: inline-block;

  &:after {
    display: block;
    content: "";
    border-bottom: solid 3px ${(props) => props.theme.colors.blue};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
    transform-origin: 0% 50%;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    padding: 0.1em 1em;
  }
`;

export const Button = styled.button`
  border: none;
  color: white;
  outline: none;
`;
