import { Phone } from "lucide-react"
import { clsx } from "clsx"
import { company } from "@/config/company"

interface PhoneButtonProps {
  variant?: "primary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  showNumber?: boolean
  className?: string
  label?: string
}

export function PhoneButton({
  variant = "primary",
  size = "md",
  showNumber = true,
  className,
  label,
}: PhoneButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  }

  const iconSizes = { sm: 14, md: 16, lg: 20 }

  const variantClasses = {
    primary: "bg-[#2E6DAD] hover:bg-[#1d5a94] text-white shadow-lg shadow-[#2E6DAD]/20",
    outline: "border border-[#2E6DAD] text-[#4A90D9] hover:bg-[#2E6DAD]/10",
    ghost: "text-white/80 hover:text-white hover:bg-white/5",
  }

  return (
    <a
      href={company.phoneHref}
      className={clsx(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <Phone size={iconSizes[size]} className="shrink-0" />
      {showNumber && (
        <span>{label || company.phone}</span>
      )}
    </a>
  )
}
