
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
}

export const ContainerScroll: React.FC<ContainerScrollProps> = ({
  titleComponent,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scaleDimensions = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[120vh] py-40 w-full"
    >
      <motion.div
        style={{
          scale: scaleDimensions,
          opacity: opacity,
        }}
        className="fixed top-0 left-0 right-0 min-h-screen w-full py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-5xl">{titleComponent}</div>
            <motion.div
              style={{
                scale: scaleDimensions,
                opacity: opacity,
              }}
              className="relative w-full h-[60vh] mt-16"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
