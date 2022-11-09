import { useTranslation } from "react-i18next";
import { motion, MotionProps } from "framer-motion";
import {
  HamburgerMenu,
  LangItem,
  LangMenu,
  Logo,
  LogoImg,
  Nav,
  NavItem,
  NavMenu,
} from "./styles";
import { NavbarProps } from "../../types";
import LogoSvg from "../../images/background/logo.svg";
import { Sidebar } from "../Sidebar/Sidebar";

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

export const Navbar = ({
  hideNav,
  isSidebarOpen,
  setSidebarOpen,
  setFastTransition,
}: NavbarProps) => {
  const checkToggleSidebar = () => {
    if (isSidebarOpen) {
      setSidebarOpen(!isSidebarOpen);
    } else {
      setFastTransition(true);
    }
  };
  const [t, i18n] = useTranslation("nav");
  const navs = t("info", { returnObjects: true });

  return (
    <>
      <Nav hideNav={hideNav ? 1 : 0}>
        <Logo to="/" onClick={checkToggleSidebar}>
          <LogoImg src={LogoSvg} alt="logo" />
        </Logo>
        <NavMenu>
          {navs.map((nav, key) => (
            <NavItem
              key={key}
              to={nav.href}
              onClick={() => setFastTransition(true)}
            >
              {nav.title}
            </NavItem>
          ))}
        </NavMenu>
        <LangMenu>
          <LangItem
            onClick={() => i18n.changeLanguage("en")}
            current={["en", "en-US"].includes(i18n.language) ? 1 : 0}
          >
            EN
          </LangItem>
          <LangItem
            onClick={() => i18n.changeLanguage("es")}
            current={["es", "es-ES"].includes(i18n.language) ? 1 : 0}
          >
            ES
          </LangItem>
        </LangMenu>
        <HamburgerMenu onClick={() => setSidebarOpen(!isSidebarOpen)}>
          <MenuBars isOpen={isSidebarOpen} />
        </HamburgerMenu>
      </Nav>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setFastTransition={setFastTransition}
      />
    </>
  );
};
