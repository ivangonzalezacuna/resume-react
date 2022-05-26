import { Variants } from "framer-motion";
import { Title, Wrapper } from "./styles";

export const SectionTitle = ({
  variants,
  children,
}: {
  variants: Variants;
  children: JSX.Element;
}) => {
  return (
    <>
      <Wrapper>
        <Title variants={variants}>{children}</Title>
      </Wrapper>
    </>
  );
};
