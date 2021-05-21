import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink as Link } from 'react-router-dom'
import { HiOutlineChevronDoubleDown as Icon } from 'react-icons/hi'

export const HeaderSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  cursor: default;
`

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`

export const HeaderContainer = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.background.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(0,0,0,0.2) 0%,
      rgba(0,0,0,0.3) 75%,
      rgba(0,0,0,0.9) 100%),
      linear-gradient(
        180deg, 
        rgba(0,0,0,0.2) 0%, 
        transparent 100%);
    z-index: 2;
  }
`

export const HeaderBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-color: ${props => props.theme.background.primary};
`

export const HeaderContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: calc(100% - 100px);
  color: ${props => props.theme.colors.primary};

  @media screen and (max-width: 500px) {
    width: calc(100% - 60px);
  }
`

export const HeaderName = styled(motion.h1)`
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  text-align: left;
  margin-bottom: 0.8rem;

  @media screen and (max-height: 300px) {
    margin-bottom: 0.5rem;
  }
`

export const HeaderDescription = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.2rem);
  margin-bottom: 1.2rem;
  text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
  
  @media screen and (max-height: 300px) {
    margin-bottom: 0.8rem;
  }
`

export const HeaderContact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const HeaderSocialWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const SocialIcon = styled(motion.a)`
  font-size: 24px;
  margin: 0 8px;
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.4s;

  &:hover {
    color: #f9f9f9cc;
  }

  @media screen and (max-width: 500px) {
    margin: 20px 4px 0 4px;
  }
`

export const HeaderGoAboutWrap = styled(Link)`
  text-decoration: none;
  z-index: 3;
  height: auto;
  position: fixed;
  bottom: 0;
  margin: 6px;

  @media screen and (max-height: 300px) {
    right: 0;
    margin: 12px;
  }
`

export const HeaderGoAbout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const HeaderGoAboutText = styled.p`
  color: ${props => props.theme.colors.primary};
`

export const HeaderGoAboutIcon = styled(Icon)`
  color: ${props => props.theme.colors.primary};
`