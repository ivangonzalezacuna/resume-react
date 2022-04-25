import styled from "styled-components";
import { motion } from "framer-motion";
import Lottie from "react-lottie-player";

export const Container = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background: ${(props) => props.theme.background.initial};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const Animation = styled(Lottie)`
  height: min(70vh, 70vw);
  width: min(70vh, 70vw);
`;

export const LogoWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin-left: 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 23px;
  width: auto;
`;
