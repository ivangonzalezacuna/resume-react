import type { MouseEvent } from "react";
import {
  bracketStyle,
  ivanTextStyle,
  logoAnchorStyle,
  logoUnderlineStyle,
  logoWordStyle,
} from "./Logo.css";

export const Logo = () => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href="#hero"
      onClick={handleClick}
      aria-label="Back to top"
      className={logoAnchorStyle}
    >
      <div className={logoWordStyle}>
        <span className={bracketStyle}>{"{"}</span>
        <span className={ivanTextStyle}>ivan</span>
        <span className={bracketStyle}>{"}"}</span>
      </div>
      <div className={logoUnderlineStyle} />
    </a>
  );
};
