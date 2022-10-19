import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

export const Container = styled(NavLink)`
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
`;

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.palette.primary.text};
  font-variant: small-caps;
`;

export const Icon = styled(HiOutlineChevronDoubleDown)`
  color: ${({ theme }) => theme.palette.primary.text};
`;
