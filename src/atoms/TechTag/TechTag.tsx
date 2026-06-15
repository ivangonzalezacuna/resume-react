import { techTagStyle } from "./TechTag.css";

export const TechTag = ({ name }: { name: string }) => (
  <span className={techTagStyle}>{name}</span>
);
