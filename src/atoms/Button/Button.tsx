import { HrefBtn } from "./styles";

export type HrefButtonProps = {
  href: string;
  blankTarget?: boolean;
  download?: boolean;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export const HrefButton = ({
  href,
  blankTarget,
  download,
  variant = "secondary",
  children,
}: HrefButtonProps) => {
  return (
    <HrefBtn
      href={href}
      $variant={variant}
      target={blankTarget ? "_blank" : undefined}
      rel={blankTarget ? "noopener noreferrer" : undefined}
      download={download ? true : undefined}
    >
      {children}
    </HrefBtn>
  );
};
