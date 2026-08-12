import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = ComponentPropsWithoutRef<"a"> &
  ComponentPropsWithoutRef<"button"> & {
    variant?: ButtonVariant;
    href?: string;
    children: ReactNode;
  };

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-hover",
  secondary:
    "bg-bg-elevated text-ink border border-border hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-ink-soft hover:text-accent",
};

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-[8px] px-5 py-2.5",
    "font-medium text-sm tracking-wide transition-all duration-200",
    "disabled:opacity-50 disabled:pointer-events-none",
    variants[variant],
    className,
  ].join(" ");

  if (href) {
    return (
      <a href={href} className={classes} {...(props as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ComponentPropsWithoutRef<"button">)}>
      {children}
    </button>
  );
}
