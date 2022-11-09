import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, SectionTitle } from "./styles";
import { container, title } from "./animations";
import { ContactDetailsOrganism, ContactFormOrganism } from "../../organisms";

export const Contact = () => {
  const [isEmailSent, setEmailSent] = useState(false);

  const [t] = useTranslation("contact");

  return (
    <>
      <Container initial="initial" animate="animate" variants={container}>
        <SectionTitle variants={title} submitted={isEmailSent ? 1 : 0}>
          {isEmailSent ? t("form.successMessage") : t("form.sectionTitle")}
        </SectionTitle>
        <ContactFormOrganism setEmailSent={setEmailSent} />
        <ContactDetailsOrganism />
      </Container>
    </>
  );
};
