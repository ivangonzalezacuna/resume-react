import { toSvgIcon } from "../../utils";
import { Container, TechIcon, TechName } from "./styles";

export const TechBox = ({ name }: { name: string }) => {
  const iconSrc = toSvgIcon(name);
  return (
    <Container whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      {iconSrc && <TechIcon src={iconSrc} alt={name} />}
      <TechName>{name}</TechName>
    </Container>
  );
};
