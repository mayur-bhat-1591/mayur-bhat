import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-b from-white to-muted relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-grid-slate-200 [mask-image:linear-gradient(0deg,white,transparent)] dark:bg-grid-slate-800/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center relative">
          <h1 className="text-4xl md:text-6xl font-bold text-accent mb-6 animate-fadeIn hover:scale-105 transition-transform duration-300">
            Hi, I'm Mayur Bhat
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8 max-w-2xl mx-auto animate-fadeIn [animation-delay:200ms] hover:text-primary transition-colors duration-300">
            I build AI agents that solve real-world problems and help businesses
            grow.
          </p>
          <div className="flex justify-center gap-4 mb-12 animate-fadeIn [animation-delay:400ms]">
            <a
              href="https://github.com/mayur-bhat-1591"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors hover:scale-110 transform duration-200"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/bhatm"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-muted transition-colors hover:scale-110 transform duration-200"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:iammayurbhat@gmail.com"
              className="p-2 rounded-full hover:bg-muted transition-colors hover:scale-110 transform duration-200"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors hover:scale-105 transform duration-200 animate-fadeIn [animation-delay:600ms] shadow-lg hover:shadow-xl"
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
