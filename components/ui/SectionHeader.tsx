import { clsx } from "clsx"
import { Badge } from "./Badge"
import { ReactNode } from "react"

interface SectionHeaderProps {
  badge?: string
  title: ReactNode
  subtitle?: string
  align?: "left" | "center"
  className?: string
  titleClassName?: string
}

export function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div className={clsx(
      "space-y-4",
      align === "center" && "text-center",
      className
    )}>
      {badge && (
        <div className={align === "center" ? "flex justify-center" : undefined}>
          <Badge variant="steel">{badge}</Badge>
        </div>
      )}
      <h2 className={clsx(
        "text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={clsx(
          "text-lg text-white/55 leading-relaxed max-w-2xl",
          align === "center" && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
