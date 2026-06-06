import portfolio from "../../content/portfolio";
import { HrefButton } from "../../atoms/Button";
import {
  HeroSection,
  HeroInner,
  LeftBlock,
  HeroName,
  HeroRole,
  HeroSummary,
  CTARow,
  RightBlock,
  ProfileImageWrapper,
  ProfileImage,
} from "./styles";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export const Hero = () => {
  const { personal, social, cv } = portfolio;

  return (
    <HeroSection id="hero">
      <HeroInner>
        <LeftBlock {...fadeUp}>
          <HeroRole>{personal.title}</HeroRole>
          <HeroName>{personal.name}</HeroName>
          <HeroSummary>{personal.summary}</HeroSummary>
          <CTARow>
            <HrefButton href="#experience" variant="primary">
              View Experience
            </HrefButton>
            <HrefButton href="#projects" variant="secondary">
              View Projects
            </HrefButton>
            <HrefButton href={social.github} blankTarget variant="secondary">
              GitHub
            </HrefButton>
            <HrefButton href={social.linkedin} blankTarget variant="secondary">
              LinkedIn
            </HrefButton>
            <HrefButton href={cv} variant="secondary" download>
              Download CV
            </HrefButton>
          </CTARow>
        </LeftBlock>

        <RightBlock
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <ProfileImageWrapper>
            <ProfileImage
              src="/images/profile/ivan.jpg"
              alt="Iván González Acuña — Software Engineer"
              width={560}
              height={560}
            />
          </ProfileImageWrapper>
        </RightBlock>
      </HeroInner>
    </HeroSection>
  );
};
