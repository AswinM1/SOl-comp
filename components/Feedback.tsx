"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface FeedbackProps {
  title?: string;
  placeholder?: string;
  submitText?: string;
  cancelText?: string;
  onSubmit?: (feedback: string) => void;
  defaultOpen?: boolean;
}

function Feedback({
  title = "Feedback",
  placeholder = "Tell us what you think...",
  submitText = "Submit",
  cancelText = "Cancel",
  onSubmit,
  defaultOpen = false,
}: FeedbackProps) {
  const [open, setOpen] = useState<boolean>(defaultOpen);
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = (): void => {
    onSubmit?.(feedback);
    setFeedback("");
    setOpen(false);
  };

  const handleCancel = (): void => {
    setFeedback("");
    setOpen(false);
  };

  return (
    <div className="mx-auto flex items-center justify-center">
      <AnimatePresence>
        <motion.div
          layout
          initial={{
            width: 95,
            height: 42,
            borderRadius: 6,
          }}
          animate={{
            width: open ? 420 : 95,
            height: open ? 300 : 42,
            borderRadius: open ? 18 : 6,
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 22,
            mass: 0.8,
          }}
          className="
            overflow-hidden
            border border-neutral-600
            bg-neutral-900
            font-sans
            tracking-tight
          "
        >
          <AnimatePresence mode="popLayout">
            {!open ? (
              <motion.button
                key="button"
                type="button"
                onClick={() => setOpen(true)}
                className="
                  h-full w-full
                  cursor-pointer
                  text-sm font-medium
                "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {title}
              </motion.button>
            ) : (
              <motion.div
                key="form"
                className="flex h-full w-full flex-col p-4"
                initial={{
                  opacity: 0,
                  scale: 0.92,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.92,
                }}
                transition={{
                  duration: 0.25,
                  delay: 0.08,
                }}
              >
                <textarea
                  autoFocus
                  value={feedback}
                  onChange={(event) =>
                    setFeedback(event.target.value)
                  }
                  placeholder={placeholder}
                  className="
                    min-h-0 flex-1
                    resize-none
                    rounded-xl
                    border border-neutral-600
                    bg-neutral-300
                    p-4
                    text-sm text-black
                    outline-none
                    placeholder:text-neutral-500
                    focus:border-neutral-400
                  "
                />

                <div className="mt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="
                      cursor-pointer
                      rounded-lg
                      border border-neutral-600
                      px-4 py-2
                      text-sm
                    "
                  >
                    {cancelText}
                  </button>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="
                      cursor-pointer
                      rounded-lg
                      bg-white
                      px-4 py-2
                      text-sm text-black
                    "
                  >
                    {submitText}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Feedback;