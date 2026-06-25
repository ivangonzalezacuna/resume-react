import { m } from "framer-motion";
import portfolio from "../../content/portfolio";
import { HrefButton } from "../../atoms/Button";
import {
  heroSection,
  heroInner,
  leftBlock,
  heroName,
  heroRole,
  heroSummary,
  ctaRow,
  rightBlock,
  profileImageWrapper,
  profileImage,
} from "./Hero.css";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" as const },
};

export const Hero = () => {
  const { personal, social, cv } = portfolio;

  return (
    <section id="hero" className={heroSection} aria-label="Hero">
      <div className={heroInner}>
        <m.div className={leftBlock} {...fadeUp}>
          <p className={heroRole}>{personal.title}</p>
          <h1 className={heroName}>{personal.name}</h1>
          <p className={heroSummary}>{personal.summary}</p>
          <div className={ctaRow}>
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
            <HrefButton
              href={cv}
              variant="secondary"
              download="CV_IvanGonzalezAcuna.pdf"
            >
              Download CV
            </HrefButton>
          </div>
        </m.div>

        <m.div
          className={rightBlock}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className={profileImageWrapper}>
            <img
              className={profileImage}
              src="/images/profile/ivan.jpg"
              alt={`Profile photo of ${personal.name}`}
              width={560}
              height={560}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </m.div>
      </div>
    </section>
  );
};
