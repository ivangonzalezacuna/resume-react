import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink as Link } from 'react-router-dom'

export const SidebarContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #121212;
`

export const SidebarMenu = styled(motion.div)`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SidebarLinkItem = styled(motion.div)`
  font-weight: 400;
  margin: 10px;
  font-size: clamp(1.3rem, 8vh, 1.5rem);
  text-align: center;

  @media screen and (max-height: 300px) {
    margin: 6px;
  }
`

export const SidebarLink = styled(Link)`
  text-decoration: none;
  color: #f9f9f9;
  transition: 0.4s;

  &:hover {
    color: red;
  }
`

export const LangMenu = styled(motion.div)`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 40px;
  color: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`

export const LangItem = styled.div`
  font-size: 12px;
  cursor: pointer;
  margin: 0 4px 0 4px;
  color: ${({ current }) => current ? "red" : "#f9f9f9"};
  transition: 0.4s;

  &:hover {
    color: red;
  }
`