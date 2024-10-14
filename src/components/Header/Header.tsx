import {
  Container,
  Content,
  Description,
  Img,
  ImgContainer,
  Name,
  SocialWrapper,
} from "./styles";
import ProfilePic from "../../images/profile/ivan.png";
import { useTranslation } from "react-i18next";
import { ResumeIcon } from "../../atoms";
import { GoAboutOrganism } from "../../organisms";
import { useGesture } from "@use-gesture/react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const [t] = useTranslation("home");

  const handlers = useGesture(
    {
      onWheel: ({ movement: [, dy] }) => {
        if (dy > 300) {
          navigate("/about");
        }
      },
      onDrag: ({ movement: [, dy], velocity: [, vy] }) => {
        if (dy < -150 && vy > 0.1) {
          navigate("/about");
        }
      },
    },
    { drag: { filterTaps: true, pointer: { touch: true } } }
  );

  return (
    <Container {...handlers()}>
      <Content>
        <Name>{t("name")}</Name>
        <Description>{t("description")}</Description>
        <SocialWrapper>
          <ResumeIcon social row header />
        </SocialWrapper>
        <ImgContainer>
          <Img src={ProfilePic} alt="profile" />
        </ImgContainer>
      </Content>
      <GoAboutOrganism />
    </Container>
  );
};
