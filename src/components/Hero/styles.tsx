import styled from "styled-components";
import { m } from "framer-motion";

export const HeroSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 88px 24px 48px;

  @media (min-width: 768px) {
    padding: 100px 48px 60px;
    align-items: center;
  }

  @media (min-width: 1280px) {
    padding: 120px 80px 80px;
  }
`;

export const HeroInner = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr auto;
    gap: 64px;
    align-items: center;
  }
`;

export const LeftBlock = styled(m.div)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeroName = styled.h1`
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0;
`;

export const HeroRole = styled.p`
  font-family: ${({ theme }) => theme.font.technical};
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text.muted};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0;
`;

export const HeroSummary = styled.p`
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.muted};
  line-height: 1.7;
  max-width: 480px;
  margin: 0;
`;

export const CTARow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 8px;
`;

export const RightBlock = styled(m.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  order: -1;

  @media (min-width: 768px) {
    order: 0;
  }
`;

export const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.border.subtle};
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
