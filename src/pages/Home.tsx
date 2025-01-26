import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="animate-fadeIn">      
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: `url('/background.jpg')`,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl lg:text-4xl text-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed tracking-wide"
          >
            I build AI agents that solve real-world business problems and drive growth.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center gap-6 mb-12"
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
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 bg-[#8B5CF6] text-white px-8 py-4 rounded-lg hover:bg-[#7C3AED] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary/20 text-lg font-medium"
            >
              View My Agents
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;