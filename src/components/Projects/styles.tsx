import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsSection = styled.section`
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

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled(motion.div)`
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.accent.slate};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.surface.low};
  display: flex;
  flex-direction: column;
`;

export const CardHeader = styled.div`
  margin-bottom: 12px;
`;

export const ProjectTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  margin: 0 0 6px 0;
  line-height: 1.4;
`;

export const ProjectTitleLink = styled.a`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.accent.cyan};
  text-decoration: none;
  margin: 0 0 6px 0;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  line-height: 1.4;

  svg {
    width: 13px;
    height: 13px;
    flex-shrink: 0;
    opacity: 0.75;
  }

  &:hover {
    text-decoration: underline;

    svg {
      opacity: 1;
    }
  }
`;

export const Summary = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text.muted};
  line-height: 1.65;
  margin: 0 0 12px 0;
`;

export const HighlightList = styled.ul`
  margin: 0 0 12px 0;
  padding: 0 0 0 20px;
  list-style: disc;
  flex: 1;
`;

export const HighlightItem = styled.li`
  font-size: 13px;
  color: ${({ theme }) => theme.text.primary};
  line-height: 1.6;
  margin-bottom: 4px;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid ${({ theme }) => theme.accent.slate};
  opacity: 0.75;
`;
