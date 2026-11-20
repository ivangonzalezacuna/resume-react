import type { MouseEvent } from "react";
import {
  bracketStyle,
  ivanTextStyle,
  logoAnchorStyle,
  logoUnderlineStyle,
  logoWordStyle,
} from "./Logo.css";

interface LogoProps {
  onClose?: () => void;
}

export const Logo = ({ onClose }: LogoProps) => {
  const url = new URL(window.location.href);
  url.hash = "";

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();
    const destination = event.currentTarget.href;
    if (destination !== window.location.href) {
      window.history.pushState(null, "", destination);
    }
    onClose?.();
    document.getElementById("main-content")?.focus({ preventScroll: true });
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <a
      href={url.href}
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
