"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Stepper from "@/components/Stepper";

export default function Home() {
  const command =
    "npx shadcn@latest add https://sol-components.vercel.app/r/shimmer.json";

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(12px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <main className="flex min-h-screen flex-1 items-center justify-center bg-neutral-950 px-6 antialiased">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="flex w-full max-w-5xl flex-col items-center text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className=" text-[52px] font-normal leading-none tracking-[-0.045em] text-white"
        >
          S<span className="line-through decoration-1">o</span>l components
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 max-w-xl text-[15px] leading-6 tracking-[-0.01em] text-neutral-400"
        >
          Beautiful animated components for React. Made with Motion and
          Tailwind. Copy and paste directly into your project.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-7 flex gap-3"
        >
          <Link
            href="/docs"
            className="
              rounded-md bg-white px-4 py-2
              text-sm font-medium text-black
              transition-colors hover:bg-neutral-200
            "
          >
            Explore Docs
          </Link>

          <a
            href="https://github.com/AswinM1/SOl-comp"
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-md border border-neutral-700
              px-4 py-2
              text-sm font-medium text-white
              transition-colors hover:bg-neutral-800
            "
          >
            Star on GitHub
          </a>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          variants={itemVariants}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-10 flex w-fit flex-col gap-3 sm:flex-row"
        >
          {/* Command */}
          <div
            className="
              flex h-[40px] min-w-0 
              items-center
              rounded-md
              bg-neutral-900
              px-4 sm:px-5
              
            "
          >
            <code
              className="
                min-w-0 flex-1
                truncate
                text-left
                font-mono
                text-[14px] sm:text-[14px]
                font-semibold
                tracking-[-0.035em]
                text-neutral-200
              "
            >
              <span className="text-white">
                npx shadcn@latest add
              </span>{" "}
              <span className="text-neutral-500">
                https://sol-components.vercel.app/r/shimmer.json
              </span>
            </code>

            {/* Copy button */}
            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? "Copied" : "Copy command"}
              className="
                ml-4 flex h-4 w-4 shrink-0
                items-center justify-center
                rounded-md
                text-neutral-500
                transition-colors
                hover:bg-neutral-800
                hover:text-white
              "
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.svg
                    key="check"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="copy"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      width="13"
                      height="13"
                      x="9"
                      y="9"
                      rx="2"
                      ry="2"
                    />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Quick Start button */}
          <Link href="/docs">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="
                flex h-[40px]
                items-center justify-center
                rounded-md
                bg-white
                px-4 sm:px-4
                text-md
                font-medium
                tracking-[-0.02em]
                text-black
                transition-colors
                hover:bg-neutral-400
              "
            >
              Quick Start
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}