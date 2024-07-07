import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface CustomProps {
  current?: boolean;
}

export const Container = styled(motion.div)`
  position: fixed;
  top: 8px;
  right: 8px;
  width: max-content;
  border-radius: 10px;
  z-index: 5;
  background: ${({ theme }) =>
    `linear-gradient(-45deg, ${theme.palette.primary.background},${theme.palette.accent.background},${theme.palette.accent.textDark})`};
  animation: gradient 3s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 30% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 30% 50%;
    }
  }
`;

export const Menu = styled(motion.div)`
  margin: 50px 0 0 0;
`;

export const MenuItem = styled.div`
  font-weight: 400;
  margin: 5px 25px;
  text-align: center;

  @media screen and (max-height: 300px) {
    margin: 6px;
  }
`;

export const MenuItemLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.text};
  transition: all 0.4s;
  font-variant: small-caps;
  font-size: 1.3rem;

  &:hover {
    color: ${({ theme }) => theme.palette.accent.text};
  }
`;

export const LanguagesWrapper = styled(motion.div)`
  margin: 20px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
