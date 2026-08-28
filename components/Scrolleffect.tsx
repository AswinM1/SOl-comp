"use client"
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react"

import { useRef, type RefObject } from "react"

interface ScrollItemProps {
  value: string
  container: RefObject<HTMLDivElement | null>
}

function ScrollItem({ value, container }: ScrollItemProps) {
  const itemRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: itemRef,
    container,
    offset: ["center end", "center center", "center start"],
  })

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 1],
    [0.25, 0.5, 1]
  )

  const blur = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 0, 1]
  )

  const x = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, -5, 0]
  )

  const filter = useMotionTemplate`blur(${blur}px)`

  return (
    <motion.div
      ref={itemRef}
      style={{
        opacity,
        filter,
        x,
      }}
      className="text-xl  font-bold text-center"
    >
      {value}
    </motion.div>
  )
}

interface ScrolleffectProps {
  items?: string[]
  /** Tailwind height class applied to the scroll container, e.g. "h-96" */
  height?: string
  /** Tailwind gap class between items, e.g. "gap-24" */
  gap?: string
  /** Tailwind vertical padding class for the inner list, e.g. "py-40" */
  padding?: string
  className?: string
}

function Scrolleffect({
  items = ["hello", "how are you", "what's up", "goodbye"],
  height = "h-40 ",
  gap = "gap-24",
  padding = "py-70",
  className = "",
}: ScrolleffectProps) {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={ref}
      className={`${height} scrollbar-thumb-amber-50 overflow-y-scroll ${className} `}
    >
      <div className={`flex flex-col ${gap} ${padding} `}>
        {items.map((val, idx) => (
          <ScrollItem
            key={idx}
            value={val}
            container={ref}
          />
        ))}
      </div>
    </div>
  )
}

export default Scrolleffect
export type { ScrolleffectProps, ScrollItemProps }