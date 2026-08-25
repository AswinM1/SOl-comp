"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, type Transition } from "motion/react";
import { LoaderCircle, Check } from "lucide-react";

type ActionStatus = "input" | "processing" | "done";

interface ActionProps {
  placeholder?: string;
  processingDuration?: number;
  doneDuration?: number;
  onComplete?: (code: string) => void;
}

const spring: Transition = {
  type: "spring",
  stiffness: 260,
  damping: 26,
  mass: 0.9,
};

function Action({
  placeholder = "Enter your code",
  processingDuration = 2000,
  doneDuration = 1000,
  onComplete,
}: ActionProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [status, setStatus] = useState<ActionStatus>("input");
  const [code, setCode] = useState<string>("");

  // Track pending timeouts so they can be cleared on unmount or cancel.
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearPendingTimeouts = (): void => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  };

  // Clear any in-flight timers if the component unmounts mid-flow.
  useEffect(() => {
    return () => {
      clearPendingTimeouts();
    };
  }, []);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleDone = (): void => {
    if (!code.trim()) return;

    setStatus("processing");

    const processingTimeout = setTimeout(() => {
      setStatus("done");

      const doneTimeout = setTimeout(() => {
        setOpen(false);
        setStatus("input");
        onComplete?.(code);
        setCode("");
      }, doneDuration);

      timeoutsRef.current.push(doneTimeout);
    }, processingDuration);

    timeoutsRef.current.push(processingTimeout);
  };

  const handleCancel = (): void => {
    clearPendingTimeouts();
    setOpen(false);
    setStatus("input");
    setCode("");
  };

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence mode="popLayout" initial={false}>
        {!open ? (
          <motion.button
            key="button"
            layoutId="action"
            layout
            onClick={handleOpen}
            style={{ borderRadius: 10 }}
            className="
              h-fit w-fit p-3
              cursor-pointer
              border border-neutral-600
              bg-black
              font-sans text-sm font-medium tracking-tight
              text-neutral-200
            "
            transition={{ layout: spring }}
          >
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.2 }}
            >
              I have a code
            </motion.span>
          </motion.button>
        ) : (
          <motion.div
            key="content"
            layoutId="action"
            layout
            style={{ borderRadius: 14 }}
            className="
              relative z-50
              flex w-fit items-center
              overflow-hidden
              border border-neutral-600
              bg-black
              p-3
              font-sans tracking-tight
            "
            transition={{ layout: spring }}
          >
            <AnimatePresence mode="popLayout" initial={false}>
              {status === "input" && (
                <motion.div
                  key="input"
                  layout
                  className="flex items-center gap-3"
                  initial={{
                    opacity: 0,
                    filter: "blur(8px)",
                    x: -8,
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(8px)",
                    x: -8,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <textarea
                    autoFocus
                    value={code}
                    onChange={(event) => setCode(event.target.value)}
                    placeholder={placeholder}
                    className="
                      h-12 w-64
                      resize-none overflow-hidden
                      rounded-md
                      border border-neutral-700
                      bg-neutral-950
                      p-3
                      text-neutral-100
                      placeholder:text-neutral-500
                      outline-none
                    "
                  />

                  <button
                    type="button"
                    onClick={handleCancel}
                    className="
                      w-fit cursor-pointer
                      rounded-xl
                      border border-neutral-700
                      p-3
                      font-medium
                      text-neutral-300
                    "
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleDone}
                    disabled={!code.trim()}
                    className="
                      w-fit cursor-pointer
                      rounded-xl
                      bg-white
                      p-3
                      font-medium
                      text-black
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                  >
                    Done
                  </button>
                </motion.div>
              )}

              {status === "processing" && (
                <motion.div
                  key="processing"
                  layout
                  className="
                    flex items-center gap-3
                    px-3 py-2
                    text-sm text-neutral-200
                  "
                  initial={{
                    opacity: 0,
                    filter: "blur(8px)",
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    filter: "blur(8px)",
                    scale: 0.95,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <LoaderCircle size={18} className="animate-spin" />
                  <span>Processing...</span>
                </motion.div>
              )}

              {status === "done" && (
                <motion.div
                  key="done"
                  layout
                  className="
                    flex items-center gap-3
                    px-3 py-2
                    text-sm text-neutral-200
                  "
                  initial={{
                    opacity: 0,
                    filter: "blur(8px)",
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Check size={18} />
                  <span>Done</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Action;
