import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ hideNav }) => hideNav ? 'transparent' : '#121212'};
  z-index: 30;
`

export const Logo = styled(Link)`
  color: #f9f9f9;
  justify-self: start;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: bold;
  margin-left: 2rem;
  cursor: pointer;
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavItem = styled(Link)`
  color: #f9f9f9;
  display: flex;
  align-items: center;
  margin: 0 0.8rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    color: red;
  }
`

export const LangMenu = styled.div`
  color: #f9f9f9;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const LangItem = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin: 0 4px 0 4px;
  color: #f9f9f9;
  transition: 0.4s;

  &:hover {
    color: red;
  }
`

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
`