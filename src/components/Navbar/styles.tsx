import styled from "styled-components";
import { NavLink } from "react-router-dom";

interface CustomProps {
  current?: boolean;
  isRootPath?: boolean;
}

export const Nav = styled.div<CustomProps>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme, isRootPath }) =>
    isRootPath ? theme.palette.transparent : theme.palette.primary.background};
  z-index: 1;
  transition: ${({ isRootPath }) => (isRootPath ? "all 0.8s" : "all 2s")};
`;

export const LinkContainer = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.palette.primary.text};
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s;
  font-size: 18px;
  font-variant: small-caps;

  &:hover {
    color: ${({ theme }) => theme.palette.accent.text};
  }
`;

export const Languages = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const Language = styled.div<CustomProps>`
  font-size: 12px;
  font-variant: small-caps;
  cursor: pointer;
  margin: 0 4px;
  color: ${({ current, theme }) =>
    current ? theme.palette.accent.text : theme.palette.primary.text};
  transition: all 0.4s;

  &:hover {
    color: ${({ theme }) => theme.palette.accent.textLight};
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
