import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 8px;

  width: 90px;
  height: 90px;

  padding: 8px 4px;

  background-color: ${({ theme }) => theme.surface.low};

  border-radius: 4px;
`;

export const TechName = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text.primary};
`;

export const TechIcon = styled.img`
  width: 40px;
  height: 40px;
  svg {
    width: 100%;
    height: 100%;
  }
`;
