import React from "react";
import {
  CustomBtn,
  LinkBtn,
  ButtonWrapper,
  FormBtn,
  HrefBtn,
  FormButtonWrapper,
} from "./ButtonElements";

export const LinkButton = ({
  variants,
  to,
  onClick,
  small,
  dark,
  children,
}) => {
  return (
    <>
      <ButtonWrapper
        variants={variants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <LinkBtn
          to={to}
          onClick={onClick}
          small={small ? 1 : 0}
          dark={dark ? 1 : 0}
        >
          {children}
        </LinkBtn>
      </ButtonWrapper>
    </>
  );
};

export const CustomButton = ({ variants, onClick, small, dark, children }) => {
  return (
    <>
      <CustomBtn
        variants={variants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onClick}
        small={small ? 1 : 0}
        dark={dark ? 1 : 0}
      >
        {children}
      </CustomBtn>
    </>
  );
};

export const HrefButton = ({ variants, href, small, dark, children }) => {
  return (
    <>
      <ButtonWrapper
        variants={variants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <HrefBtn
          href={href}
          target="_blank"
          small={small ? 1 : 0}
          dark={dark ? 1 : 0}
        >
          {children}
        </HrefBtn>
      </ButtonWrapper>
    </>
  );
};

export const FormButton = ({ variants, small, dark, children }) => {
  return (
    <>
      <FormButtonWrapper
        variants={variants}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
      >
        <FormBtn type="submit" small={small ? 1 : 0} dark={dark ? 1 : 0}>
          {children}
        </FormBtn>
      </FormButtonWrapper>
    </>
  );
};
