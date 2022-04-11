import React from "react";
import { HeaderSection, HeaderWrapper } from "./HeaderElements";
import HeaderData from "../../organisms/HeaderData";
import GoAbout from "../../organisms/GoAbout";

const Header = ({ isFirstMount, fastTransition, updateFastTransition }) => {
  return (
    <>
      <HeaderSection>
        <HeaderWrapper>
          <HeaderData
            isFirstMount={isFirstMount}
            fastTransition={fastTransition}
            updateFastTransition={updateFastTransition}
          />
          <GoAbout
            isFirstMount={isFirstMount}
            fastTransition={fastTransition}
            updateFastTransition={updateFastTransition}
          />
        </HeaderWrapper>
      </HeaderSection>
    </>
  );
};

export default Header;
