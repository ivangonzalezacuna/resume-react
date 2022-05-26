import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink as Link } from "react-router-dom";

interface CustomProps {
  small: number;
  dark: number;
}

export const ButtonWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-self: center;
`;

export const FormButtonWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
`;

export const LinkBtn = styled(Link)<CustomProps>`
  font-size: ${({ small }) =>
    small ? "0.8rem" : "clamp(0.9rem, 3vw, 1.1rem)"};
  padding: ${({ small }) => (small ? "6px 14px" : "8px 20px")};
  background: ${(props) => props.theme.colors.transparent};
  color: ${({ dark, theme: { colors } }) =>
    dark ? colors.secondary : colors.primary};
  border: ${({ dark, theme: { colors } }) =>
    dark ? `3px solid ${colors.secondary}` : `3px solid ${colors.primary}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ dark, theme: { colors } }) =>
      dark ? colors.secondary : colors.primary};
    color: ${({ dark, theme: { colors } }) =>
      dark ? colors.primary : colors.secondary};
    border: ${({ dark, theme: { colors } }) =>
      dark ? `3px solid ${colors.secondary}` : `3px solid ${colors.primary}`};
  }

  @media screen and (max-width: 500px) {
    padding: ${({ small }) => (small ? "6px 12px" : "8px 16px")};
  }

  @media screen and (max-height: 300px) {
    padding: ${({ small }) => (small ? "6px 12px" : "8px 16px")};
    font-size: ${({ small }) => (small ? "0.8rem" : "0.9rem")};
  }
`;

export const CustomBtn = styled(motion.div)<CustomProps>`
  font-size: ${({ small }) =>
    small ? "0.8rem" : "clamp(0.9rem, 3vw, 1.1rem)"};
  padding: ${({ small }) => (small ? "6px 14px" : "8px 20px")};
  background: ${(props) => props.theme.colors.transparent};
  color: ${({ dark, theme: { colors } }) =>
    dark ? colors.secondary : colors.primary};
  border: ${({ dark, theme: { colors } }) =>
    dark ? `3px solid ${colors.secondary}` : `3px solid ${colors.primary}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ dark, theme: { colors } }) =>
      dark ? colors.secondary : colors.primary};
    color: ${({ dark, theme: { colors } }) =>
      dark ? colors.primary : colors.secondary};
    border: ${({ dark, theme: { colors } }) =>
      dark ? `3px solid ${colors.secondary}` : `3px solid ${colors.primary}`};
  }

  @media screen and (max-width: 500px) {
    padding: ${({ small }) => (small ? "6px 12px" : "8px 16px")};
  }

  @media screen and (max-height: 300px) {
    padding: ${({ small }) => (small ? "6px 12px" : "8px 16px")};
    font-size: ${({ small }) => (small ? "0.8rem" : "0.9rem")};
  }
`;

export const HrefBtn = styled.a<CustomProps>`
  font-size: ${({ small }) =>
    small ? "0.8rem" : "clamp(0.9rem, 3vw, 1.1rem)"};
  padding: ${({ small }) => (small ? "6px 14px" : "8px 20px")};
  background: ${(props) => props.theme.colors.transparent};
  color: ${({ dark, theme: { colors } }) =>
    dark ? colors.secondary : colors.primary};
  border: ${({ dark, theme: { colors } }) =>
    dark ? `3px solid ${colors.secondary}` : `3px solid ${colors.primary}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ dark, theme: { colors } }) =>
      dark ? colors.secondary : colors.primary};
    color: ${({ dark, theme: { colors } }) =>
      dark ? colors.primary : colors.secondary};
    border: ${({ dark, theme: { colors } }) =>
      dark ? `3px solid ${colors.secondary}` : `3px solid ${colors.primary}`};
  }

  @media screen and (max-width: 500px) {
    padding: ${({ small }) => (small ? "6px 12px" : "8px 16px")};
  }

  @media screen and (max-height: 300px) {
    padding: ${({ small }) => (small ? "6px 12px" : "8px 16px")};
    font-size: ${({ small }) => (small ? "0.8rem" : "0.9rem")};
  }
`;

export const FormBtn = styled.button<CustomProps>`
  font-size: ${({ small }) =>
    small ? "0.8rem" : "clamp(0.9rem, 3vw, 1.1rem)"};
  padding: ${({ small }) => (small ? "6px 14px" : "8px 20px")};
  background: ${(props) => props.theme.colors.transparent};
  color: ${({ dark, theme: { colors } }) =>
    dark ? colors.secondary : colors.primary};
  border: ${({ dark, theme: { colors } }) =>
    dark ? `3px solid ${colors.secondary}` : `3px solid ${colors.primary}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ dark, theme: { colors } }) =>
      dark ? colors.secondary : colors.primary};
    color: ${({ dark, theme: { colors } }) =>
      dark ? colors.primary : colors.secondary};
    border: ${({ dark, theme: { colors } }) =>
      dark ? `3px solid ${colors.secondary}` : `3px solid ${colors.primary}`};
  }

  @media screen and (max-width: 500px) {
    padding: ${({ small }) => (small ? "6px 12px" : "8px 16px")};
  }
`;
