import { Variants } from "framer-motion";
import React from "react";
import {
  CustomBtn,
  LinkBtn,
  ButtonWrapper,
  FormBtn,
  HrefBtn,
  FormButtonWrapper,
} from "./styles";

export type LinkButtonProps = {
  variants: Variants;
  to: string;
  onClick: () => void;
  small?: boolean;
  dark?: boolean;
  children: React.ReactNode;
};

export const LinkButton = ({
  variants,
  to,
  onClick,
  small = false,
  dark = false,
  children,
}: LinkButtonProps) => {
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

export type CustomButtonProps = {
  variants: Variants;
  onClick: () => void;
  small?: boolean;
  dark?: boolean;
  children: React.ReactNode;
};

export const CustomButton = ({
  variants,
  onClick,
  small = false,
  dark = false,
  children,
}: CustomButtonProps) => {
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

export type HrefButtonProps = {
  variants: Variants;
  href: string;
  small?: boolean;
  dark?: boolean;
  children: React.ReactNode;
};

export const HrefButton = ({
  variants,
  href,
  small = false,
  dark = false,
  children,
}: HrefButtonProps) => {
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

export type FormButtonProps = {
  variants: Variants;
  small?: boolean;
  dark?: boolean;
  children: React.ReactNode;
};

export const FormButton = ({
  variants,
  small = false,
  dark = false,
  children,
}: FormButtonProps) => {
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
