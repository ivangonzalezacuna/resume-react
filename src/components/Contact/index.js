import React, { useState, useRef } from 'react'
import $ from 'jquery'
import validate from './validateInfo'
import useForm from './useForm'
import * as SendMessage from '../../images/lottie/send-message.json'
import {
  ContactBackground, FormContainer,
  FormContent, CloseContactButton,
  FormWrap, FormH1,
  FormInputs, FormLabel,
  FormInput, FormTextArea,
  FormButton, SuccessFormWrap,
  FormImgLottie, FormImgWrap,
  FormImg
} from './ContactElements'

const Contact = ({ showModal, setShowModal, contactForm }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const modalRef = useRef()
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  )

  const modalVariants = {
    hidden: { opacity: 0, transform: 'translateY(-100%)' },
    visible: {
      opacity: 1, transform: 'translateY(0%)',
      transition: { duration: 0.5 },
    }
  }

  const [isPaused, setIsPaused] = useState(false)
  const defaultOptions = {
    loop: false,
    autoplay: true,
    renderer: 'svg',
    animationData: SendMessage.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid meet'
    },
    initialSegment: [0, 120],
  }
  function toggleIsPaused() {
    setIsPaused(!isPaused)
  }

  function submitForm() {
    executeQuery()
    setIsSubmitted(true)
  }

  function executeQuery() {
    $.ajax({
      type: "POST",
      url: "https://script.google.com/macros/s/AKfycbyq8tGvTbLVgvG7VXkYfuRcMZ0ASZlJrQIFiyp-U2CqI_VrvOg/exec",
      data: values,
      dataType: "json",
      error: function (error) { console.log(error) },
      success: function (msg) { console.log(msg.result) }
    })
  }

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  return (
    <>
      {
        showModal ? (
          <ContactBackground ref={modalRef} onClick={closeModal} >
            <FormContainer variants={modalVariants}
              initial='hidden' animate='visible'>
              {!isSubmitted ? (
                <FormContent>
                  <CloseContactButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                  <FormWrap onSubmit={handleSubmit} noValidate>
                    <FormH1>{contactForm.title}</FormH1>
                    <FormInputs>
                      <FormLabel>{contactForm.nameLabel}<span>*</span></FormLabel>
                      <FormInput
                        type='text'
                        name='name'
                        placeholder={contactForm.namePlaceholder}
                        value={values.name}
                        onChange={handleChange}
                      />
                      {errors.name && <p>{errors.name}</p>}
                    </FormInputs>
                    <FormInputs>
                      <FormLabel>{contactForm.emailLabel}<span>*</span></FormLabel>
                      <FormInput
                        type='email'
                        name='email'
                        placeholder={contactForm.emailPlaceholder}
                        value={values.email}
                        onChange={handleChange}
                      />
                      {errors.email && <p>{errors.email}</p>}
                    </FormInputs>
                    <FormInputs>
                      <FormLabel>{contactForm.subjectLabel}</FormLabel>
                      <FormInput
                        type='text'
                        name='subject'
                        placeholder={contactForm.subjectPlaceholder}
                        value={values.subject}
                        onChange={handleChange}
                      />
                      {errors.subject && <p>{errors.subject}</p>}
                    </FormInputs>
                    <FormInputs>
                      <FormLabel>{contactForm.messageLabel}<span>*</span></FormLabel>
                      <FormTextArea
                        name='message'
                        placeholder={contactForm.messagePlaceholder}
                        value={values.message}
                        onChange={handleChange}
                        rows={5}
                        wrap='hard'
                      />
                      {errors.message && <p>{errors.message}</p>}
                    </FormInputs>
                    <FormButton type='submit'>{contactForm.submit}</FormButton>
                  </FormWrap>
                </FormContent>
              ) : (
                <FormContent>
                  <CloseContactButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                  <SuccessFormWrap>
                    <FormH1>{contactForm.successMsg}</FormH1>
                    <FormImgWrap>
                      {
                        !isPaused ? (
                          <FormImgLottie options={defaultOptions}
                            height='100%'
                            eventListeners={[
                              {
                                eventName: 'complete',
                                callback: () => toggleIsPaused()
                              }
                            ]}
                          />
                        ) : (
                          <FormImg src={contactForm.successImg} alt='success-image' />
                        )
                      }
                    </FormImgWrap>
                  </SuccessFormWrap>
                </FormContent>
              )}
            </FormContainer>
          </ContactBackground>
        ) : null}
    </>
  )
}

export default Contact