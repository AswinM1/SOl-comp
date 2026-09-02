"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState,useEffect} from "react";

import Button from "@/components/Button";
import Action from "@/components/Action";
import Feedback from "@/components/Feedback";
import IDcard from "@/components/Id";
import MacDock from "@/components/Macdock";
import Stepper from "@/components/Stepper";
import Github from "@/components/Github";
import Scrammble from "@/components/Scrammble";

import { FaGithub } from "react-icons/fa";
import Pendulum from "@/components/Pendulum";

export default function Home() {
   const [stars, setStars] = useState<number | null>(null);
     useEffect(() => {
    async function getStars() {
      const res = await fetch(
        "https://api.github.com/repos/AswinM1/SOl-comp/stargazers/count"
      );

      const data = await res.json();

      setStars(data.count);
    }

    getStars();
  }, []);

  const components = [
    {
      name: "Button",
      description: "Animated interactive button",
      href: "/docs/components/Button",
      component: <Button />,
    },

    {
      name: "Star on github",
      description: "Animated Github button",
      href: "/docs/components/Github",
      component: <Github />,
    },
    {
      name: "Pendulum",
      description: "Animated pendulum",
      href: "/docs/components/pendulum",
      component: <Pendulum length={120} />,
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
      name: "Stepper",
      description: "Animated number stepper",
      href: "/docs/components/Stepper",
      component: <Stepper min={0} max={10} />,
    },

    {
      name: "Scramble",
      description: "Animated text",
      href: "/docs/components/Stepper",
      component: (
        <Scrammble
          text="cyberpunk"
          className="font-mono font-light"
        />
      ),
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
    <main className="relative  items-center flex min-h-screen w-full justify-center overflow-hidden  bg-neutral-200 dark:bg-[#131313] px-4 py-14 antialiased sm:px-6 sm:py-20">
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
        className="relative flex w-full max-w-5xl mx-auto  flex-col items-center justify-center"
      >
        {/* ================= HEADING ================= */}

        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="max-w-2xl flex  dark:text-neutral-300 text-neutral-900 text-center items-center text-[30px]  font-semibold  justify-center  mx-auto leading-tight antialiased sm:text-[40px]"
        >
          Components to make your Websites
            soul touching
         
        </motion.h1>

        {/* ================= DESCRIPTION ================= */}

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-5 max-w-[90%] text-[14px] dark:text-neutral-400 text-neutral-800  text-center leading-6 tracking-[-0.01em]  sm:max-w-xl sm:text-[15px]"
        >
          SOl components is a free, open-source collection of
          animated React components. Copy paste directly or
          install any component with the shadcn CLI.
        </motion.p>

        {/* ================= BUTTONS ================= */}

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
        >
          {/* Docs */}

          <Link
            href="/docs"
            className="flex h-10 items-center justify-center rounded-md bg-yellow-300 px-5 text-sm font-medium tracking-tight text-black transition-all hover:bg-yellow-200"
          >
            Explore docs
          </Link>

          {/* Github */}

          <a
            href="https://github.com/AswinM1/SOl-comp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 items-center px-3 justify-center rounded-md  border-neutral-700 bg-neutral-800 px-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
          >
            <span className="flex items-center justify-center mr-2">
              <FaGithub size={18} />
            </span>

            Star on github
          </a>
        </motion.div>

        {/* ================= QUICK START ================= */}

        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-10 flex w-full max-w-2xl flex-col gap-3 sm:flex-row"
        >
          {/* Command */}

          <div className="flex h-10 min-w-0 flex-1 items-center rounded-md  border-neutral-800 bg-neutral-900 px-3 sm:px-4">
            <code className="min-w-0 flex-1  truncate text-center text-[11px] font-semibold tracking-[-0.035em] text-neutral-200 sm:text-[13px]">
              <span className="text-white">
                npx shadcn@latest add{" "}
              </span>

              <span className="text-neutral-500">
                https://sol-components.vercel.app/r/shimmer.json
              </span>
            </code>

            {/* Copy */}

            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? "Copied" : "Copy command"}
              className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-white sm:ml-4"
            >
              <AnimatePresence
                mode="wait"
                initial={false}
              >
                {copied ? (
                  <motion.svg
                    key="check"
                    initial={{
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.5,
                    }}
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
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                    }}
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

          {/* Quick Start Button */}

          <Link
            href="/docs"
            className="w-full sm:w-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-10 w-full items-center justify-center rounded-md bg-yellow-300 px-5 text-sm font-medium tracking-[-0.02em] text-black transition-colors hover:bg-yellow-200 sm:w-auto"
            >
              Quick start
            </motion.div>
          </Link>
        </motion.div>

        {/* ================= COMPONENT GRID ================= */}

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
          className="relative mt-14 justify-center grid w-full mx-auto grid-cols-1 gap-4 sm:mt-16 sm:grid-cols-3 sm:gap-5"
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
                  {/* ================= OUTER BOX ================= */}

                  <div
  className="
    relative w-full max-w-[320px] sm:w-[320px] h-[220px] sm:h-[268px]
    rounded-[24px] transition-all duration-300 group cursor-pointer
    bg-[#181818] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
    hover:bg-[#202020]
  "
>
  {/* ================= INNER PREVIEW BOX ================= */}
  <div
    className="
      absolute left-[12px] top-[12px] right-[12px] bottom-[68px]
      rounded-[14px] overflow-hidden flex items-center justify-center
      transition-colors duration-300 bg-[#131313]
    "
  >
    <div className="flex h-full w-full max-w-full items-center justify-center p-4 scale-80">
      {item.component}
    </div>
  </div>

  {/* ================= INFO (pinned to bottom strip) ================= */}
  <div className="absolute left-[12px] right-[12px] bottom-0 h-[68px] flex items-center justify-between gap-4 border-t border-neutral-800 px-2">
    <div className="min-w-0">
      <h2 className="text-sm font-medium text-white">
        {item.name}
      </h2>
      <p className="mt-1 truncate text-xs text-neutral-500">
        {item.description}
      </p>
    </div>

    {/* Arrow */}
    <span
      className="
        shrink-0 text-lg text-neutral-600 transition-all duration-300
        group-hover:translate-x-1 group-hover:text-white
      "
    >
      →
    </span>
  </div>
</div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>

         
          
        </motion.div>

        {/* ================= VIEW MORE ================= */}

        <Link href="/docs">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-8
              cursor-pointer
              rounded-sm
              border
              border-neutral-700
              bg-neutral-800
              px-6
              py-2.5
              text-sm
              font-medium
              text-white
              transition-colors
              hover:border-neutral-500
              hover:bg-neutral-900
            "
          >
            view more
          </motion.button>
        </Link>
          <footer className=" relative mt-20 w-full border-t border-neutral-800 ">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-500 sm:flex-row">
          <p>
           Made by Aswin 
          </p>
          <p className=" font-black text-[100px] sm:text-[220px]  transition-all duration-150 ease-in-out hover:bg-linear-to-b
    hover:from-yellow-300
    cursor-pointer
    
    hover:to-red-500
    hover:bg-clip-text
    hover:text-transparent">SOL</p>
          <div className="flex items-center gap-5">
            <Link
              href="/docs"
              className="transition-colors hover:text-white"
            >
              Docs
            </Link>

            <a
              href="https://github.com/AswinM1/SOl-comp"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>

      </motion.div>
    </main>
  );
}
