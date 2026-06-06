import styled from "styled-components";
import { motion } from "framer-motion";

export const SkillsSection = styled.section`
  width: 100%;
  padding: 96px 24px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 96px 48px;
  }

  @media (min-width: 1280px) {
    padding: 120px 80px;
  }
`;

export const SectionInner = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

export const CategoryColumn = styled(motion.div)`
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.accent.slate};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.surface.low};
`;

export const CategoryHeader = styled.h3`
  font-family: ${({ theme }) => theme.font.technical};
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.text.muted};
  margin: 0 0 12px 0;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
