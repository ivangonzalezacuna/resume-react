import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'
import { final } from '../../data/palette'

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: ${final.background};
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? '100%' : '0%')};
  top: ${({ isSidebarOpen }) => (isSidebarOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;

  @media screen and (max-width: 400px) {
    right: 1rem;
  }
`

export const CloseIcon = styled(FaTimes)`
  color: ${final.background_light};
`

export const SidebarWrapper = styled.div`
  color: ${final.background_light};
  width: 100%;
  margin-top: 3.5rem;
  margin-bottom: 3.5rem;
  height: calc(100% - 7rem);
  display: flex;
  align-items: center;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 48px;
  text-align: center;
  width: 100%;

  @media screen and (max-height: 440px) {
    grid-gap: 32px;
  }

  @media screen and (max-height: 360px) {
    grid-gap: 24px;
  }

  @media screen and (max-height: 320px) {
    grid-gap: 12px;
  }

  @media screen and (max-height: 280px) {
    grid-gap: 4px;
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(1.5rem, 4vw, 2rem);
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: ${final.background_light};
  cursor: pointer;

  &:hover {
    color: ${final.foreground_light2};
    transition: 0.2s ease-in-out;
  }
`

export const Lang = styled.div`
  position: absolute;
  top: 1.6rem;
  left: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`

export const LangItem = styled.div`
  color: ${({ current }) => (current ? final.foreground_light2 : final.background_light)};
  font-size: 14px;
  cursor: pointer;
  margin: 0 4px 0 4px;
`

export const SocialMediaWrap = styled.div`
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SocialIconLink = styled.a`
  color: ${final.background_light};
  font-size: 28px;
  margin: 0 8px;
`