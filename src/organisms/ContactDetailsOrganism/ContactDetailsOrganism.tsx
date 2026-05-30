import { useTranslation } from "react-i18next";
import {
  Container,
  TitleWrapper,
  Title,
  Content,
  Item,
  IconWrapper,
  Info,
  Type,
  Data,
} from "./styles";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { card, container, icon, item } from "./animations";

export const ContactDetailsOrganism = () => {
  const [t] = useTranslation("contact");
  const contacts = t("info", { returnObjects: true });

  return (
    <>
      <Container initial="initial" animate="animate" variants={container}>
        <TitleWrapper>
          <Title variants={item}>{t("sectionTitle")}</Title>
        </TitleWrapper>
        <Content>
          {contacts.map((contact) => (
            <Item key={contact.type} variants={card}>
              <IconWrapper variants={icon}>
                {contact.type === "email" && <FaEnvelope aria-hidden="true" />}
                {contact.type === "phone" && <FaPhoneAlt aria-hidden="true" />}
              </IconWrapper>
              <Info>
                <Type variants={item}>{contact.text}</Type>
                <Data
                  variants={item}
                  href={contact.href}
                  aria-label={`${contact.text}: ${contact.value}`}
                >
                  {contact.value}
                </Data>
              </Info>
            </Item>
          ))}
        </Content>
      </Container>
    </>
  );
};
