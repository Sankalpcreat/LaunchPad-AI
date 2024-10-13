// src/components/ui/button.tsx

import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "default" | "link"  // You can add more variants as needed
  className?: string
}

export function Button({
  children,
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none"

  const variants = {
    default:
      "bg-purple-600 hover:bg-purple-700 text-white focus:ring-2 focus:ring-purple-500",
    link: "text-zinc-300 hover:text-purple-400 p-0 focus:outline-none",
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
