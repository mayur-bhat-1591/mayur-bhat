import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FloatingShape } from "../components/FloatingShapes";

const Projects = () => {
  const projects = [
 {
    "title": "TechTrend Fusion",
    "description": "Multi-agent system that combines web research, market analysis, and social media content generation for comprehensive tech trend analysis.",
    "longDescription": "This sophisticated multi-agent system leverages the power of three specialized AI agents working in harmony: 1. Browser Agent: Performs real-time web research on emerging tech trends 2. Market Analysis Agent: Evaluates market impact and company performance metrics 3. Content Generation Agent: Creates professional LinkedIn posts and technical documentationThe system excels at identifying emerging technology trends, analyzing their market impact, and generating insightful content for technical professionals. Perfect for tech leaders and decision-makers who need to stay ahead of industry developments.",
    "tags": ["Python", "AI Agents", "Market Analysis", "Web Scraping", "NLP", "Content Generation"],
    "github": "https://github.com/yourusername/techtrend-fusion",
    "demo": "https://techtrend-fusion-demo.com",
    "image": "/techtrend-fusion.svg"
  },
    {
      title: "AI Agent 2",
      description: "Description of your second AI agent and its capabilities.",
      longDescription: "A computer vision-based AI agent that can analyze and process visual data in real-time. Perfect for applications requiring image recognition and processing.",
      tags: ["Python", "Computer Vision", "Deep Learning"],
      github: "https://github.com/yourusername/project2",
      demo: "https://demo-link-2.com",
      image: "/placeholder.svg"
    },
    {
      title: "AI Agent 3",
      description: "Description of your third AI agent and its capabilities.",
      longDescription: "An advanced AI system that combines natural language processing with predictive analytics to provide actionable business insights.",
      tags: ["Python", "NLP", "Analytics"],
      github: "https://github.com/yourusername/project3",
      demo: "https://demo-link-3.com",
      image: "/placeholder.svg"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      {/* Floating shapes */}
      <FloatingShape type="pentagon" className="w-36 h-36 top-20 left-[8%] bg-primary/10 animate-float" />
      <FloatingShape type="hexagon" className="w-24 h-24 bottom-40 right-[12%] bg-secondary/10 animate-float delay-400" />
      <FloatingShape type="square" className="w-20 h-20 top-[35%] right-[25%] bg-accent/10 animate-float delay-700" />

      <h1 className="text-4xl font-bold text-primary mb-8">My Agents</h1>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={item}
            className="h-full"
          >
            <Card className="h-full bg-background/50 backdrop-blur-sm border border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
              <CardHeader>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <CardTitle className="text-xl text-primary">{project.title}</CardTitle>
                <CardDescription className="text-foreground/80">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/70 mb-4">
                  {project.longDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-muted/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-primary/90 border border-primary/20 hover:border-primary/40 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group"
                >
                  <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors group"
                >
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                  Demo
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
