import React from 'react'
import { SectionTitleWrapper, Title } from './SectionTitleElements'

export const SectionTitle = props => {
  return (
    <>
      <SectionTitleWrapper>
        <Title variants={props.variants}>
          {props.text}
        </Title>
      </SectionTitleWrapper>
    </>
  )
}