import { Tech, TechIcon, TechName } from "./styles";
import { toSvgIcon } from "../../utils";

export const TechTag = ({ name }: { name: string }) => {
  const iconSrc = toSvgIcon(name);
  return (
    <Tech whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      {iconSrc && <TechIcon src={iconSrc} alt={name} />}
      <TechName>{name}</TechName>
    </Tech>
  );
};
