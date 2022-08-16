import { TargetAndTransition, Variants } from "framer-motion";
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

const buttonAnimations: {
  whileHover: TargetAndTransition;
  whileTap: TargetAndTransition;
} = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
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
    <ButtonWrapper variants={variants} {...buttonAnimations}>
      <LinkBtn
        to={to}
        onClick={onClick}
        small={small ? 1 : 0}
        dark={dark ? 1 : 0}
      >
        {children}
      </LinkBtn>
    </ButtonWrapper>
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
    <CustomBtn
      variants={variants}
      onClick={onClick}
      small={small ? 1 : 0}
      dark={dark ? 1 : 0}
      {...buttonAnimations}
    >
      {children}
    </CustomBtn>
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
    <ButtonWrapper variants={variants} {...buttonAnimations}>
      <HrefBtn
        href={href}
        target="_blank"
        small={small ? 1 : 0}
        dark={dark ? 1 : 0}
      >
        {children}
      </HrefBtn>
    </ButtonWrapper>
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
    <FormButtonWrapper variants={variants} {...buttonAnimations}>
      <FormBtn type="submit" small={small ? 1 : 0} dark={dark ? 1 : 0}>
        {children}
      </FormBtn>
    </FormButtonWrapper>
  );
};
