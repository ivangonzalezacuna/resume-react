import styled from "styled-components";
import { motion } from "framer-motion";

export const SplashContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: ${({ theme }) => theme.palette.splashBg};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
  z-index: 100;
`;

export const SplashText = styled(motion.h1)`
  color: ${({ theme }) => theme.palette.primary.text};
`;

export const SplashLogo = styled.img`
  height: 23px;
  width: auto;
`;
