import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100dvw;
  min-height: 100dvh;
  margin-bottom: 100px;
  height: auto;
  background: ${({ theme }) => theme.palette.primary.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: default;
`;

export const AnimateWrapper = styled(motion.div)``;
