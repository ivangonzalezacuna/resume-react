import React from 'react'
import {
  CustomBtn,
  LinkBtn,
  ButtonWrapper,
  FormBtn,
  HrefBtn,
  FormButtonWrapper
} from './ButtonElements'

export const LinkButton = props => {
  return (
    <>
      <ButtonWrapper
        variants={props.variants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}>
        <LinkBtn
          to={props.to}
          onClick={props.onClick}
          small={props.small ? 1 : 0}
          dark={props.dark ? 1 : 0}>
          {props.text}
        </LinkBtn>
      </ButtonWrapper>
    </>
  )
}


export const CustomButton = props => {
  return (
    <>
      <CustomBtn
        variants={props.variants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={props.onClick}
        small={props.small ? 1 : 0}
        dark={props.dark ? 1 : 0}>
        {props.text}
      </CustomBtn>
    </>
  )
}

export const HrefButton = props => {
  return (
    <>
      <ButtonWrapper
        variants={props.variants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}>
        <HrefBtn
          href={props.href} target="_blank"
          small={props.small ? 1 : 0}
          dark={props.dark ? 1 : 0}>
          {props.text}
        </HrefBtn>
      </ButtonWrapper>
    </>
  )
}

export const FormButton = props => {
  return (
    <>
      <FormButtonWrapper
        variants={props.variants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}>
        <FormBtn type="submit"
          small={props.small ? 1 : 0}
          dark={props.dark ? 1 : 0}>
          {props.text}
        </FormBtn>
      </FormButtonWrapper>
    </>
  )
}