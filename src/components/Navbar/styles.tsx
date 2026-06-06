import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

export const LinkContainer = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
`;

export const LanguagesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 480px) {
    display: block;
    justify-self: end;
    margin: 0 1rem 0 0;
    z-index: 10;
    cursor: pointer;
  }
`;
