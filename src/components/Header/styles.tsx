import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  width: 100dvw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) =>
    `linear-gradient(-45deg, ${theme.palette.primary.background},${theme.palette.accent.background},${theme.palette.accent.textDark},${theme.palette.accent.text})`};

  background-size: 400% 400%;
  animation: gradient 15s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 30% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 30% 50%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60dvw;
  color: ${({ theme }) => theme.palette.primary.text};

  @media screen and (max-width: 760px) {
    width: 70dvw;
  }

  @media screen and (max-width: 480px) {
    width: 90dvw;
  }
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.palette.accent.text};
  font-size: ${({ theme }) => theme.text.home.name.dynamic};
  font-weight: 400;
  text-align: center;
  margin: 0.4rem 0;

  @media screen and (max-width: 760px) {
    margin: 0.3rem 0;
  }

  @media screen and (max-width: 480px) {
    margin: 0.2rem 0;
  }
`;

export const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.text.home.desription.dynamic};
  margin: 0.6rem 0;
  text-align: center;

  @media screen and (max-width: 760px) {
    margin: 0.4rem 0;
  }

  @media screen and (max-width: 480px) {
    margin: 0.2rem 0;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: "row";
  gap: 10px;
  margin: 1rem 0;
  font-size: 24px;

  @media screen and (max-width: 760px) {
    margin: 1.6rem 0;
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    gap: 8px;
    margin: 1.2rem 0;
    font-size: 20px;
  }
`;

export const ImgContainer = styled.div`
  height: 300px;
  width: 300px;
  border-radius: 50%;
  overflow: hidden;

  @media screen and (max-width: 760px) {
    height: 250px;
    width: 250px;
  }

  @media screen and (max-width: 480px) {
    max-height: 250px;
    max-width: 250px;
    height: 70dvw;
    width: 70dvw;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
  transition: transform 0.8s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
