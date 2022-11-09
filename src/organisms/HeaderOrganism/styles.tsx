import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.palette.primary.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.3) 75%,
        rgba(0, 0, 0, 0.9) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  background-color: ${({ theme }) => theme.palette.primary.background};
`;

export const Content = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: calc(100% - 100px);
  color: ${({ theme }) => theme.palette.primary.text};

  @media screen and (max-width: 500px) {
    width: calc(100% - 60px);
  }
`;

export const Name = styled(motion.h1)`
  font-size: ${({ theme }) => theme.text.home.name.dynamic};
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 4px;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  text-align: left;
  margin-bottom: 0.8rem;

  @media screen and (max-height: 300px) {
    margin-bottom: 0.5rem;
  }
`;

export const Description = styled(motion.p)`
  font-size: ${({ theme }) => theme.text.home.desription.dynamic};
  margin-bottom: 1.2rem;
  text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
  font-variant: small-caps;

  @media screen and (max-height: 300px) {
    margin-bottom: 0.8rem;
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 20px;

  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`;
