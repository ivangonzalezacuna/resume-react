import styled from "styled-components";
import { motion } from "framer-motion";

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 8px 0;
`;

export const SocialIcon = styled(motion.a)`
  font-size: 24px;
  margin: 0 8px;
  color: ${({ theme }) => theme.palette.primary.text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    margin: 0 4px;
  }
`;
