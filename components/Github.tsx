"use client";

import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";

type github=
{
    className?:string
    onClick?:()=>{}

}
function Github({className}:github) {
  return (
    <motion.button
      whileHover="hover"
   onClick={(e)=>e.stopPropagation()}
      whileTap={{ scale: 0.97 }}
      className={`${className} group overflow-hidden flex hover:scale-102 transition-all duration-200 items-center justify-between cursor-pointer font-semibold tracking-tight dark:bg-neutral-900 rounded-md px-4 py-3 border shadow-[0_0_0_1px_rgba(255,255,255,0.1)]`}
    >
      <motion.span
   
        variants={{
          hover: {
            rotate: [0, 180,360],
            filter:["blur(0px)","blur(4px)","blur(0px)"],
            scale:1.2,
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          },
        }}
        className="flex px-2 justify-center"
      >
        <FaGithub size={20} />
      </motion.span>

      Star on GitHub
    </motion.button>
  );
}

export default Github;