import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { SectionContainer, SectionWrapper, Tag } from "./SkillsElements";
import { SectionTitle } from "../../atoms/SectionTitle";
import { title, container, tag } from "./animations";
import SkillModal from "../SkillModal";

const Skill = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <SkillModal openModal={openModal} toggleModal={toggleModal} data={data} />
      <Tag
        onClick={toggleModal}
        variants={tag}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {data.name}
      </Tag>
    </>
  );
};

const SkillsSection = () => {
  const [t] = useTranslation("data");
  var data = t("skills", { returnObjects: true });
  data.info.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <SectionTitle variants={title}>{data.title}</SectionTitle>
      <SectionContainer variants={container}>
        <SectionWrapper>
          {data.info.map((skill, index) => (
            <Skill key={index} data={skill} />
          ))}
        </SectionWrapper>
      </SectionContainer>
    </>
  );
};

export default SkillsSection;
