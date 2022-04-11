import React from "react";
import { SectionTitleWrapper, Title } from "./SectionTitleElements";

export const SectionTitle = ({ variants, children }) => {
  return (
    <>
      <SectionTitleWrapper>
        <Title variants={variants}>{children}</Title>
      </SectionTitleWrapper>
    </>
  );
};
