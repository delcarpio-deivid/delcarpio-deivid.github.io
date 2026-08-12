import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit";
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:shadow-[0_4px_12px_#1A1A1A26] hover:-translate-y-px",
  ghost:
    "bg-bg text-ink outline outline-1 outline-line -outline-offset-1 hover:bg-bg-alt",
};

export function Button({
  href,
  type = "button",
  variant = "primary",
  children,
  className = "",
  onClick,
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-8 px-24 py-12 font-body text-[14px] font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
