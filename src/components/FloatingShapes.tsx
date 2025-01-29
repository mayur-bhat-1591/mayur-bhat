import { motion } from "framer-motion";

type ShapeType = "circle" | "triangle" | "square" | "pentagon" | "hexagon";

interface FloatingShapeProps {
  className?: string;
  type: ShapeType;
}

const getShapePath = (type: ShapeType): string => {
  switch (type) {
    case "triangle":
      return "clip-path: polygon(50% 0%, 0% 100%, 100% 100%)";
    case "pentagon":
      return "clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)";
    case "hexagon":
      return "clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";
    case "square":
      return "clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";
    default:
      return ""; // circle doesn't need clip-path
  }
};

export const FloatingShape = ({ className, type }: FloatingShapeProps) => (
  <motion.div
    className={`absolute backdrop-blur-sm ${className}`}
    style={{ style: getShapePath(type) }}
    animate={{
      y: ["0%", "-50%", "0%"],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);