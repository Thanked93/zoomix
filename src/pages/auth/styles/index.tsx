import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

export const Outer = styled.div`
  margin-top: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 3px solid ${(props) => props.theme.colors.blue};
  padding: 1em 2em;
  border-radius: 10px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  padding: 0.25em;
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

export const Footer = styled.div`
  padding-top: 1em;
  padding-bottom: 0.5em;
  font-size: ${(props) => props.theme.fontSizes.small};
`;

export const FooterLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 500;
`;
