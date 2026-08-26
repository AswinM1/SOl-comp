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
      name: "Cube",
      description: "Interactive 3D cube",
      href: "/docs/components/Cube",
      component: <Cube />,
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
      name: "Liquid",
      description: "Fluid liquid animation",
      href: "/docs/components/Liquid",
      component: <Liquid />,
    },
    {
      name: "Mac Dock",
      description: "Animated macOS-style dock",
      href: "/docs/components/MacDock",
      component: <MacDock />,
    },
    {
      name: "Pendulum",
      description: "Interactive pendulum animation",
      href: "/docs/components/Pendulum",
      component: <Pendulum />,
    },
    {
      name: "Picker",
      description: "3D wheel picker",
      href: "/docs/components/Picker",
      component: <Picker />,
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
    setTimeout(() => setCopied(false), 1500);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <main className="relative flex min-h-screen flex-1 justify-center overflow-hidden bg-neutral-950 px-6 py-20 antialiased">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, black 40%, transparent 100%)",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[120px]" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        className="relative flex w-full max-w-5xl flex-col items-center text-center"
      >


        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-5 text-[52px] font-normal leading-none tracking-[-0.045em] text-white"
        >
          S<span className="line-through decoration-1 decoration-neutral-600">o</span>l components
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-5 max-w-xl text-[15px] leading-6 tracking-[-0.01em] text-neutral-400"
        >
          Beautiful animated components for React. Made with Motion and
          Tailwind. Copy and paste directly into your project.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-7 flex gap-3"
        >
          <Link
            href="/docs"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-neutral-200 hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.35)]"
          >
            Explore Docs
          </Link>

          
           <a href="https://github.com/AswinM1/SOl-comp"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-neutral-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-neutral-600 hover:bg-neutral-800"
          >
            Star on GitHub
          </a>
        </motion.div>

        {/* Quick Start */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.7 }}
          className="mt-10 flex w-fit flex-col gap-3 sm:flex-row"
        >
          {/* Command */}
          <div className="flex h-[40px] min-w-0 items-center rounded-md border border-neutral-800 bg-neutral-900 px-4 sm:px-5">
            <code className="min-w-0 flex-1 truncate text-left font-mono text-[14px] font-semibold tracking-[-0.035em] text-neutral-200">
              <span className="text-white">npx shadcn@latest add</span>{" "}
              <span className="text-neutral-500">
                https://sol-components.vercel.app/r/shimmer.json
              </span>
            </code>

            {/* Copy Button */}
            <button
              type="button"
              onClick={handleCopy}
              aria-label={copied ? "Copied" : "Copy command"}
              className="ml-4 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-white"
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
                    <rect width="13" height="13" x="9" y="9" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </button>
          </div>

          {/* Quick Start */}
          <Link href="/docs">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="flex h-[40px] items-center justify-center rounded-md bg-white px-4 text-sm font-medium tracking-[-0.02em] text-black transition-colors hover:bg-neutral-400"
            >
              Quick Start
            </motion.div>
          </Link>
        </motion.div>

        {/* Component Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2  gap-5"
        >
          {components.map((item) => (
            <motion.div
              key={item.name}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              <Link href={item.href} className=" h-full col-span-1 ">
                <div className="relative h-full  max-w-xl min-w-2 p-5 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 text-left transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-900">
                  {/* Preview */}
                  <div className="flex h-60 items-center justify-center overflow-hidden bg-neutral-900/50 p-6">
                    {item.component}
                  </div>

                  {/* Info */}
                  <div className="border-t border-neutral-800 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-sm font-medium text-white">
                          {item.name}
                        </h2>
                        <p className="mt-1 text-xs text-neutral-500">
                          {item.description}
                        </p>
                      </div>

                      <span className="text-lg text-neutral-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        </motion.div>

    </main>
  );
}