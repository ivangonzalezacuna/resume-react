import { useTranslation } from "react-i18next";
import { BsFillQuestionOctagonFill } from "react-icons/bs";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { SocialIcon, SocialWrapper } from "./styles";
import { Variants } from "framer-motion";
import { IconType } from "react-icons";

const iconMap: Record<string, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  email: FaRegEnvelope,
};

export type ResumeIconProps = {
  variants?: Variants;
};

export const ResumeIcon = ({ variants }: ResumeIconProps) => {
  const [t] = useTranslation("social");
  const icons = t("links", { returnObjects: true }) || [];

  return (
    <SocialWrapper>
      {icons.map((icon) => {
        const IconValue =
          iconMap[icon.name.toLowerCase()] || BsFillQuestionOctagonFill;
        return (
          <SocialIcon
            key={icon.name}
            href={icon.href}
            target="_blank"
            variants={variants}
            animate={{ opacity: 1 }}
            whileHover={{ opacity: 0.85, scale: 1.05 }}
          >
            <IconValue />
          </SocialIcon>
        );
      })}
    </SocialWrapper>
  );
};
