"use client";
import { useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

interface IDCardProps {
  name?: string;
  role?: string;
  description?: string;
  id?: string;
  country?: string;
  avatar?: string;
  avatarFallback?: string;
  label?: string;
}

function IDCard({
  name = "Aswin",
  role = "Design Engineer",
  description = "Building thoughtful interfaces and developer tools with React, TypeScript and AI.",
  id = "001284",
  country = "INDIA",
  avatar,
  avatarFallback = "A",
  label = "Random",
}: IDCardProps) {
  const [hovered, setHovered] = useState<boolean>(false);

  const mouseX = useMotionValue<number>(0);
  const mouseY = useMotionValue<number>(0);

  const rotateX = useSpring(
    useTransform(mouseY, [-150, 150], [5, -5]),
    {
      stiffness: 200,
      damping: 20,
    }
  );

  const rotateY = useSpring(
    useTransform(mouseX, [-150, 150], [-5, 5]),
    {
      stiffness: 200,
      damping: 20,
    }
  );

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    const rect = event.currentTarget.getBoundingClientRect();

    mouseX.set(
      event.clientX - rect.left - rect.width / 2
    );

    mouseY.set(
      event.clientY - rect.top - rect.height / 2
    );
  };

  const handleMouseLeave = (): void => {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  };

  return (
    <div className="flex min-h-screen w-full items-center justify-center [perspective:1000px]">
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
        }}
        className="
          relative
          h-[240px]
          w-[380px]
          overflow-hidden
          rounded-2xl
          border border-white/10
          bg-neutral-800
          text-white
        "
      >
        {/* Wind */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {[0, 1, 2, 3].map((index: number) => (
            <motion.div
              key={index}
              className="
                absolute
                h-px
                w-90
                bg-gradient-to-r
                from-transparent
                via-white
                to-blue-700
              "
              style={{
                top: `${10 * index + 30}%`,
              }}
              animate={
                hovered
                  ? {
                      x: [0, 600],
                      opacity: [0, 0.8, 0],
                    }
                  : {
                      x: 0,
                      opacity: 0,
                    }
              }
              transition={{
                duration: 1.2,
                delay: index * 0.12,
                repeat: hovered ? Infinity : 0,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-between p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              {avatar ? (
                <img
                  src={avatar}
                  alt={name}
                  className="h-12 w-12 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black">
                  {avatarFallback}
                </div>
              )}

              <div>
                <p className="text-sm font-medium">
                  {name}
                </p>

                <p className="text-xs text-neutral-500">
                  {role}
                </p>
              </div>
            </div>

            <span className="font-mono text-[10px] text-neutral-600">
              {id}
            </span>
          </div>

          <div>
            <p className="max-w-[260px] text-sm leading-6 text-neutral-400">
              {description}
            </p>

            <div className="mt-5 flex justify-between border-t border-white/10 pt-4">
              <span className="text-[10px] uppercase tracking-widest text-neutral-600">
                {label}
              </span>

              <span className="font-mono text-[10px] text-neutral-600">
                {country}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default IDCard;