import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: fixed;
  top: 8px;
  right: 8px;
  width: max-content;
  border-radius: 10px;
  z-index: 5;
`;

export const Menu = styled(motion.div)`
  margin: 50px 0 0 0;
`;

export const MenuItem = styled.div`
  font-weight: 400;
  margin: 5px 25px;
  text-align: center;
`;

export const MenuItemLink = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
`;

export const LanguagesWrapper = styled(motion.div)`
  margin: 20px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: end;
`;
