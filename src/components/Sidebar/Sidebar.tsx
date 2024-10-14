import { useTranslation } from "react-i18next";
import { container, langs, menu } from "./animations";
import {
  Container,
  Menu,
  MenuItem,
  MenuItemLink,
  LanguagesWrapper,
} from "./styles";
import { Languages } from "../../atoms";

export const Sidebar = (props: {
  isOpen: boolean;
  toggleIsOpen: () => void;
}) => {
  const { isOpen, toggleIsOpen } = props;
  const [t] = useTranslation("nav");
  const navs = t("info", { returnObjects: true });

  return (
    <Container
      initial="initial"
      animate={isOpen ? "animate" : "close"}
      variants={container}
    >
      <Menu variants={menu}>
        {navs.map((nav, key) => (
          <MenuItem key={key}>
            <MenuItemLink to={nav.href} onClick={toggleIsOpen}>
              {nav.title}
            </MenuItemLink>
          </MenuItem>
        ))}
      </Menu>
      <LanguagesWrapper
        initial="initial"
        animate={isOpen ? "animate" : "close"}
        variants={langs}
      >
        <Languages onClick={toggleIsOpen} />
      </LanguagesWrapper>
    </Container>
  );
};
