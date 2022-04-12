import styled from "styled-components";
import { motion } from "framer-motion";

export const LogoWrap = styled(motion.div)`
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

export const Logo = styled.img`
  height: 80px;
  width: 80px;
`;
