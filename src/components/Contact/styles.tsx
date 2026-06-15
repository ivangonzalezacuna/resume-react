import styled from "styled-components";
import { m } from "framer-motion";

export const ContactSection = styled.section`
  width: 100%;
  padding: 96px 24px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.surface.base};

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

export const Callout = styled(m.p)`
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.text.muted};
  line-height: 1.7;
  max-width: 640px;
  margin: 0 0 56px;
`;

export const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const LinkItem = styled(m.li)`
  border-bottom: 1px solid ${({ theme }) => theme.border.subtle};

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.border.subtle};
  }
`;

export const ChannelRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 28px 0;
`;

export const ChannelAnchor = styled.a`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text.primary};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent.cyan};
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
  }
`;

export const ChannelName = styled.span`
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 500;
  letter-spacing: -0.01em;
`;

export const ChannelMeta = styled.span`
  font-family: ${({ theme }) => theme.font.technical};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.text.muted};
  letter-spacing: 0.08em;
  text-transform: uppercase;

  ${ChannelAnchor}:hover & {
    color: ${({ theme }) => theme.accent.cyan};
  }
`;

export const CopyButton = styled.button<{ $copied: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-left: 12px;
  flex-shrink: 0;
  color: ${({ theme, $copied }) =>
    $copied ? theme.accent.cyan : theme.text.muted};
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.accent.cyan};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.accent.cyan};
    outline-offset: 2px;
  }
`;
