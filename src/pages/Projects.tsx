import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { FloatingShape } from "../components/FloatingShapes";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Brain, Code2, Database, GitBranch, Globe, MessageSquare, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AI Chat Assistant",
    description: "Conversational AI agent powered by advanced LLMs",
    icon: <MessageSquare className="w-12 h-12 text-primary" />,
    tags: ["LangChain", "OpenAI", "Python", "FastAPI"],
    link: "/projects/chat-assistant"
  },
  {
    title: "Knowledge Base Agent",
    description: "RAG-based system for document analysis and Q&A",
    icon: <Brain className="w-12 h-12 text-primary" />,
    tags: ["Vector DB", "Embeddings", "NLP", "FastAPI"],
    link: "/projects/knowledge-base"
  },
  {
    title: "Code Assistant",
    description: "AI-powered code generation and analysis tool",
    icon: <Code2 className="w-12 h-12 text-primary" />,
    tags: ["LLM", "Code Analysis", "Python"],
    link: "/projects/code-assistant"
  },
  {
    title: "Data Processing Agent",
    description: "Automated ETL and data analysis pipeline",
    icon: <Database className="w-12 h-12 text-primary" />,
    tags: ["ETL", "Python", "SQL", "Data Analysis"],
    link: "/projects/data-processor"
  },
  {
    title: "Web Scraping Agent",
    description: "Intelligent web data extraction system",
    icon: <Globe className="w-12 h-12 text-primary" />,
    tags: ["Web Scraping", "Python", "APIs"],
    link: "/projects/web-scraper"
  },
  {
    title: "DevOps Assistant",
    description: "AI-powered DevOps automation tool",
    icon: <GitBranch className="w-12 h-12 text-primary" />,
    tags: ["DevOps", "Automation", "CI/CD"],
    link: "/projects/devops-assistant"
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <>
      <BackgroundPaths title="AI Agents" />
      <div className="min-h-screen animate-fadeIn relative overflow-hidden">
        <FloatingShape type="triangle" className="w-32 h-32 top-20 left-[5%] bg-primary/10 animate-float" />
        <FloatingShape type="square" className="w-28 h-28 bottom-20 right-[10%] bg-secondary/10 animate-float delay-300" />
        <FloatingShape type="hexagon" className="w-20 h-20 top-[40%] right-[20%] bg-accent/10 animate-float delay-600" />
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">AI Agents Gallery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of intelligent AI agents designed to automate and enhance various aspects of development and data processing.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <Card className="h-full bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="mb-4">{project.icon}</div>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link to={project.link}>
                      <Button
                        variant="ghost"
                        className="w-full group hover:bg-primary/20"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
