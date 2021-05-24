import React from 'react'
import {
  Container,
  Background,
  Content,
  Name,
  Description,
  Contact,
  Social
} from './HeaderDataElements'
import HeaderBg from '../../images/background/header.svg'
import { LinkButton } from '../../atoms/Button'
import SocialIcons from '../../atoms/SocialIcons'
import { container, icons, item } from './animations'

const data = {
  name: 'Ivan Gonzalez',
  description: "I'm a software Developer"
}

const HeaderData = ({ isFirstMount, fastTransition, updateFastTransition }) => {
  return (
    <>
      <Container
        initial="initial"
        animate="animate"
        variants={container(isFirstMount, fastTransition)}>
        <Background src={HeaderBg} alt='header' />
        <Content>
          <Name variants={item}>
            {data.name}
          </Name>
          <Description variants={item}>
            {data.description}
          </Description>
          <Contact>
            <LinkButton
              variants={item}
              to='/contact'
              onClick={updateFastTransition(true)}
              text='Contact Me' />
            <Social>
              <SocialIcons row header variants={icons} />
            </Social>
          </Contact>
        </Content>
      </Container>
    </>
  )
}

export default HeaderData
