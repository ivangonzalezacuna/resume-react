import React from 'react'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import RouteTransition from '../RouteTransition'

const ContactPage = () => {
  return (
    <>
      <RouteTransition>
        <Contact />
        <Footer />
      </RouteTransition>
    </>
  )
}

export default ContactPage
