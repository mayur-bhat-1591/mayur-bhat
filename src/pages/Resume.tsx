import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-foreground">
                Building the Future with <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                  AI Innovation
                </span>
              </h1>
            </>
          }
        >
          <motion.div 
            className="w-full h-full rounded-2xl overflow-hidden bg-muted"
            style={{
              backgroundImage: "url('https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=3840&q=75')",
              backgroundSize: "cover",
              backgroundPosition: "left top"
            }}
          />
        </ContainerScroll>

        
      </div>
    </div>
  );
};

export default Resume;
