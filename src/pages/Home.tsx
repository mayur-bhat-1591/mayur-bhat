
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { FloatingShape } from "../components/FloatingShapes";
import { Card } from "@/components/ui/card";

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <div className="animate-fadeIn relative min-h-screen overflow-hidden bg-black/[0.96]">      
      {/* 3D Scene Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      <FloatingShape type="hexagon" className="w-32 h-32 top-20 left-[10%] bg-primary/10 animate-float z-10" />
      <FloatingShape type="triangle" className="w-24 h-24 bottom-40 right-[15%] bg-secondary/10 animate-float delay-300 z-10" />
      <FloatingShape type="pentagon" className="w-20 h-20 top-[40%] right-[25%] bg-accent/10 animate-float delay-700 z-10" />

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="relative pointer-events-none z-20">
        <Card className="min-h-screen bg-transparent border-0 shadow-none">
          <div className="flex flex-col justify-center min-h-screen max-w-2xl mx-auto px-8">
            <motion.p 
              style={{ y, opacity }}
              className="text-2xl md:text-3xl lg:text-4xl text-foreground mb-12 font-medium leading-relaxed tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 text-center"
            >
              I build AI agents that solve real-world business problems and drive growth.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex justify-center gap-6 mb-12 pointer-events-auto"
            >
              <a
                href="https://github.com/mayur-bhat-1591"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/20 hover:bg-muted/40 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-primary" />
              </a>
              <a
                href="https://linkedin.com/in/bhatm"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted/20 hover:bg-muted/40 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-primary" />
              </a>
              <a
                href="mailto:iammayurbhat@gmail.com"
                className="p-3 rounded-full bg-muted/20 hover:bg-muted/40 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="w-6 h-6 text-primary" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center pointer-events-auto"
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-3 bg-[#8B5CF6]/80 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-[#7C3AED] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 text-lg font-medium"
              >
                View My Agents
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
