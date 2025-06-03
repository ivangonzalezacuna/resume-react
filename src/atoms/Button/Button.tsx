import { TargetAndTransition, Variants } from "framer-motion";
import React from "react";
import { ButtonWrapper, FormBtn, HrefBtn, FormButtonWrapper } from "./styles";

const buttonAnimations: {
  whileHover: TargetAndTransition;
  whileTap: TargetAndTransition;
} = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
};

export type HrefButtonProps = {
  variants: Variants;
  href: string;
  blankTarget?: boolean;
  children: React.ReactNode;
};

export const HrefButton = ({
  variants,
  href,
  blankTarget,
  children,
}: HrefButtonProps) => {
  return (
    <ButtonWrapper variants={variants} {...buttonAnimations}>
      <HrefBtn href={href} target={blankTarget ? "_blank" : undefined}>
        {children}
      </HrefBtn>
    </ButtonWrapper>
  );
};

export type FormButtonProps = {
  variants: Variants;
  children: React.ReactNode;
};

export const FormButton = ({ variants, children }: FormButtonProps) => {
  return (
    <FormButtonWrapper variants={variants} {...buttonAnimations}>
      <FormBtn type="submit">{children}</FormBtn>
    </FormButtonWrapper>
  );
};
