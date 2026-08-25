"use client"

import React from "react"

interface ButtonProps {
  /** Click handler for the button. */
  onClick?: () => void

  /** Diameter of the button, in Tailwind size units. Default: 20 (5rem). */
  size?: number

  /** Background color class for the button face. */
  color?: string

  /** Disables press interaction and dims the button. */
  disabled?: boolean

  /** Optional label or icon rendered inside the button. */
  children?: React.ReactNode
}

function Button({
  onClick,
  size = 90,
  color = "bg-neutral-300",
  disabled = false,
  children,
}: ButtonProps) {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className=" h-36 w-36 rounded-md bg-neutral-500 flex justify-center items-center shadow-inner">
        <button
          onClick={onClick}
          disabled={disabled}
          style={{
            width:size,
            height:size,
          }}
          className={`
           
            
            rounded-full
            ${color}
            shadow-[1px_2px_8px_rgba(0,0,0,0.45),inset_0_2px_0px_rgba(255,255,255,0.8)]
            transition-transform
            active:scale-90
            active:shadow-[inset_0_1px_4px_4px_rgba(0,0,0,0.4)]
            disabled:cursor-not-allowed
            disabled:opacity-50
          `}
        >
          {children}
        </button>
      </div>
    </div>
  )
}

export default Button