import styled from "styled-components";

export const Nav = styled.nav`
  grid-row: 1;
  height: 100%;
  width: 100%;
  background: ${(props) => props.theme.thirdBg};
`;

export const NavbarNav = styled.div`
  height: 95%;
  width: 95%;
  display: flex;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const NavbarItem = styled.div`
  font-weight: 900;
`;
