import type { MouseEvent } from "react";
import {
  LogoAnchor,
  LogoWord,
  Bracket,
  IvanText,
  LogoUnderline,
} from "./styles";

export const Logo = () => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LogoAnchor href="#hero" onClick={handleClick} aria-label="Back to top">
      <LogoWord>
        <Bracket>{"{"}</Bracket>
        <IvanText>ivan</IvanText>
        <Bracket>{"}"}</Bracket>
      </LogoWord>
      <LogoUnderline />
    </LogoAnchor>
  );
};
