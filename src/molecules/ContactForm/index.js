import React, { useState } from 'react'
import axios from 'axios'
import validate from './validateInfo'
import useForm from './useForm'
import {
  Container,
  Content,
  Error,
  Input,
  Item,
  Label,
  TextArea,
  Wrapper
} from './ContactFormElements'
import Loading from '../Loading'
import { FormButton } from '../../atoms/Button'

const form = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1, y: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
      when: "beforeChildren",
      staggerChildren: 0.025,
    },
  },
}

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const buttonItem = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { ease: [0.6, -0.05, 0.01, 0.99] },
  },
}

const ContactForm = ({ setEmailSent }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  )

  function submitForm() {
    setSendError(false)
    setIsLoading(true)
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      window.scrollTo(0, 0)
      setEmailSent()
    }, 1000)
    //sendEmail()
  }

  // eslint-disable-next-line
  const sendEmail = () => {
    axios.post("/api/sendmail", values, {
      timeout: 4000,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        console.log(response)
        setIsSubmitted(true)
        setIsLoading(false)
        window.scrollTo(0, 0)
      })
      .catch(error => {
        console.log(JSON.stringify(error))
        setIsLoading(false)
        errors.send = error.message
        setSendError(true)
      })
  }

  return (
    <>
      <Loading isLoading={isLoading} />
      {!isSubmitted &&
        <Container variants={form}>
          <Content>
            <Wrapper onSubmit={handleSubmit} noValidate>
              <Item>
                <Label variants={item}>
                  Name<span>*</span>
                </Label>
                <Input
                  variants={item}
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={values.name}
                  onChange={handleChange}
                />
                {errors.name && <p>{errors.name}</p>}
              </Item>
              <Item>
                <Label variants={item}>
                  Email<span>*</span>
                </Label>
                <Input
                  variants={item}
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p>{errors.email}</p>}
              </Item>
              <Item>
                <Label variants={item}>
                  Subject
                  </Label>
                <Input
                  variants={item}
                  type='text'
                  name='subject'
                  placeholder='Subject'
                  value={values.subject}
                  onChange={handleChange}
                />
                {errors.subject && <p>{errors.subject}</p>}
              </Item>
              <Item>
                <Label variants={item}>
                  Message<span>*</span>
                </Label>
                <TextArea
                  variants={item}
                  name='message'
                  placeholder='Message'
                  value={values.message}
                  onChange={handleChange}
                  rows={5}
                  wrap='hard'
                />
                {errors.message && <p>{errors.message}</p>}
              </Item>
              <FormButton
                variants={buttonItem}
                text={"Send Message"} />
              {sendError && <Error>{errors.send}</Error>}
            </Wrapper>
          </Content>
        </Container>
      }
    </>
  )
}

export default ContactForm
