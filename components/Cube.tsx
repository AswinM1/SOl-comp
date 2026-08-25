"use client"

import { motion } from "motion/react"
import { useState } from "react"

type Rotation = {
  x: number
  y: number
}

interface CubeProps {
  images?: string[]
  width?: number
  height?: number
  depth?: number
  initialRotation?: Rotation
}

const defaultImages = [
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b",
]

const OVERLAP = 1

function Cube({
  images = defaultImages,
  width = 220,
  height = 140,
  depth = 160,
  initialRotation = { x: 0, y: 30 },
}: CubeProps) {
  const [rotation, setRotation] = useState<Rotation>(initialRotation)

  const halfW = width / 2
  const halfD = depth / 2

  const handleDrag = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    // Only horizontal dragging rotates the cube.
    setRotation({
      x: initialRotation.x,
      y: initialRotation.y + info.offset.x,
    })
  }

  const diagonal = Math.sqrt(
    width ** 2 +
      height ** 2 +
      depth ** 2
  )

  const face: React.CSSProperties = {
    position: "absolute",
    backfaceVisibility: "hidden",
  }

  return (
    <div
      className="
        flex
        w-full
        items-center
        justify-center
        overflow-visible
        [perspective:1000px]
      "
      style={{
        minHeight: diagonal,
        padding: diagonal * 0.15,
      }}
    >
      <motion.div
        drag
        dragConstraints={{
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
        dragElastic={0}
        onDrag={handleDrag}
        style={{
          width,
          height,
          rotateX: rotation.x,
          rotateY: rotation.y,
          touchAction: "none",
          transformStyle: "preserve-3d",
        }}
        className="
          relative
          cursor-grab
          active:cursor-grabbing
        "
      >
        {/* ───────────── FRONT ───────────── */}

        <div
          style={{
            ...face,
            width: width + OVERLAP * 2,
            height: height + OVERLAP * 2,
            left: -OVERLAP,
            top: -OVERLAP,
            transform: `translateZ(${halfD}px)`,
          }}
        >
          <img
            src={images[0]}
            alt="Cube front"
            className="block h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* ───────────── BACK ───────────── */}

        <div
          style={{
            ...face,
            width: width + OVERLAP * 2,
            height: height + OVERLAP * 2,
            left: -OVERLAP,
            top: -OVERLAP,
            transform: `rotateY(180deg) translateZ(${halfD}px)`,
          }}
        >
          <img
            src={images[1]}
            alt="Cube back"
            className="block h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* ───────────── RIGHT ───────────── */}

        <div
          style={{
            ...face,
            width: depth + OVERLAP * 2,
            height: height + OVERLAP * 2,
            left: halfW - halfD - OVERLAP,
            top: -OVERLAP,
            transform: `rotateY(90deg) translateZ(${halfW}px)`,
          }}
        >
          <img
            src={images[2]}
            alt="Cube right"
            className="block h-full w-full object-cover"
            draggable={false}
          />
        </div>

        {/* ───────────── LEFT ───────────── */}

        <div
          style={{
            ...face,
            width: depth + OVERLAP * 2,
            height: height + OVERLAP * 2,
            left: halfW - halfD - OVERLAP,
            top: -OVERLAP,
            transform: `rotateY(-90deg) translateZ(${halfW}px)`,
          }}
        >
          <img
            src={images[3]}
            alt="Cube left"
            className="block h-full w-full object-cover"
            draggable={false}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Cube