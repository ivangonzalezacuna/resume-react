import styled from 'styled-components'
import { final } from '../../data/palette'
import { Link } from 'react-scroll'

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: ${({ scrollNav }) => (scrollNav ? final.background : 'transparent')};

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-height: 400px) {
    background: transparent;
  }
`

export const Logo = styled(Link)`
  color: ${final.background_light};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-height: 400px) {
    display: none;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-height: 400px) {
    display: none;
  }
`

export const NavMenuLink = styled(Link)`
  color: ${final.background_light};
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  
  &.active {
    color: ${final.foreground_light2};
    transform: scale(1.03);
  }

  &:hover {
    color: ${final.foreground_light2};
    transform: scale(1.03);
  }
`

export const NavLang = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 24px;
  border-radius: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-height: 400px) {
    display: none;
  }
`

export const NavLangItem = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin: 0 4px 0 4px;
  color: ${({ current }) => (current ? final.foreground_light2 : final.background_light)};
`