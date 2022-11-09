import { useTranslation } from "react-i18next";
import {
  Container,
  Grid,
  ImgWrap,
  ImgAnimateWrap,
  Img,
  ContentWrapper,
  Name,
  Description,
} from "./styles";
import { aboutMe, item, title } from "./animations";
import ProfilePic from "../../images/profile/ivan.png";
import PdfResumeEs from "../../images/pdf/resume-es.pdf";
import PdfResumeEn from "../../images/pdf/resume-en.pdf";
import { HrefButton, SectionTitle } from "../../atoms";

export const AboutMeOrganism = () => {
  const [t, i18n] = useTranslation("about");

  const resume = (): string => {
    if (["en", "en-US"].includes(i18n.language)) {
      return PdfResumeEn;
    } else if (["es", "es-ES"].includes(i18n.language)) {
      return PdfResumeEs;
    }
    return PdfResumeEn;
  };

  return (
    <>
      <SectionTitle variants={title} title={t("sectionTitle")} />
      <Container variants={aboutMe}>
        <Grid>
          <ImgWrap>
            <ImgAnimateWrap variants={item}>
              <Img src={ProfilePic} alt={t("profileAlt")} />
            </ImgAnimateWrap>
          </ImgWrap>
          <ContentWrapper>
            <Name variants={item}>
              {t("info.intro")} <span>{t("info.name")}</span>
            </Name>
            <Description variants={item}>{t("info.description")}</Description>
            <HrefButton variants={item} href={resume()}>
              {t("resumeButton")}
            </HrefButton>
          </ContentWrapper>
        </Grid>
      </Container>
    </>
  );
};
