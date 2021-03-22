import React, { useState, useRef } from 'react'
import { useSpring } from 'react-spring'
import validate from './validateInfo'
import useForm from './useForm'
import {
  ContactBackground,
  FormContainer,
  FormContent,
  CloseContactButton,
  FormWrap,
  FormH1,
  FormInputs,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
  SuccessFormWrap,
  FormImg
} from './ContactElements'


const Contact = ({ showModal, setShowModal, contactForm }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const modalRef = useRef()
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  )
  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)'
  })

  function submitForm() {
    setIsSubmitted(true)
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
            <FormContainer style={animation}>
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
                    <FormImg src={contactForm.successImg} alt='success-image' />
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


/*import React, { useState } from 'react'
import FormSuccess from './FormSuccess'
import FormContact from './FormContact'

const Form = ({ showModal, setShowModal }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <div>
      {!isSubmitted ? (
        <FormContact submitForm={submitForm} showModal={showModal}
          setShowModal={setShowModal} />
      ) : (
        <FormSuccess />
      )}
    </div>
  )
}

export default Form*/
