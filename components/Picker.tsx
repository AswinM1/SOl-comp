"use client";

import { useState,useRef } from "react";
import { motion } from "motion/react";


const items = [
  "fight club","seven","wolf of wall street","insidious","green mile"
];

const ITEM_HEIGHT = 40;
const VISIBLE = 3;


const mod = (n: number, length: number) =>
  ((n % length)+length)%length

export default function Picker() {
    
    
  const [position, setPosition] = useState(0);

  
  const indexes = [];

  for (
    let i = position - VISIBLE;i <= position + VISIBLE;i++) {
    indexes.push(i);
  }

  const wheelLock = useRef(false);

  const changeSelected = (moveno: number) => {
    setPosition((prev) => Math.round(prev + moveno));
  };

const handleWheel = (e: React.WheelEvent) => {
  e.preventDefault();

  if (wheelLock.current) return;

  wheelLock.current = true;

  changeSelected(e.deltaY > 0 ? 1 : -1);

  setTimeout(() => {
    wheelLock.current = false;
  }, 150);
};

  return (
    <div className="flex min-h-screen items-center justify-center ">
      <div
        className="relative h-[290px] w-[380px] overflow-hidden rounded-2xl
                   border border-neutral-700 bg-[#171719]"
 >
    
        <div
          className="pointer-events-none absolute left-3 right-3 top-1/2
                     z-10 h-10 -translate-y-1/2 rounded-lg bg-white/5"
        />

        {indexes.map((virtualIndex) => {
          const distance = virtualIndex - position;
          const distanceFromCenter = Math.abs(distance);

          const itemIndex = mod(virtualIndex, items.length);


          return (
            <motion.button
              key={virtualIndex}
              onClick={() => setPosition(virtualIndex)}
              className="absolute left-0 flex w-full items-center justify-center text-xl font-medium text-neutral-400"
             onWheel={handleWheel}
              animate={{
                top: `calc(50% - ${ITEM_HEIGHT / 2}px + ${
                  distance * ITEM_HEIGHT
                }px)`,


                scale: Math.max(
                  1 - distanceFromCenter * 0.1,
                  0.6
                ),

                opacity: Math.max(
                  1 - distanceFromCenter * 0.25,
                  0.15
                ),

                rotateX: distance * -7,

                filter: `blur(${Math.min(
                  distanceFromCenter * 0.7,
                  3
                )}px)`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              style={{
                height: ITEM_HEIGHT,
                transformOrigin: "center",
              }}
            >
              <span
                className={
                  distance === 0
                    ? "font-semibold text-white"
                    : ""
                }
              >
                {items[itemIndex]}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}