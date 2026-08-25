"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";

interface MacDockProps {
  items?: string[];
  itemSize?: number;
  magnifiedSize?: number;
  gap?: number;
}

interface DockItemProps {
  label: string;
  index: number;
  mouseX: MotionValue<number>;
  containerRef: React.RefObject<HTMLDivElement | null>;
  itemSize: number;
  magnifiedSize: number;
}

function DockItem({
  label,
  index,
  mouseX,
  containerRef,
  itemSize,
  magnifiedSize,
}: DockItemProps) {
  const distance = useTransform(mouseX, (value: number) => {
    const element = containerRef.current?.children[index];

    const bounds = element?.getBoundingClientRect();

    if (!bounds) return 0;

    return value - bounds.left - bounds.width / 2;
  });

  const size = useTransform(
    distance,
    [-150, 0, 150],
    [itemSize, magnifiedSize, itemSize]
  );

  const width = useSpring(size, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const height = useSpring(size, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  return (
    <motion.div
      style={{
        width,
        height,
        background:
          "linear-gradient(to bottom, rgba(29, 208, 253, 1) 50%, rgba(25, 25, 255, 1) 100%)",
      }}
      className="
        flex
        items-center
        justify-center
        rounded-full
        text-white
        [box-shadow:inset_0_2px_4px_rgba(0,0,0,0.4),0_2px_5px_rgba(255,255,255,0.2)]
      "
    >
      {label}
    </motion.div>
  );
}

function MacDock({
  items = ["What","How","Why"],
  itemSize = 50,
  magnifiedSize = 80,
  gap = 16,
}: MacDockProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue<number>(-1000);

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    mouseX.set(event.clientX);
  };

  const handleMouseLeave = (): void => {
    mouseX.set(-10000);
  };

  return (
    <div className="mt-10 flex w-full items-center justify-center">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          gap,
        }}
        className="
          flex
          items-end
          rounded-3xl
          bg-neutral-300
          px-6
          py-4
          [box-shadow:inset_0_2px_4px_rgba(0,0,0,0.4),0_2px_5px_rgba(255,255,255,0.2)]
        "
      >
        {items.map((item, index) => (
          <DockItem
            key={`${item}-${index}`}
            label={item}
            index={index}
            mouseX={mouseX}
            containerRef={containerRef}
            itemSize={itemSize}
            magnifiedSize={magnifiedSize}
          />
        ))}
      </div>
    </div>
  );
}

export default MacDock;