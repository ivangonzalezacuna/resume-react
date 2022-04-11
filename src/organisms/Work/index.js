import React from "react";
import { useTranslation } from "react-i18next";
import { SectionTitle } from "../../atoms/SectionTitle";
import TimelineSection from "../Timeline";
import { title, work } from "./animations";
import { WorkContainer } from "./WorkElements";

const WorkSection = () => {
  const [t] = useTranslation("data");
  var data = t("work", { returnObjects: true });

  return (
    <>
      <SectionTitle variants={title}>{data.title}</SectionTitle>
      <WorkContainer variants={work}>
        <TimelineSection items={data.info} />
      </WorkContainer>
    </>
  );
};

export default WorkSection;
