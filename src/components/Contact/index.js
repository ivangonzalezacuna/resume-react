import React, { useState } from 'react'
import { ContactContainer, SectionTitle } from './ContactElements'
import ContactForm from '../../molecules/ContactForm'
import ContactDetails from '../../molecules/ContactDetails'

const contact = {
  animate: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0
    },
  },
}

const title = {
  initial: { y: 50, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false)

  const setEmailSent = () => {
    setIsEmailSent(true)
  }

  return (
    <>
      <ContactContainer
        initial="initial"
        animate="animate"
        variants={contact}>
        <SectionTitle
          variants={title}
          submitted={isEmailSent}>
          {!isEmailSent ? 'Contact Me' : 'Message Sent!'}
        </SectionTitle>
        <ContactForm setEmailSent={setEmailSent} />
        <ContactDetails />
      </ContactContainer>
    </>
  )
}

export default Contact