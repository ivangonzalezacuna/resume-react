import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 50px;
  justify-content: start;
`;

export const Title = styled(motion.p)`
  color: ${({ theme }) => theme.palette.primary.text};
  font-size: 22px;
  font-weight: 700;
  letter-spacing: 2px;
  font-variant: small-caps;
`;

export const Content = styled.div`
  width: 90%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  margin: 5px 0;
  padding: 14px;
  border: 1px solid ${({ theme }) => theme.palette.accent.textDark};
  box-shadow: 1px 1px 1px ${({ theme }) => theme.palette.accent.textDark};
  border-radius: 6px;

  @media screen and (max-width: 440px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 14px 0;
  }
`;

export const IconWrapper = styled(motion.div)`
  height: 50px;
  width: 50px;
  border: 1px solid ${({ theme }) => theme.palette.accent.textDark};
  box-shadow: 1px 1px 1px ${({ theme }) => theme.palette.accent.textDark};
  color: ${({ theme }) => theme.palette.primary.text};
  font-size: 24px;
  margin-left: 10px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 440px) {
    margin-bottom: 20px;
    height: 45px;
    width: 45px;
    font-size: 22px;
  }
`;

export const Info = styled.div`
  margin-left: 20px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (max-width: 440px) {
    margin-left: 10px;
  }
`;

export const Type = styled(motion.h1)`
  color: ${({ theme }) => theme.palette.primary.text};
  font-size: clamp(16px, 4vw, 20px);
  margin-bottom: 14px;
  font-variant: small-caps;

  @media screen and (max-width: 440px) {
    margin-bottom: 8px;
  }
`;

export const Data = styled(motion.a)`
  color: ${({ theme }) => theme.palette.primary.text};
  font-size: clamp(12px, 4vw, 15px);
  font-weight: 400;
  text-decoration: none;
  transition: all 0.4s;
  cursor: pointer;
  opacity: 1;

  &:hover {
    color: ${({ theme }) => theme.palette.accent.text};
  }
`;
