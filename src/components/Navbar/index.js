import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  HamburgerMenu,
  LangItem,
  LangMenu,
  Logo,
  LogoImg,
  Nav,
  NavItem,
  NavMenu,
} from "./NavbarElements";
import Sidebar from "../Sidebar";

const Stroke = (props) => {
  return (
    <motion.path
      fill="transparent"
      strokeLinecap="round"
      strokeWidth="3.5"
      {...props}
    />
  );
};

const MenuBars = ({ isOpen }) => {
  const transition = { duration: 0.3 };
  return (
    <svg width="28" height="28" viewBox="0 0 28 28">
      <Stroke
        stroke="#f9f9f9"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 2 6.5 L 26 6.5" },
          open: { d: "M 5.5 22.5 L 22.5 5.5" },
        }}
        transition={transition}
      />
      <Stroke
        d="M 6 14 L 26 14"
        stroke="#f9f9f9"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={transition}
      />
      <Stroke
        stroke="#f9f9f9"
        animate={isOpen ? "open" : "closed"}
        initial={false}
        variants={{
          closed: { d: "M 4 21.5 L 26 21.5" },
          open: { d: "M 5.5 5.5 L 22.5 22.5" },
        }}
        transition={transition}
      />
    </svg>
  );
};

const Navbar = ({
  hideNav,
  isSidebarOpen,
  toggleSidebar,
  updateFastTransition,
  currentLang,
  setSpanish,
  setEnglish,
}) => {
  const checkToggleSidebar = (e) => {
    if (isSidebarOpen) {
      e.preventDefault();
      toggleSidebar();
    } else {
      updateFastTransition(true);
    }
  };
  const [t] = useTranslation("data");
  var data = t("nav", { returnObjects: true });
  var logo = t("logo");

  const switchPage = () => {
    updateFastTransition(true);
  };

  return (
    <>
      <Nav hideNav={hideNav}>
        <Logo to="/" onClick={checkToggleSidebar}>
          <LogoImg src={logo} alt="logo" />
        </Logo>
        <NavMenu>
          {data.info.map((navData, index) => (
            <NavItem key={index} to={navData.link} onClick={switchPage}>
              {navData.title}
            </NavItem>
          ))}
        </NavMenu>
        <LangMenu>
          <LangItem
            onClick={setEnglish}
            current={
              currentLang === "en" || currentLang === "en-US" ? true : false
            }
          >
            EN
          </LangItem>
          <LangItem
            onClick={setSpanish}
            current={
              currentLang === "es" || currentLang === "es-ES" ? true : false
            }
          >
            ES
          </LangItem>
        </LangMenu>
        <HamburgerMenu onClick={toggleSidebar} sidebarOpen={isSidebarOpen}>
          <MenuBars isOpen={isSidebarOpen} />
        </HamburgerMenu>
      </Nav>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        updateFastTransition={updateFastTransition}
        currentLang={currentLang}
        setSpanish={setSpanish}
        setEnglish={setEnglish}
        data={data}
      />
    </>
  );
};

export default Navbar;
