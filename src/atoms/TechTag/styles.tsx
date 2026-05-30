import styled from "styled-components";
import { motion } from "framer-motion";

export const Tech = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  margin: 4px;
  border-radius: 12px;
  font-size: 14px;
  line-height: 20px;
  background-color: ${({ theme }) => theme.palette.accent.textDark};
`;

export const TechName = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.primary.text};
`;

export const TechIcon = styled.img`
  width: 14px;
  height: 14px;
  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.palette.primary.text};
  }
`;
