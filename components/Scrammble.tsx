"use client";

import { useState } from "react";

type TextProps = {
  text: string;
  duration?: number;
  className?:string
};

function Scramble({ text="Cyberpunk", duration = 600,className }: TextProps) {
  const chars = "!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const [display, setDisplay] = useState(text);

  const scramble = () => {
    let index = 0;

    const interval = setInterval(() => {
      const output = text
        .split("")
        .map((char, i) => {
          // Keep spaces
          if (char === " ") return " ";

          // Reveal characters from left to right
          if (i <= index) {
            return char;
          }

          // Otherwise show random character
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(output);

      index++;

      if (index >= text.length) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, duration / text.length);
  };

  return (
    <div onMouseEnter={scramble} className={`${className} font-semibold transition-all duration-75`}>
      {display}
    </div>
  );
}

export default Scramble;