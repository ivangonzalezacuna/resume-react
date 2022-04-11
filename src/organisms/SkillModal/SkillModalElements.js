import styled from "styled-components";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(30, 30, 30, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

export const ModalContainer = styled(motion.div)`
  height: auto;
  padding: 28px 3px 3px 3px;
  width: 80vw;
  max-width: 400px;
  background: ${(props) => props.theme.background.primary};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px ${(props) => props.theme.colors.accentDark};
  border: 1px solid ${(props) => props.theme.colors.accentDark};
`;

export const CloseIcon = styled(MdClose)`
  position: absolute;
  top: 0;
  right: 0;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;
  margin: 4px;
  cursor: pointer;
`;

export const ModalContentWrap = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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

export const Name = styled(motion.h2)`
  font-weight: bold;
  text-align: center;
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const LevelWrap = styled(motion.div)`
  width: 80%;
  height: 10px;
  background: ${(props) => props.theme.background.secondary};
  border-radius: 50px;
  margin: 15px 0 20px 0;
  display: flex;
  align-items: center;
`;

export const LevelBar = styled(motion.div)`
  background: ${(props) => props.theme.colors.accent};
  height: 100%;
  border-radius: 50px;
`;

export const LevelValue = styled(motion.p)`
  font-size: 15px;
  position: relative;
  top: 16px;
  transform: translateX(-50%);
  font-weight: bold;
  color: ${(props) => props.theme.colors.accent};
`;
