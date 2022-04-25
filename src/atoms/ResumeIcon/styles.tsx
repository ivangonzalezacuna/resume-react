import styled from "styled-components";
import { motion } from "framer-motion";

interface CustomProps {
  row: number;
  header: number;
}

export const SkillWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 5px 0;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 1px 1px 1px ${(props) => props.theme.colors.accentDark};
  border: 1px solid ${(props) => props.theme.colors.accentDark};
  border-radius: 4px;
`;

export const SkillIcon = styled.img`
  height: 80px;
  width: 80px;
`;

export const SocialWrapper = styled.div<CustomProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  margin: 8px 0;
`;

export const SocialIcon = styled(motion.a)<CustomProps>`
  font-size: 24px;
  margin: ${({ row }) => (row ? "0 8px" : "8px 0")};
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  @media screen and (max-width: 500px) {
    margin: ${({ row }) => (row ? "0 4px" : "4px 0")};
    margin-top: ${({ header }) => (header ? "20px" : "0")};
  }
`;
