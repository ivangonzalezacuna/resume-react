import { useTranslation } from "react-i18next";
import { container, langs, menu } from "./animations";
import {
  Container,
  Menu,
  MenuItem,
  MenuItemLink,
  Languages,
  Language,
} from "./styles";

export const Sidebar = (props: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}) => {
  const { isOpen, toggleIsOpen } = props;
  const [t, i18n] = useTranslation("nav");
  const navs = t("info", { returnObjects: true });

  const switchPage = () => {
    toggleIsOpen();
  };

  return (
    <Container
      initial="initial"
      animate={isOpen ? "animate" : "close"}
      variants={container}
    >
      <Menu variants={menu}>
        {navs.map((nav, key) => (
          <MenuItem key={key}>
            <MenuItemLink to={nav.href} onClick={switchPage}>
              {nav.title}
            </MenuItemLink>
          </MenuItem>
        ))}
      </Menu>
      <Languages
        initial="initial"
        animate={isOpen ? "animate" : "close"}
        variants={langs}
      >
        <Language
          onClick={() => {
            i18n.changeLanguage("en");
            switchPage();
          }}
          current={["en", "en-US"].includes(i18n.language)}
        >
          EN
        </Language>
        <Language
          onClick={() => {
            i18n.changeLanguage("es");
            switchPage();
          }}
          current={["es", "es-ES"].includes(i18n.language)}
        >
          ES
        </Language>
      </Languages>
    </Container>
  );
};
