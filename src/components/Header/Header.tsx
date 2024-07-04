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

export const Header = () => {
  const [t] = useTranslation("home");
  return (
    <Container>
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
