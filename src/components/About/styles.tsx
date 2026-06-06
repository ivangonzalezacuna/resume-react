import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutSection = styled.section`
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

export const BioBlock = styled.div`
  margin-top: 1.5rem;
  max-width: 640px;
`;

export const BioParagraph = styled.p`
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 16px;
  line-height: 1.75;
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
`;

export const DossierGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;
  margin-top: 48px;

  @media (min-width: 1280px) {
    grid-template-columns: 3fr 2fr;
  }
`;

export const SubHeading = styled.h3`
  font-family: ${({ theme }) => theme.font.technical};
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: ${({ theme }) => theme.text.muted};
  margin: 0 0 16px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.accent.slate};
`;

export const Card = styled(motion.div)`
  padding: 1.25rem;
  margin-top: 12px;
  border: 1px solid ${({ theme }) => theme.accent.slate};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.surface.low};

  &:first-of-type {
    margin-top: 0;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: start;
  }
`;

export const DegreeName = styled.h4`
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 15px;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
  margin: 0;
  flex: 1 1 auto;
`;

export const MetaColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex-shrink: 0;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

export const MonoTag = styled.span`
  font-family: ${({ theme }) => theme.font.technical};
  font-size: 12px;
  color: ${({ theme }) => theme.text.muted};
  letter-spacing: 0.02em;
  white-space: nowrap;
`;

export const DescriptionList = styled.ul`
  margin: 0;
  padding: 0 0 0 20px;
  list-style: disc;
`;

export const DescriptionItem = styled.li`
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 14px;
  color: ${({ theme }) => theme.text.primary};
  line-height: 1.65;
  margin-bottom: 4px;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 12px;
  padding-top: 10px;
  border-top: 1px solid ${({ theme }) => theme.accent.slate};
  opacity: 0.75;
`;

export const LanguageList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const LanguageItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 14px 0;
  border-bottom: 1px solid ${({ theme }) => theme.accent.slate};

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const LanguageName = styled.span`
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text.primary};
`;

export const ProficiencyTag = styled.span`
  font-family: ${({ theme }) => theme.font.technical};
  font-size: 12px;
  color: ${({ theme }) => theme.text.muted};
  letter-spacing: 0.02em;
`;
