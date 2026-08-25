"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Textflip() {
  const text = [
    "Design Engineer",
    "Full Stack Developer", 
    "Agentic AI Engineer",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % text.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity:1,
      transition: {
        duration: 0.4,
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="h-10 w-10 overflow-hidden items-center mx-auto flex justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={textVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-xl absolute items-center flex text-black font-semibold"
        >
          {text[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}