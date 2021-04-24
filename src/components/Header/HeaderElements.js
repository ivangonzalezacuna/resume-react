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
  background: blue;
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
      linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
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
  background-color: #121212;
`

export const HeaderContent = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: calc(100% - 100px);
  color: #f9f9f9;
`

export const HeaderName = styled(motion.h1)`
  font-size: clamp(2rem, 8vw, 4rem);
  font-weight: 400;
  text-transform: uppercase;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  text-align: left;
  margin-bottom: 0.8rem;
`

export const HeaderDescription = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.2rem);
  margin-bottom: 1.2rem;
  text-shadow: 0px 0px 20px rgba(0,0,0,0.4);
`

export const HeaderContactBtnWrap = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-self: center;
`

export const HeaderContactBtn = styled(Link)`
  padding: 12px 32px;
  background: #f9f9f9;
  border-radius: 50px;
  color: #121212;
  text-decoration: none;
  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background: blue;
    color: #f9f9f9;
  }
`

export const HeaderExtraContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  position: fixed;
  background: red;
  bottom: 0;
  z-index: 3;
`

export const HeaderGoAboutWrap = styled(Link)`
  text-decoration: none;
  z-index: 3;
  height: auto;
  position: fixed;
  bottom: 0;
  margin: 6px;
`

export const HeaderGoAbout = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const HeaderGoAboutText = styled.p`
  color: #f9f9f9;
  
`

export const HeaderGoAboutIcon = styled(Icon)`
  color: #f9f9f9;
`

export const HeaderSocialWrap = styled.div`
  position: fixed;
  right: 0;
  z-index: 3;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const SocialIcon = styled.a`
  font-size: 24px;
  margin: 6px 8px;
  color: #f9f9f9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`