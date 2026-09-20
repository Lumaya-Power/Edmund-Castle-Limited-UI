import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Button.css";

type Variant = "primary" | "outline" | "outline-light";

interface ButtonProps {
  children: ReactNode;
  /** When provided, renders a router link instead of a button. */
  to?: string;
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  children,
  to,
  variant = "primary",
  arrow = true,
  className,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = ["btn", `btn--${variant}`, className].filter(Boolean).join(" ");
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
