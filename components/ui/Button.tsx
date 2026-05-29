"use client"

import { clsx } from "clsx"
import Link from "next/link"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "outline"
  size?: "sm" | "md" | "lg"
  href?: string
  external?: boolean
  fullWidth?: boolean
}

const variantClasses = {
  primary: "bg-[#2E6DAD] hover:bg-[#1d5a94] text-white shadow-lg shadow-[#2E6DAD]/20 hover:shadow-[#2E6DAD]/30",
  secondary: "bg-[#112240] hover:bg-[#1E3A5F] text-white border border-white/10",
  ghost: "bg-transparent hover:bg-white/5 text-white/80 hover:text-white",
  danger: "bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/20",
  outline: "bg-transparent border border-[#2E6DAD] text-[#4A90D9] hover:bg-[#2E6DAD]/10",
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", href, external, fullWidth, className, children, ...props }, ref) => {
    const classes = clsx(
      "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#2E6DAD] focus:ring-offset-2 focus:ring-offset-[#0B1629] disabled:opacity-50 disabled:cursor-not-allowed",
      variantClasses[variant],
      sizeClasses[size],
      fullWidth && "w-full",
      className
    )

    if (href) {
      if (external) {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"
