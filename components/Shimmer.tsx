"use client"

import React from "react"
import { easeOut, motion } from "motion/react"

interface ShimmerProps {
  /** The text to animate. Default: "Hello". */
  text?: string

  /** Base (resting) color of each letter. Default: "#000000". */
  baseColor?: string

  /** Highlight color the shimmer passes through. Default: "#d4d4d4". */
  highlightColor?: string

  /** Duration of one letter's full color cycle, in seconds. Default: 2. */
  duration?: number

  /** Delay between each letter's animation start, in seconds. Default: 0.4. */
  stagger?: number

  /** Additional classes applied to each letter span. */
  className?: string
}

function Shimmer({
  text = "Hello",
  baseColor = "#000000",
  highlightColor = "#d4d4d4",
  duration = 2,
  stagger = 0.4,
  className = "",
}: ShimmerProps) {
  return (
    <div>
      {text.split("").map((val, idx) => (
        <motion.span
          key={`${val}-${idx}`}
          className={`
            inline-block
            font-sans
            text-2xl
            font-medium
            ${className}
          `}
          animate={{
            color: [baseColor, highlightColor, baseColor],
          }}
          transition={{
            duration,
            delay: idx * stagger,
            repeat: Infinity,
            repeatType: "loop",
            ease: easeOut,
          }}
        >
          {val === " " ? "\u00A0" : val}
        </motion.span>
      ))}
    </div>
  )
}

export default Shimmer