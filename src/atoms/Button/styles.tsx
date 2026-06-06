import styled, { css } from "styled-components";

type BtnVariant = "primary" | "secondary";

export const HrefBtn = styled.a<{ $variant?: BtnVariant }>`
  display: inline-flex;
  align-items: center;
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 0.875rem;
  font-weight: 500;
  padding: 8px 18px;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
  white-space: nowrap;

  ${({ $variant = "secondary", theme }) =>
    $variant === "primary"
      ? css`
          color: ${theme.accent.cyan};
          border: 1px solid ${theme.accent.cyan};
          background: transparent;
          &:hover {
            background: rgba(47, 217, 244, 0.08);
          }
        `
      : css`
          color: ${theme.text.muted};
          border: 1px solid ${theme.accent.slate};
          background: transparent;
          &:hover {
            background: rgba(68, 71, 72, 0.3);
            color: ${theme.text.primary};
          }
        `}
`;
