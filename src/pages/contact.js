import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const ContactPage = ({ fastTransition }) => {
  return (
    <>
      <Contact fastTransition={fastTransition} />
      <Footer />
    </>
  )
}

export default ContactPage
