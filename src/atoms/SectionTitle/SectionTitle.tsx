import { Variants } from "framer-motion";
import { Title, Wrapper } from "./styles";

export const SectionTitle = ({
  variants,
  title,
}: {
  variants: Variants;
  title: string;
}) => {
  return (
    <>
      <Wrapper>
        <Title variants={variants}>{title}</Title>
      </Wrapper>
    </>
  );
};
