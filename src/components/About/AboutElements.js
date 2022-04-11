import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  margin-bottom: 100px;
  height: auto;
  background: ${(props) => props.theme.background.primary};
  display: flex;
  align-items: center;
  flex-direction: column;
  cursor: default;
`;
