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
  background: ${({ hideNav, theme: { background } }) =>
    hideNav ? background.transparent : background.primary};
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
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const LangMenu = styled.div`
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LangItem = styled.div<CustomProps>`
  font-size: 12px;
  cursor: pointer;
  margin: 0 4px 0 4px;
  color: ${({ current, theme: { colors } }) =>
    current ? colors.accent : colors.primary};
  transition: all 0.4s;

  &:hover {
    color: ${(props) => props.theme.colors.accent};
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
