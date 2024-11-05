import { Variants } from "framer-motion";
import { Container } from "./styles";

export type ChipProps = {
  title: string;
  animation?: Variants;
};

export const Chip = (props: ChipProps) => {
  return (
    <Container
      variants={props.animation}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {props.title}
    </Container>
  );
};
