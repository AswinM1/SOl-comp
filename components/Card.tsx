"use client"

import { motion } from "motion/react"

interface CardProps {
  /** Small label above the title, e.g. category. */
  label: string

  /** Main title text. */
  title: string

  /** Tailwind gradient "from" color class. */
  fromColor?: string

  /** Tailwind gradient "via" color class. */
  viaColor?: string

  /** Tailwind gradient "to" color class. */
  toColor?: string

  /** Full wave animation cycle duration, in seconds. */
  duration?: number

  /** Card width/height in Tailwind size units. */
  size?: number
}

function Card({
  label,
  title="Deserts",
  fromColor = "from-red-600",
  viaColor = "via-orange-400",
  toColor = "to-yellow-600",
  duration = 7,
  size = 52,
}: CardProps) {
  return (
    <div className="mx-auto mt-10 flex items-center justify-center">
      <div
        style={{
          width: `${size * 0.25}rem`,
          height: `${size * 0.25}rem`,
        }}
        className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-neutral-400
          bg-neutral-300
          shadow-2xl
        "
      >
        {/* Animated wave */}
        <motion.div
          animate={{
            clipPath: [
              "polygon(0 50%, 35% 55%, 30% 65%, 45% 55%, 60% 65%, 75% 55%, 100% 60%, 100% 100%, 0 100%)",

              "polygon(0 80%, 15% 65%, 30% 55%, 45% 65%, 60% 55%, 75% 65%, 100% 55%, 100% 100%, 0 100%)",

              "polygon(0 80%, 15% 55%, 30% 65%, 45% 55%, 60% 65%, 75% 55%, 100% 60%, 100% 100%, 0 100%)",
            ],
          }}
          transition={{
            duration,
            repeat: Infinity,
          }}
          className={`
            absolute
            inset-0
            bg-linear-to-t
            ${fromColor}
            ${viaColor}
            ${toColor}
          `}
        />

        {/* Soft glow */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.4),transparent_45%)]
          "
        />

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          <div>
            <p className="text-sm font-medium tracking-tight text-neutral-700">
              {label}
            </p>

            <h1 className="mt-2 font-serif text-3xl leading-none tracking-tight text-neutral-700">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card