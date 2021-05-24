import React from 'react'
import { container } from './animations'
import { Container, Icon, Text, Wrapper } from './GoAboutElements'

const data = {
  text: 'Go About'
}

const GoAbout = ({ isFirstMount, fastTransition, updateFastTransition }) => {
  return (
    <>
      <Container to="/about" onClick={updateFastTransition(true)}>
        <Wrapper
          initial="initial"
          animate="animate"
          whileHover="hover"
          variants={container(isFirstMount, fastTransition)}>
          <Text>{data.text}</Text>
          <Icon />
        </Wrapper>
      </Container>
    </>
  )
}

export default GoAbout
