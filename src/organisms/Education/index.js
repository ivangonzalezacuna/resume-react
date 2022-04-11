import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../atoms/SectionTitle";
import TimelineSection from "../Timeline";
import { education, title } from "./animations";
import { EducationContainer } from "./EducationElements";

const EducationSection = () => {
  const [t] = useTranslation("data");
  var data = t("education", { returnObjects: true });

  return (
    <>
      <SectionTitle variants={title}>{data.title}</SectionTitle>
      <EducationContainer variants={education}>
        <TimelineSection items={data.info} />
      </EducationContainer>
    </>
  );
};

export default EducationSection;
