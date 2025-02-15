
import React from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

interface TimelineProps {
  data: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
      {data.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="mb-16 last:mb-0"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-32">
              <div className="text-2xl font-bold text-primary">{item.title}</div>
            </div>
            <div className="flex-1 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-primary/20 pl-8">
              {item.content}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
