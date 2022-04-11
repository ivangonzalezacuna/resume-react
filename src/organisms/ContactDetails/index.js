import React from "react";
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
} from "./ContactDetails";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { card, container, icon, item } from "./animations";

const ContactDetails = () => {
  const [t] = useTranslation("data");
  var data = t("contact", { returnObjects: true });

  return (
    <>
      <Container initial="initial" animate="animate" variants={container}>
        <TitleWrapper>
          <Title variants={item}>{data.title}</Title>
        </TitleWrapper>
        <Content>
          {data.info.map((info, index) => (
            <Item key={index} variants={card}>
              <IconWrapper variants={icon}>
                {info.type === "email" && <FaEnvelope />}
                {info.type === "phone" && <FaPhoneAlt />}
              </IconWrapper>
              <Info>
                <Type variants={item}>{info.title}</Type>
                <Data variants={item} href={info.link}>
                  {info.value}
                </Data>
              </Info>
            </Item>
          ))}
        </Content>
      </Container>
    </>
  );
};

export default ContactDetails;
