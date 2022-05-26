import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, SectionTitle } from "./styles";
import { container, title } from "./animations";
import { ContactFormTranslation } from "../../i18n/types";
import { ContactDetailsOrganism, ContactFormOrganism } from "../../organisms";

export const Contact = () => {
  const [isEmailSent, setEmailSent] = useState(false);

  const [t] = useTranslation("contact");
  const data = t<string, ContactFormTranslation>("form", {
    returnObjects: true,
  });

  return (
    <>
      <Container initial="initial" animate="animate" variants={container}>
        <SectionTitle variants={title} submitted={isEmailSent ? 1 : 0}>
          {!isEmailSent ? data.sectionTitle : data.successMessage}
        </SectionTitle>
        <ContactFormOrganism setEmailSent={setEmailSent} />
        <ContactDetailsOrganism />
      </Container>
    </>
  );
};
