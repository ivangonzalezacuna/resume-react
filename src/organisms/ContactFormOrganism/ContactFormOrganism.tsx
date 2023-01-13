import { useTranslation } from "react-i18next";
import {
  Container,
  Content,
  Error,
  Input,
  Item,
  Label,
  TextArea,
  Wrapper,
} from "./styles";
import { btn, form, item } from "./animations";
import { ContactForm, ContactFormOrganismProps } from "../../types";
import { useForm } from "./useForm";
import { useState } from "react";
import { FormButton } from "../../atoms";
import { LoadingOrganism } from "../LoadingOrganism";
import fetch from "cross-fetch";

export const ContactFormOrganism = ({
  setEmailSent,
}: ContactFormOrganismProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendError, setSendError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitForm = () => {
    setSendError("");
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      window.scrollTo(0, 0);
      setEmailSent(true);
    }, 5000);
    // sendEmail();
  };

  // eslint-disable-next-line
  const sendEmail = () => {
    fetch(".netlify/functions/sendmail", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        setIsSubmitted(true);
        setEmailSent(true);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        setSendError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const {
    handleSubmit,
    handleChange,
    data: formData,
    errors,
  } = useForm<ContactForm>({
    validations: {
      name: {
        required: {
          value: true,
          message: "The name cannot be empty",
        },
      },
      email: {
        required: {
          value: true,
          message: "The email cannot be empty",
        },
        custom: {
          isValid: (value) =>
            /^[A-Z0-9._%+~]+@[A-Z0-9.~]+\.[A-Z]{2,}$/i.test(value),
          message: "Email address is invalid",
        },
      },
      message: {
        required: {
          value: true,
          message: "The message cannot be empty",
        },
      },
    },
    onSubmit: submitForm,
  });

  const [t] = useTranslation("contact");

  return (
    <>
      <LoadingOrganism isLoading={isLoading} />
      {!isSubmitted && (
        <Container variants={form}>
          <Content>
            <Wrapper onSubmit={handleSubmit} noValidate>
              <Item>
                <Label variants={item}>
                  {t("form.labelName")}
                  <span>*</span>
                </Label>
                <Input
                  variants={item}
                  type="text"
                  name="name"
                  placeholder={t("form.placeholderName")}
                  value={formData.name || ""}
                  onChange={handleChange("name")}
                />
                {errors.name && <p>{errors.name}</p>}
              </Item>
              <Item>
                <Label variants={item}>
                  {t("form.labelEmail")}
                  <span>*</span>
                </Label>
                <Input
                  variants={item}
                  type="email"
                  name="email"
                  placeholder={t("form.placeholderEmail")}
                  value={formData.email || ""}
                  onChange={handleChange("email")}
                />
                {errors.email && <p>{errors.email}</p>}
              </Item>
              <Item>
                <Label variants={item}>{t("form.labelSubject")}</Label>
                <Input
                  variants={item}
                  type="text"
                  name="subject"
                  placeholder={t("form.placeholderSubject")}
                  value={formData.subject || ""}
                  onChange={handleChange("subject")}
                />
                {errors.subject && <p>{errors.subject}</p>}
              </Item>
              <Item>
                <Label variants={item}>
                  {t("form.labelMessage")}
                  <span>*</span>
                </Label>
                <TextArea
                  variants={item}
                  name="message"
                  placeholder={t("form.placeholderMessage")}
                  value={formData.message || ""}
                  onChange={handleChange("message")}
                  rows={5}
                  wrap="hard"
                />
                {errors.message && <p>{errors.message}</p>}
              </Item>
              <FormButton variants={btn}>{t("form.sendButton")}</FormButton>
              {sendError && <Error>{sendError}</Error>}
            </Wrapper>
          </Content>
        </Container>
      )}
    </>
  );
};
