import { motion, MotionProps } from "framer-motion";
import {
  HamburgerMenu,
  LanguagesWrapper,
  LinkContainer,
  Nav,
  NavItem,
} from "./styles";
import { Sidebar } from "../Sidebar";
import { Logo } from "../Logo";
import { Languages } from "../../atoms";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const Stroke = (props: MotionProps) => {
  return (
    <motion.path
      stroke="#f9f9f9"
      fill="transparent"
      strokeLinecap="round"
      strokeWidth="3.5"
      transition={{ duration: 0.3 }}
      {...props}
    />
  );
};

const MenuBars = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28">
      <Stroke
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 2 6.5 L 26 6.5" },
          open: { d: "M 5.5 22.5 L 22.5 5.5" },
        }}
      />
      <Stroke
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { opacity: 1, d: "M 6 14 L 26 14" },
          open: { opacity: 0 },
        }}
      />
      <Stroke
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 4 21.5 L 26 21.5" },
          open: { d: "M 5.5 5.5 L 22.5 22.5" },
        }}
      />
    </svg>
  );
};

export const Navbar = (props: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}) => {
  const location = useLocation();
  const { isOpen, toggleIsOpen } = props;
  const [t] = useTranslation("nav");
  const navs = t("info", { returnObjects: true });

  const closeIfOpen = () => {
    if (isOpen) {
      toggleIsOpen();
    }
  };
  return (
    <Nav isRootPath={location.pathname === "/"}>
      <Logo closeIfOpen={closeIfOpen} />
      <LinkContainer>
        {navs.map((val, key) => (
          <NavItem key={key} to={val.href}>
            {val.title}
          </NavItem>
        ))}
      </LinkContainer>
      <HamburgerMenu onClick={props.toggleIsOpen}>
        <MenuBars isOpen={props.isOpen} />
      </HamburgerMenu>
      <LanguagesWrapper>
        <Languages />
      </LanguagesWrapper>
      <Sidebar {...props} />
    </Nav>
  );
};
