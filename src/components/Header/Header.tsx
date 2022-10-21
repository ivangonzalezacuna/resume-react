import { GoAboutOrganism, HeaderOrganism } from "../../organisms";
import { HeaderProps } from "../../types";
import { HeaderSection, HeaderWrapper } from "./styles";

export const Header = ({
  isFirstMount,
  fastTransition,
  setFastTransition,
}: HeaderProps) => {
  return (
    <>
      <HeaderSection>
        <HeaderWrapper>
          <HeaderOrganism
            fastTransition={fastTransition}
            isFirstMount={isFirstMount}
            setFastTransition={setFastTransition}
          />
          <GoAboutOrganism
            fastTransition={fastTransition}
            isFirstMount={isFirstMount}
            setFastTransition={setFastTransition}
          />
        </HeaderWrapper>
      </HeaderSection>
    </>
  );
};
