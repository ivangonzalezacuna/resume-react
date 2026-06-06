import styled from "styled-components";

export const SidebarOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 98;
  background: rgba(10, 12, 13, 0.6);
`;

export const SidebarContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: 240px;
  height: 100vh;
  background-color: ${({ theme }) => theme.surface.low};
  border-left: 1px solid ${({ theme }) => theme.accent.slate};
  z-index: 99;
  display: flex;
  flex-direction: column;
  padding: 80px 24px 40px;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "100%")});
  transition: transform 0.3s ease;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const SidebarItem = styled.a<{ $active: boolean }>`
  text-decoration: none;
  font-family: ${({ theme }) => theme.font.narrative};
  font-size: 18px;
  font-weight: 500;
  padding: 16px 0;
  color: ${({ $active, theme }) => ($active ? theme.accent.cyan : theme.text.muted)};
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.text.primary};
  }
`;
