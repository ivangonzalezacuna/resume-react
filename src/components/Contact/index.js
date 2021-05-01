import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import axios from 'axios'
import validate from './validateInfo'
import useForm from './useForm'
import {
  ContactContainer, FormContainer,
  SectionTitle, FormContent, FormWrap,
  FormInputs, FormInput,
  FormLabel, FormTextArea,
  FormButton, FormBtnWrap,
  LoadingPopupWrap,
  LoadingOverlay, Error,
  LoadingAnimation,
  ExtraInfoContainer,
  ExtraInfoTitleWrap,
  ExtraInfoTitle,
  ContactMeWrap,
  ContactSection,
  ContactSectionIconWrap,
  SectionInfoWrap,
  SectionInfoTitle,
  SectionInfoData,
} from './ContactElements'
import * as LoadingSpinner from '../../images/lottie/loading-spinner.json'

const content = (fastTransition) => ({
  animate: {
    transition: { staggerChildren: 0.07, delayChildren: fastTransition ? 0 : 0.5 },
  },
})

const title = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.7,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const formContainer = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
      delayChildren: 0.6,
    },
  },
}

const formElements = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
  },
}

const btnItem = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const Loading = ({ isLoading }) => {
  const modalVariants = {
    hidden: { opacity: 0, transform: 'translateY(-100%)' },
    visible: {
      opacity: 1, transform: 'translateY(0%)',
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0, transform: 'translateY(-100%)',
      transition: { duration: 0.4 },
    }
  }

  return (
    <>
      <AnimatePresence>
        {isLoading &&
          <LoadingOverlay>
            <LoadingPopupWrap variants={modalVariants}
              initial='hidden' animate='visible' exit="exit">
              <LoadingAnimation
                loop
                animationData={LoadingSpinner.default}
                play />
            </LoadingPopupWrap>
          </LoadingOverlay>
        }
      </AnimatePresence>
    </>
  )
}

const Contact = ({ fastTransition }) => {
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
    sendEmail()
  }

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
      <ContactContainer
        initial="initial"
        animate="animate"
        variants={content(fastTransition)}>
        <SectionTitle variants={title}
        >{!isSubmitted ? 'Contact Me' : 'Message Sent!'}</SectionTitle>
        <FormContainer variants={formContainer}>
          {!isSubmitted &&
            <FormContent>
              <FormWrap onSubmit={handleSubmit} noValidate>
                <FormInputs>
                  <FormLabel variants={formElements}>Name<span>*</span></FormLabel>
                  <FormInput
                    variants={formElements}
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && <p>{errors.name}</p>}
                </FormInputs>
                <FormInputs>
                  <FormLabel variants={formElements}>Email<span>*</span></FormLabel>
                  <FormInput
                    variants={formElements}
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                  />
                  {errors.email && <p>{errors.email}</p>}
                </FormInputs>
                <FormInputs>
                  <FormLabel variants={formElements}>Subject</FormLabel>
                  <FormInput
                    variants={formElements}
                    type='text'
                    name='subject'
                    placeholder='Subject'
                    value={values.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && <p>{errors.subject}</p>}
                </FormInputs>
                <FormInputs>
                  <FormLabel variants={formElements}>Message<span>*</span></FormLabel>
                  <FormTextArea
                    variants={formElements}
                    name='message'
                    placeholder='Message'
                    value={values.message}
                    onChange={handleChange}
                    rows={5}
                    wrap='hard'
                  />
                  {errors.message && <p>{errors.message}</p>}
                </FormInputs>
                <FormBtnWrap variants={btnItem} type='submit'>
                  <FormButton type='submit'>Submit</FormButton>
                </FormBtnWrap>
                {sendError && <Error>{errors.send}</Error>}
              </FormWrap>
            </FormContent>
          }
        </FormContainer>
        <ExtraInfoContainer>
          <ExtraInfoTitleWrap>
            <ExtraInfoTitle>You can also reach me through:</ExtraInfoTitle>
          </ExtraInfoTitleWrap>
          <ContactMeWrap>
            <ContactSection>
              <ContactSectionIconWrap>
                <FaPhoneAlt />
              </ContactSectionIconWrap>
              <SectionInfoWrap>
                <SectionInfoTitle>Email</SectionInfoTitle>
                <SectionInfoData>ivangonzalezacuna@gmail.com</SectionInfoData>
              </SectionInfoWrap>
            </ContactSection>
            <ContactSection>
              <ContactSectionIconWrap>
                <FaEnvelope />
              </ContactSectionIconWrap>
              <SectionInfoWrap>
                <SectionInfoTitle>Phone</SectionInfoTitle>
                <SectionInfoData>(+34) 654 46 26 02</SectionInfoData>
              </SectionInfoWrap>
            </ContactSection>
          </ContactMeWrap>
        </ExtraInfoContainer>
      </ContactContainer>
    </>
  )
}

export default Contact