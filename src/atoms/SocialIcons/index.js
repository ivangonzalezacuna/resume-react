import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
} from "react-icons/fa";
import { Icon, IconContainer } from "./SocialIconsElements";

const SocialIcons = (props) => {
  const [t] = useTranslation("data");
  var data = t("social", { returnObjects: true });

  return (
    <>
      <IconContainer row={props.row}>
        {data.map((icon, index) => (
          <Icon
            key={index}
            row={props.row}
            header={props.header}
            href={icon.link}
            target="_blank"
            variants={props.variants}
            animate={{ opacity: 1 }}
            whileHover={{ opacity: 0.85, scale: 1.05 }}
          >
            {icon.name === "linkedin" && <FaLinkedinIn />}
            {icon.name === "github" && <FaGithub />}
            {icon.name === "skype" && <FaSkype />}
            {icon.name === "facebook" && <FaFacebookF />}
            {icon.name === "instagram" && <FaInstagram />}
          </Icon>
        ))}
      </IconContainer>
    </>
  );
};

export default SocialIcons;
