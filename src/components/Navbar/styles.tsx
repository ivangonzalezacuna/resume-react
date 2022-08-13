import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

interface CustomProps {
  hideNav?: number;
  current?: number;
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
  background: ${({ hideNav, theme }) =>
    hideNav ? theme.palette.transparent : theme.palette.primary.background};
  z-index: 15;
  transition: all 0.3s;
`;

export const Logo = styled(Link)`
  justify-self: start;
  text-decoration: none;
  margin-left: 2rem;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  height: 23px;
  width: auto;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
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

export const LangMenu = styled.div`
  color: ${({ theme }) => theme.palette.primary.text};
  display: flex;
  align-items: center;
  margin: 0 1rem;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LangItem = styled.div<CustomProps>`
  font-size: 14px;
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

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1rem;
    cursor: pointer;
    text-decoration: none;
  }
`;
