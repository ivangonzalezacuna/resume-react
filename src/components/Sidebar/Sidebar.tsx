import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { SidebarProps } from "../../types";
import { container, langs, links, menu } from "./animations";
import {
  SidebarContainer,
  SidebarLink,
  SidebarLinkItem,
  SidebarMenu,
  LangMenu,
  LangItem,
} from "./styles";

export const Sidebar = ({
  isSidebarOpen,
  setSidebarOpen,
  setFastTransition,
}: SidebarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const closeSidebar = (target: EventTarget) => {
    if (ref.current === target) {
      setSidebarOpen(!isSidebarOpen);
    }
  };

  const [t, i18n] = useTranslation("nav");
  const navs = t("info", { returnObjects: true });

  const switchPage = () => {
    setFastTransition(false);
    setSidebarOpen(!setSidebarOpen);
  };

  return (
    <>
      <SidebarContainer
        ref={ref}
        onClick={({ target }) => closeSidebar(target)}
        initial="initial"
        animate={isSidebarOpen ? "animate" : "close"}
        variants={container}
      >
        <LangMenu
          initial="initial"
          animate={isSidebarOpen ? "animate" : "close"}
          variants={langs}
        >
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
        <SidebarMenu variants={menu}>
          {navs.map((nav, key) => (
            <SidebarLinkItem key={key} variants={links}>
              <SidebarLink to={nav.href} onClick={switchPage}>
                {nav.title}
              </SidebarLink>
            </SidebarLinkItem>
          ))}
        </SidebarMenu>
      </SidebarContainer>
    </>
  );
};
