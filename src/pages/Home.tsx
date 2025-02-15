
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/spline";
import { FloatingShape } from "../components/FloatingShapes";
import { useEffect, useRef } from "react";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="animate-fadeIn relative min-h-screen overflow-hidden bg-black/[0.96]">      
      <FloatingShape type="hexagon" className="w-32 h-32 top-20 left-[10%] bg-primary/10 animate-float" />
      <FloatingShape type="triangle" className="w-24 h-24 bottom-40 right-[15%] bg-secondary/10 animate-float delay-300" />
      <FloatingShape type="pentagon" className="w-20 h-20 top-[40%] right-[25%] bg-accent/10 animate-float delay-700" />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <motion.p 
            style={{ y, opacity }}
            className="text-2xl md:text-3xl lg:text-4xl text-foreground mb-12 max-w-3xl font-medium leading-relaxed tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
          >
            I build AI agents that solve real-world business problems and drive growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-start gap-6 mb-12"
          >
            <a
              href="https://github.com/mayur-bhat-1591"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 transform hover:scale-110"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://linkedin.com/in/bhatm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href="mailto:iammayurbhat@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-all duration-300 transform hover:scale-110"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-[#8B5CF6] text-white px-8 py-4 rounded-lg hover:bg-[#7C3AED] transition-all duration-300 transform hover:shadow-lg hover:shadow-primary/20 text-lg font-medium"
            >
              View My Agents
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full min-h-screen"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
