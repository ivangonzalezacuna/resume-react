import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../atoms";
import { SkillsTranslationInfo } from "../../i18n/types";
import { SkillModal } from "../SkillModal";
import { title, container, tag } from "./animations";
import { Container, Tag, Wrapper } from "./styles";

const Skill = ({ skill }: { skill: SkillsTranslationInfo }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <SkillModal
        openModal={openModal}
        toggleModal={toggleModal}
        skill={skill}
      />
      <Tag
        onClick={toggleModal}
        variants={tag}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {skill.name}
      </Tag>
    </>
  );
};

export const SkillsOrganism = () => {
  const [t] = useTranslation("skills");
  const skills = t<string, SkillsTranslationInfo[]>("info", {
    returnObjects: true,
  }).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <SectionTitle variants={title}>{t("sectionTitle")}</SectionTitle>
      <Container variants={container}>
        <Wrapper>
          {skills.map((skill, key) => (
            <Skill key={key} skill={skill} />
          ))}
        </Wrapper>
      </Container>
    </>
  );
};
