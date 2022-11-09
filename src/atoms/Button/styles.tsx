import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

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

export const LinkBtn = styled(NavLink)<CustomProps>`
  font-size: ${({ small, theme }) =>
    small ? theme.text.button.static : theme.text.button.dynamic};
  padding: ${({ small }) => (small ? "6px 14px" : "8px 20px")};
  background: ${({ theme }) => theme.palette.transparent};
  color: ${({ dark, theme }) =>
    dark ? theme.palette.secondary.text : theme.palette.primary.text};
  border: ${({ dark, theme }) =>
    dark
      ? `3px solid ${theme.palette.secondary.text}`
      : `3px solid ${theme.palette.primary.text}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ dark, theme }) =>
      dark
        ? theme.palette.primary.background
        : theme.palette.secondary.background};
    color: ${({ dark, theme }) =>
      dark ? theme.palette.primary.text : theme.palette.secondary.text};
    border: ${({ dark, theme }) =>
      dark
        ? `3px solid ${theme.palette.primary.background}`
        : `3px solid ${theme.palette.secondary.background}`};
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
  font-size: ${({ small, theme }) =>
    small ? theme.text.button.static : theme.text.button.dynamic};
  padding: ${({ small }) => (small ? "6px 14px" : "8px 20px")};
  background: ${({ theme }) => theme.palette.transparent};
  color: ${({ dark, theme }) =>
    dark ? theme.palette.secondary.text : theme.palette.primary.text};
  border: ${({ dark, theme }) =>
    dark
      ? `3px solid ${theme.palette.secondary.text}`
      : `3px solid ${theme.palette.primary.text}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ dark, theme }) =>
      dark
        ? theme.palette.primary.background
        : theme.palette.secondary.background};
    color: ${({ dark, theme }) =>
      dark ? theme.palette.primary.text : theme.palette.secondary.text};
    border: ${({ dark, theme }) =>
      dark
        ? `3px solid ${theme.palette.primary.background}`
        : `3px solid ${theme.palette.secondary.background}`};
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
  font-size: ${({ small, theme }) =>
    small ? theme.text.button.static : theme.text.button.dynamic};
  padding: ${({ small }) => (small ? "6px 14px" : "8px 20px")};
  background: ${({ theme }) => theme.palette.transparent};
  color: ${({ dark, theme }) =>
    dark ? theme.palette.secondary.text : theme.palette.primary.text};
  border: ${({ dark, theme }) =>
    dark
      ? `3px solid ${theme.palette.secondary.text}`
      : `3px solid ${theme.palette.primary.text}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ dark, theme }) =>
      dark
        ? theme.palette.primary.background
        : theme.palette.secondary.background};
    color: ${({ dark, theme }) =>
      dark ? theme.palette.primary.text : theme.palette.secondary.text};
    border: ${({ dark, theme }) =>
      dark
        ? `3px solid ${theme.palette.primary.background}`
        : `3px solid ${theme.palette.secondary.background}`};
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
  font-size: ${({ small, theme }) =>
    small ? theme.text.button.static : theme.text.button.dynamic};
  padding: ${({ small }) => (small ? "6px 14px" : "8px 20px")};
  background: ${({ theme }) => theme.palette.transparent};
  color: ${({ dark, theme }) =>
    dark ? theme.palette.secondary.text : theme.palette.primary.text};
  border: ${({ dark, theme }) =>
    dark
      ? `3px solid ${theme.palette.secondary.text}`
      : `3px solid ${theme.palette.primary.text}`};
  border-radius: 50px;
  outline: none;
  text-decoration: none;
  transition: all 0.4s;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ dark, theme }) =>
      dark
        ? theme.palette.primary.background
        : theme.palette.secondary.background};
    color: ${({ dark, theme }) =>
      dark ? theme.palette.primary.text : theme.palette.secondary.text};
    border: ${({ dark, theme }) =>
      dark
        ? `3px solid ${theme.palette.primary.background}`
        : `3px solid ${theme.palette.secondary.background}`};
  }

  @media screen and (max-width: 500px) {
    padding: ${({ small }) => (small ? "6px 12px" : "8px 16px")};
  }
`;
