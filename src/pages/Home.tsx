import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "../components/CustomCursor";

const Home = () => {
  return (
    <div className="animate-fadeIn">
      <CustomCursor />
      
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/background.jpg')`,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative">
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto animate-fadeIn [animation-delay:200ms] hover:text-primary transition-colors duration-300 font-medium backdrop-blur-sm bg-black/30 p-6 rounded-lg">
            I build AI agents that solve real-world problems and help businesses
            grow.
          </p>
          <div className="flex justify-center gap-4 mb-12 animate-fadeIn [animation-delay:400ms]">
            <a
              href="https://github.com/mayur-bhat-1591"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="w-6 h-6 text-white" />
            </a>
            <a
              href="https://linkedin.com/in/bhatm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
            <a
              href="mailto:iammayurbhat@gmail.com"
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors hover:scale-110 transform duration-200"
            >
              <Mail className="w-6 h-6 text-white" />
            </a>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg hover:bg-white/20 transition-colors hover:scale-105 transform duration-200 animate-fadeIn [animation-delay:600ms] shadow-lg hover:shadow-xl"
          >
            View My Agents
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;