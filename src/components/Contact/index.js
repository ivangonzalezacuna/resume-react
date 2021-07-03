import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ContactContainer, SectionTitle } from './ContactElements'
import ContactForm from '../../organisms/ContactForm'
import ContactDetails from '../../organisms/ContactDetails'
import { container, title } from './animations'

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false)

  const setEmailSent = () => {
    setIsEmailSent(true)
  }
  const [t] = useTranslation('data')
  var data = t('form', { returnObjects: true })

  return (
    <>
      <ContactContainer
        initial="initial"
        animate="animate"
        variants={container}>
        <SectionTitle
          variants={title}
          submitted={isEmailSent}>
          {!isEmailSent ? data.title : data.success}
        </SectionTitle>
        <ContactForm setEmailSent={setEmailSent} />
        <ContactDetails />
      </ContactContainer>
    </>
  )
}

export default Contact