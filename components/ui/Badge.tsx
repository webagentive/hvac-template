import { clsx } from "clsx"
import { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "steel" | "success" | "warning" | "danger" | "muted"
  className?: string
}

const variantClasses = {
  default: "bg-[#2E6DAD]/15 text-[#4A90D9] border border-[#2E6DAD]/30",
  steel: "bg-[#2E6DAD]/20 text-[#4A90D9] border border-[#2E6DAD]/40",
  success: "bg-green-500/10 text-green-400 border border-green-500/20",
  warning: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  danger: "bg-red-500/10 text-red-400 border border-red-500/20",
  muted: "bg-white/5 text-white/50 border border-white/10",
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span className={clsx(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
      variantClasses[variant],
      className
    )}>
      {children}
    </span>
  )
}
