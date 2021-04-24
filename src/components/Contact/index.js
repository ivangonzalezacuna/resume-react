import React, { useState } from 'react'
import $ from 'jquery'
import validate from './validateInfo'
import useForm from './useForm'
import {
  ContactContainer, FormContainer,
  SectionTitle,
  FormContent, FormWrap,
  FormInputs, FormInput,
  FormLabel, FormTextArea,
  FormButton, FormBtnWrap,
  FormSuccessContainer,
  FormSuccessMsg,
} from './ContactElements'

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

const Contact = ({ fastTransition }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  )

  function submitForm() {
    executeQuery()
    setIsSubmitted(true)
  }

  function executeQuery() {
    $.ajax({
      type: "GET",
      //url: "https://script.google.com/macros/s/AKfycbyq8tGvTbLVgvG7VXkYfuRcMZ0ASZlJrQIFiyp-U2CqI_VrvOg/exec",
      data: values,
      dataType: "json",
      error: function (error) { console.log(error) },
      success: function (msg) { console.log(msg.result) }
    })
  }

  return (
    <>
      <ContactContainer
        initial="initial"
        animate="animate"
        variants={content(fastTransition)}>
        <SectionTitle variants={title}>Contact Me</SectionTitle>
        <FormContainer variants={formContainer}>
          {!isSubmitted ? (
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
              </FormWrap>
            </FormContent>
          ) : (
            <>
              <FormSuccessContainer>
                <FormSuccessMsg>Message sent</FormSuccessMsg>
              </FormSuccessContainer>
            </>
          )}
        </FormContainer>
      </ContactContainer>
    </>
  )
}

export default Contact
