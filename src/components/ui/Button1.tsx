// src/components/ui/Button.tsx
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
}

export function Button({ variant = "default", className, ...props }: ButtonProps) {
  const baseClasses = "px-4 py-2 rounded-md font-semibold transition-colors";
  const variants = {
    default: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-100",
    ghost: "bg-transparent text-purple-600 hover:bg-purple-100",
  };

  return (
    <button
      className={cn(baseClasses, variants[variant], className)}
      {...props}
    />
  );
}
