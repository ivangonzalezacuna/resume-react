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
import { card, container, icon, item } from './animations'

const data = {
  title: 'You can also reach me through:',
  info: [
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
}

const ContactDetails = () => {
  return (
    <>
      <Container
        initial="initial"
        animate="animate"
        variants={container}>
        <TitleWrapper>
          <Title variants={item}>{data.title}</Title>
        </TitleWrapper>
        <Content>
          {data.info.map((info, index) => (
            <Item key={index} variants={card}>
              <IconWrapper variants={icon}>
                {info.type === 'email' && <FaEnvelope />}
                {info.type === 'phone' && <FaPhoneAlt />}
              </IconWrapper>
              <Info>
                <Type variants={item}>{info.title}</Type>
                <Data variants={item}>{info.value}</Data>
              </Info>
            </Item>
          ))}
        </Content>
      </Container>
    </>
  )
}

export default ContactDetails
