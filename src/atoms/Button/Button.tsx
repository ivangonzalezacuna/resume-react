import type { ReactNode } from "react";
import { hrefBtnStyle } from "./Button.css";

export type HrefButtonProps = {
  href: string;
  blankTarget?: boolean;
  download?: boolean;
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export const HrefButton = ({
  href,
  blankTarget,
  download,
  variant = "secondary",
  children,
}: HrefButtonProps) => {
  return (
    <a
      href={href}
      className={hrefBtnStyle[variant]}
      target={blankTarget ? "_blank" : undefined}
      rel={blankTarget ? "noopener noreferrer" : undefined}
      download={download ? true : undefined}
    >
      {children}
    </a>
  );
};
