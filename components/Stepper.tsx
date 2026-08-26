"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

type StepperProps = {
  min: number
  max: number
  color?: string
  textColor?: string
}

function Stepper({
  min=0,
  max=10,
  color = "bg-neutral-200",
  textColor = "text-black",
}: StepperProps) {
  const [value, setValue] = useState(min)

  return (
    <div className="flex gap-0.5">
     
      <button
        disabled={value === min}
        onClick={() =>
          setValue((prev) => Math.max(prev - 1, min))
        }
        className={`
          flex h-10 w-10 items-center justify-center
          rounded-l-full font-semibold cursor-pointer
          ${color}
            ${textColor}
          disabled:cursor-not-allowed disabled:opacity-50
        `}
      >
        -
      </button>

      <div
        className={`
          flex h-10 w-20 items-center justify-center
          overflow-hidden font-semibold
          bg-neutral-950
          ${textColor}
          dark:bg-neutral-200 dark:text-black
        `}
      >
        <AnimatePresence mode="popLayout">
          {String(value).split("").map((digit, index) => (
            <motion.span
              key={`${index}-${digit}`}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                delay: index * 0.05,
              }}
            >
              {digit}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

     
      <button
        disabled={value === max}
        onClick={() =>
          setValue((prev) => Math.min(prev + 1, max))
        }
        className={`
          flex h-10 w-10 items-center justify-center
          rounded-r-full font-semibold cursor-pointer
          ${color}
            ${textColor}
          disabled:cursor-not-allowed disabled:opacity-50
        `}
      >
        +
      </button>
    </div>
  )
}

export default Stepper