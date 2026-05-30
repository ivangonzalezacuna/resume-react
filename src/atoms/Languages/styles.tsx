import styled from "styled-components";

interface CustomProps {
  currentLang?: boolean;
}

export const Language = styled.div<CustomProps>`
  font-size: 12px;
  font-variant: small-caps;
  cursor: pointer;
  margin: 0 4px;
  color: ${({ currentLang, theme }) =>
    currentLang ? theme.palette.accent.text : theme.palette.primary.text};
  transition: all 0.4s;

  &:hover {
    color: ${({ theme }) => theme.palette.accent.textLight};
  }
`;
