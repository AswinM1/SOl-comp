"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

import Button from "@/components/Button";
import Action from "@/components/Action";
import Cube from "@/components/Cube";
import Feedback from "@/components/Feedback";
import IDcard from "@/components/Id";
import Liquid from "@/components/Liquid";
import MacDock from "@/components/Macdock";
import Pendulum from "@/components/Pendulum";
import Picker from "@/components/Picker";
import Shimmer from "@/components/Shimmer";
import Stepper from "@/components/Stepper";
import Scrolleffect from "@/components/Scrolleffect";

export default function Home() {
  const components = [
    {
      name: "Button",
      description: "Animated interactive button",
      href: "/docs/components/Button",
      component: <Button />,
    },
    {
      name: "Card",
      description: "Animated card component",
      href: "/docs/components/Card",
      component: <Liquid />,
    },
    {
      name: "Code",
      description: "Animated code block",
      href: "/docs/components/Code",
      component: <Action />,
    },
   
    {
      name: "Feedback",
      description: "Interactive feedback component",
      href: "/docs/components/Feedback",
      component: <Feedback />,
    },
    {
      name: "ID Card",
      description: "Animated identification card",
      href: "/docs/components/IDcard",
      component: <IDcard />,
    },
   
    {
      name: "Mac Dock",
      description: "Animated macOS-style dock",
      href: "/docs/components/MacDock",
      component: <MacDock />,
    },
    {
      name: "Shimmer",
      description: "Animated shimmering text",
      href: "/docs/components/Shimmer",
      component: <Shimmer />,
    },
    {
      name: "Stepper",
      description: "Animated number stepper",
      href: "/docs/components/Stepper",
      component: <Stepper min={0} max={10} />,
    },
    
  ];

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
    <main className="relative flex min-h-screen w-full justify-center overflow-hidden bg-neutral-950 px-4 py-14 antialiased sm:px-6 sm:py-20">
    
     


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
        className="relative flex w-full max-w-5xl flex-col items-center text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-5 text-[40px] font-bold leading-[0.95] tracking-[-0.045em] text-white sm:text-[52px]"
        >
          S
          <span className="line-through decoration-1 decoration-neutral-600">
            o
          </span>
          l components
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-5 max-w-[90%] text-[14px] leading-6 tracking-[-0.01em] text-neutral-400 sm:max-w-xl sm:text-[15px]"
        >
          SOl components is a free, open-source collection of animated React
          components. Copy paste directly or install any component with the
          shadcn CLI.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
        >
          <Link
            href="/docs"
            className="flex h-10 items-center justify-center bg-yellow-300 px-5 font-mono text-sm font-medium tracking-tight text-black transition-all hover:bg-yellow-200"
          >
            EXPLORE DOCS
          </Link>

          <a
            href="https://github.com/AswinM1/SOl-comp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center justify-center border border-neutral-700 px-5 font-mono text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            STAR ON GITHUB
          </a>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
        >
          {/* Command */}
          <div className="flex h-10 min-w-0 flex-1 items-center rounded-md border border-neutral-800 bg-neutral-900 px-3 sm:px-4">
            <code className="min-w-0 flex-1 truncate text-left text-[11px] font-semibold tracking-[-0.035em] text-neutral-200 sm:text-[13px]">
              <span className="text-white">
                npx shadcn@latest add{" "}
              </span>

              <span className="text-neutral-500">
                https://sol-components.vercel.app/r/shimmer.json
              </span>
            </code>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? "Copied" : "Copy command"}
              className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-white sm:ml-4"
            >
              <AnimatePresence mode="wait" initial={false}>
                {copied ? (
                  <motion.svg
                    key="check"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    width="16"
                    height="16"
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
                    width="16"
                    height="16"
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
                    />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Quick Start */}
          <Link href="/docs" className="w-full sm:w-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-10 w-full items-center justify-center bg-yellow-300 px-5 font-mono text-sm font-medium tracking-[-0.02em] text-black transition-colors hover:bg-yellow-200 sm:w-auto"
            >
              QUICK START
            </motion.div>
          </Link>
        </motion.div>

        {/* Component Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
          className="mt-14 grid w-full  relative grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5"
        >
          <AnimatePresence initial={false}>
            {components.map((item) => (
              <motion.div
                key={item.name}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(12px)",
                }}
                transition={{
                  duration: 0.5,
                }}
                className="w-full"
              >
                <Link
                  href={item.href}
                  className="group block h-full w-full"
                >
                  <div className="relative h-full w-full overflow-hidden border border-neutral-800 bg-black text-left transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-900">
                    {/* Preview */}
                    <div className="flex h-52 w-full items-center justify-center overflow-hidden bg-neutral-900/50 p-4 sm:h-60 sm:p-6">
                      <div className="flex max-w-full items-center justify-center">
                        {item.component}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="border-t border-neutral-800 p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div className="min-w-0">
                          <h2 className="text-sm font-medium text-white">
                            {item.name}
                          </h2>

                          <p className="mt-1 text-xs text-neutral-500">
                            {item.description}
                          </p>
                        </div>

                        <span className="shrink-0 text-lg text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                
              </motion.div>
            ))}
          </AnimatePresence>
           <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-10
          h-32
          w-full
          bg-linear-to-t
          from-neutral-950
          via-neutral-950/80
          to-transparent
          backdrop-blur-[2px]
        "
      />
        </motion.div>

        
          <Link href={"/docs"}>
          <motion.button
            type="button"
      
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8  cursor-pointer border border-neutral-700 bg-neutral-950 px-6 py-2.5 font-mono text-sm font-medium text-white transition-colors hover:border-neutral-500 hover:bg-neutral-900"
          >
          VIEW MORE
          </motion.button>
          </Link>
      
      </motion.div>
    </main>
  );
}