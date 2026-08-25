"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface PendulumProps {
  length?: number;
  ballSize?: number;
  sensitivity?: number;
  color?: string;
  ballGradient?: string;
  stiffness?: number;
  damping?: number;
  maxAngle?: number;
}

function Pendulum({
  length = 300,
  ballSize = 48,
  sensitivity = 0.03,
  color = "bg-red-800",
  ballGradient = "bg-linear-to-r from-yellow-500 to-pink-700",
  stiffness = 100,
  damping = 10,
  maxAngle = 60,
}: PendulumProps) {
  const [angle, setAngle] = useState<number>(0);
  const previousX = useRef<number | null>(null);
 

  useEffect(() => {
   

    const handleMouseMove = (event: MouseEvent): void => {
      const currentX = event.clientX;

      // On the very first move we only have a "current" position and
      // no prior one to diff against — record it and bail out instead
      // of computing a movement against the ref's 0 default, which
      // used to cause a large jump on mount.
      if (previousX.current === null) {
        previousX.current = currentX;
        return;
      }

      const movement = previousX.current - currentX;
      previousX.current = currentX;

      setAngle((previous) => {
        const next = previous + movement * sensitivity;
        // Clamp so the pendulum swings within a believable arc
        // instead of accumulating unbounded rotation over time.
        return Math.max(-maxAngle, Math.min(maxAngle, next));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [sensitivity, maxAngle]);

  return (
    <div className="flex justify-center">
      <motion.div
        className={`relative mt-10 w-[3px] origin-top ${color}`}
        style={{
          height: length,
        }}
        animate={{
          rotate: angle,
        }}
        transition={{
          type: "spring",
          stiffness,
          damping,
        }}
      >
        <div
          className={`
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            rounded-full
            ${ballGradient}
          `}
          style={{
            width: ballSize,
            height: ballSize,
          }}
        />
      </motion.div>
    </div>
  );
}

export default Pendulum;