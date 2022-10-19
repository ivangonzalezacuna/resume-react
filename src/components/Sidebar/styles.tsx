import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface CustomProps {
  current?: number;
}

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
  background: ${({ theme }) => theme.palette.primary.background};
`;

export const SidebarMenu = styled(motion.div)`
  margin: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SidebarLinkItem = styled(motion.div)`
  font-weight: 400;
  margin: 15px;
  font-size: clamp(1.3rem, 8vh, 1.7rem);
  text-align: center;

  @media screen and (max-height: 300px) {
    margin: 6px;
  }
`;

export const SidebarLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.text};
  transition: all 0.4s;
  font-variant: small-caps;
  font-size: 2.5rem;

  &:hover {
    color: ${({ theme }) => theme.palette.accent.text};
  }
`;

export const LangMenu = styled(motion.div)`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
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
