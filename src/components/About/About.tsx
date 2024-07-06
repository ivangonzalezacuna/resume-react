import { AnimateWrapper, Container } from "./styles";
import { container } from "./animations";
import {
  AboutMeOrganism,
  EducationOrganism,
  SkillsOrganism,
  WorkOrganism,
} from "../../organisms";
import { useGesture } from "@use-gesture/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const About = () => {
  const navigate = useNavigate();
  const [initalScroll, setInitialScroll] = useState<number>(0);

  const handlers = useGesture({
    onWheelStart: () => {
      setInitialScroll(window.scrollY);
    },
    onWheel: ({ movement: [, dy] }) => {
      if (initalScroll === 0 && dy < -300) {
        navigate("/");
      }
    },
  });

  return (
    <Container {...handlers()}>
      <AnimateWrapper initial="initial" animate="animate" variants={container}>
        <AboutMeOrganism />
        <SkillsOrganism />
        <WorkOrganism />
        <EducationOrganism />
      </AnimateWrapper>
    </Container>
  );
};
