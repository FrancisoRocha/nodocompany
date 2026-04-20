import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

interface CommonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

interface AsButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  as?: "button";
  href?: never;
}

interface AsAnchorProps
  extends CommonProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> {
  as: "a";
  href: string;
}

type ButtonProps = AsButtonProps | AsAnchorProps;

const BASE =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 sm:px-6 py-2.5 text-[0.78rem] sm:text-[0.82rem] transition-all hover:-translate-y-0.5 font-mono no-underline";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-text text-bg border-none hover:opacity-80",
  secondary:
    "border border-border bg-transparent text-text-secondary hover:border-border-hover hover:text-text",
};

/**
 * Botón base de Nodo con 2 variantes.
 * Soporta renderizarse como <button> o como <a href> sin perder tipos.
 */
export function Button({
  variant = "primary",
  children,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`.trim();

  if (rest.as === "a") {
    const { as: _as, ...anchorRest } = rest;
    void _as;
    return (
      <a className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonRest } = rest as AsButtonProps;
  void _as;
  return (
    <button className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
