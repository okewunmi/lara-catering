import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-plum text-ivory hover:bg-plum-soft",
  secondary: "bg-amber text-ivory hover:bg-amber-deep",
  ghost: "bg-transparent text-plum border border-plum/20 hover:border-plum/50",
};

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:");
    return (
      <Link
        href={href}
        className={classes}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
