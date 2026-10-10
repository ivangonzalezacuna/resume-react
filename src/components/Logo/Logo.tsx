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
  return (
    <a
      href="#hero"
      onClick={onClose}
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
