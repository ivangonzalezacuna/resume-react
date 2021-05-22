import React from 'react'
import {
  Container,
  TitleWrapper,
  Title,
  Content,
  Item,
  IconWrapper,
  Info,
  Type,
  Data
} from './ContactDetails'
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

const contact = {
  animate: {
    transition: {
      staggerChildren: 0.07,
    },
  },
}

const card = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  },
}

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

const icon = {
  initial: { scale: 1, opacity: 0 },
  animate: {
    scale: 1, opacity: 1,
    transition: { duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }
  },
}

const contactItems = [
  {
    type: 'email',
    title: 'Email',
    value: 'ivangonzalezacuna@gmail.com',
  },
  {
    type: 'phone',
    title: 'Phone Number',
    value: '(+34) 654 46 26 02',
  },
]

const ContactDetails = () => {
  return (
    <>
      <Container
        initial="initial"
        animate="animate"
        variants={contact}>
        <TitleWrapper>
          <Title variants={item}>You can also reach me through:</Title>
        </TitleWrapper>
        <Content>
          {contactItems.map((data, index) => (
            <Item key={index} variants={card}>
              <IconWrapper variants={icon}>
                {data.type === 'email' && <FaEnvelope />}
                {data.type === 'phone' && <FaPhoneAlt />}
              </IconWrapper>
              <Info>
                <Type variants={item}>{data.title}</Type>
                <Data variants={item}>{data.value}</Data>
              </Info>
            </Item>
          ))}
        </Content>
      </Container>
    </>
  )
}

export default ContactDetails
