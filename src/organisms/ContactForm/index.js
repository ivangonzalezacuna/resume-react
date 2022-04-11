import React, { useState } from "react";
import axios from "axios";
import validate from "./validateInfo";
import useForm from "./useForm";
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
} from "./ContactFormElements";
import Loading from "../Loading";
import { FormButton } from "../../atoms/Button";
import { btn, form, item } from "./animations";

const ContactForm = ({ setEmailSent }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  function submitForm() {
    setSendError(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      window.scrollTo(0, 0);
      setEmailSent();
    }, 5000);
    //sendEmail()
  }

  // eslint-disable-next-line
  const sendEmail = () => {
    axios
      .post("/api/sendmail", values, {
        timeout: 4000,
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        console.log(response);
        setIsSubmitted(true);
        setIsLoading(false);
        window.scrollTo(0, 0);
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        setIsLoading(false);
        errors.send = error.message;
        setSendError(true);
      });
  };
  const [t] = useTranslation("data");
  var data = t("form", { returnObjects: true });

  return (
    <>
      <Loading isLoading={isLoading} />
      {!isSubmitted && (
        <Container variants={form}>
          <Content>
            <Wrapper onSubmit={handleSubmit} noValidate>
              <Item>
                <Label variants={item}>
                  {data.nameLabel}
                  <span>*</span>
                </Label>
                <Input
                  variants={item}
                  type="text"
                  name="name"
                  placeholder={data.namePlaceholder}
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
              </Item>
              <Item>
                <Label variants={item}>
                  {data.emailLabel}
                  <span>*</span>
                </Label>
                <Input
                  variants={item}
                  type="email"
                  name="email"
                  placeholder={data.emailPlaceholder}
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </Item>
              <Item>
                <Label variants={item}>{data.subjectLabel}</Label>
                <Input
                  variants={item}
                  type="text"
                  name="subject"
                  placeholder={data.subjectPlaceholder}
                  value={values.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p>{errors.subject}</p>}
              </Item>
              <Item>
                <Label variants={item}>
                  {data.messageLabel}
                  <span>*</span>
                </Label>
                <TextArea
                  variants={item}
                  name="message"
                  placeholder={data.messagePlaceholder}
                  value={values.message}
                  onChange={handleChange}
                  rows={5}
                  wrap="hard"
                />
                {errors.message && <p>{errors.message}</p>}
              </Item>
              <FormButton variants={btn}>{data.sendBtn}</FormButton>
              {sendError && <Error>{errors.send}</Error>}
            </Wrapper>
          </Content>
        </Container>
      )}
    </>
  );
};

export default ContactForm;
