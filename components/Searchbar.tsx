
"use client"
import { useEffect, useRef } from "react";

function Searchbar() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {

      const active = document.activeElement;

      if (
        active instanceof HTMLInputElement ||
        active instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="w-full h-50 flex items-center justify-center">

      <div className="relative">

        <input
          ref={inputRef}
          placeholder="Search items.."
          className="
            bg-neutral-300
            
            h-12
            rounded-full
            px-5
            text-neutral-700
            outline-none
            transition-all
            duration-300

            shadow-[inset_0_-1px_3px_3px_rgba(0,0,0,0.1),inset_0_2px_3px_1px_rgba(0,0,0,0.2)]

            focus:scale-[1.02]
          "
        />

        <div
          onClick={() => inputRef.current?.focus()}
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            w-8 h-8
            rounded-md
            bg-neutral-400

            flex items-center justify-center

            cursor-pointer
            select-none
          "
        >
          F
        </div>

      </div>

    </div>
  );
}

export default Searchbar;