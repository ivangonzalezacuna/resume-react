import { SectionId } from "../../hooks/useActiveSection";
import {
  SidebarContainer,
  SidebarOverlay,
  SidebarNav,
  SidebarItem,
} from "./styles";

const NAV_LINKS: { label: string; id: SectionId }[] = [
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

interface SidebarProps {
  isOpen: boolean;
  close: () => void;
  activeSection: SectionId;
}

export const Sidebar = ({ isOpen, close, activeSection }: SidebarProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: SectionId,
  ) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    close();
  };

  return (
    <>
      {isOpen && <SidebarOverlay onClick={close} />}
      <SidebarContainer $isOpen={isOpen}>
        <SidebarNav>
          {NAV_LINKS.map(({ label, id }) => (
            <SidebarItem
              key={id}
              href={`#${id}`}
              $active={activeSection === id}
              onClick={(e) => handleClick(e, id)}
            >
              {label}
            </SidebarItem>
          ))}
        </SidebarNav>
      </SidebarContainer>
    </>
  );
};
