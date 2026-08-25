"use client";

import { motion } from "motion/react";

interface LiquidProps {
  text?: string;
  textColor?: string;
  liquidColor?: string;
  fontSize?: string;
  duration?: number;
  repeat?: number;
}

function Liquid({
  text = "LiQuids",
  textColor = "text-amber-400",
  liquidColor = "text-blue-800",
  fontSize = "text-8xl",
  duration = 5,
  repeat = Infinity,
}: LiquidProps) {
  return (
    <div className="flex w-full justify-center">
      <div className="relative w-fit">
        {/* Base Text */}
        <motion.div
          className={`
            w-fit
            ${fontSize}
            ${textColor}
            font-sans
            font-bold
            tracking-tight
          `}
        >
          {text}
        </motion.div>

        {/* Liquid Layer */}
        <motion.div
          animate={{
            clipPath: [
              "polygon(0 80%, 15% 55%, 30% 65%, 45% 55%, 60% 65%, 75% 55%, 100% 60%, 100% 100%, 0 100%)",

              "polygon(0 80%, 15% 65%, 30% 55%, 45% 65%, 60% 55%, 75% 65%, 100% 55%, 100% 100%, 0 100%)",

              "polygon(0 60%, 15% 55%, 30% 65%, 45% 55%, 60% 65%, 75% 55%, 100% 60%, 100% 100%, 0 100%)",
            ],
          }}
          transition={{
            duration,
            repeat,
            repeatType: "loop",
          }}
          className={`
            absolute
            inset-0
            w-fit
            ${fontSize}
            ${liquidColor}
            font-sans
            font-bold
            tracking-tight
          `}
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
}

export default Liquid;