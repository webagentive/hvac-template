import { Star } from "lucide-react"
import { clsx } from "clsx"

interface ReviewStarsProps {
  rating: number
  max?: number
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ReviewStars({ rating, max = 5, size = "md", className }: ReviewStarsProps) {
  const sizes = { sm: 12, md: 16, lg: 20 }
  const starSize = sizes[size]

  return (
    <div className={clsx("flex items-center gap-0.5", className)}>
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={starSize}
          className={i < rating ? "text-amber-400 fill-amber-400" : "text-white/20"}
        />
      ))}
    </div>
  )
}
