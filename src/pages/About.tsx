import { motion } from "framer-motion";
import { Code2, Brain, Heart, Star, Sparkles, GraduationCap, Database, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TimelineSection from "@/components/TimelineSection";
import SkillsChart from "@/components/SkillsChart";
import { FloatingShape } from "../components/FloatingShapes";
import { Timeline } from "@/components/ui/timeline";

const timelineData = [
  {
    title: "2024",
    content: (
      <div>
        <p className="text-secondary text-sm md:text-base font-normal mb-8">
          Created AI agents specializing in LLMs and RAG Architecture development
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="Project 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="Project 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="Project 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="Project 4"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2023",
    content: (
      <div>
        <p className="text-secondary text-sm md:text-base font-normal mb-8">
          Led development of ETL pipelines and data engineering solutions
        </p>
        <p className="text-secondary text-sm md:text-base font-normal mb-8">
          Implemented advanced data warehousing solutions and analytics platforms
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="Data Project 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-20 md:h-44 lg:h-60 w-full shadow-lg">
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="Data Project 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2019-2022",
    content: (
      <div>
        <p className="text-secondary text-sm md:text-base font-normal mb-4">
          Key Achievements and Milestones
        </p>
        <div className="mb-8">
          <div className="flex gap-2 items-center text-secondary text-sm">
            ✅ Developed end-to-end ETL solutions
          </div>
          <div className="flex gap-2 items-center text-secondary text-sm">
            ✅ Implemented data warehousing architecture
          </div>
          <div className="flex gap-2 items-center text-secondary text-sm">
            ✅ Led machine learning projects
          </div>
          <div className="flex gap-2 items-center text-secondary text-sm">
            ✅ Optimized data processing workflows
          </div>
          <div className="flex gap-2 items-center text-secondary text-sm">
            ✅ Achieved significant performance improvements
          </div>
        </div>
      </div>
    ),
  },
];

const skills = [
  { 
    name: "AI/ML Technologies", 
    icon: <Brain className="w-6 h-6" />, 
    level: 90,
    description: "LLM(Open source and SOTA), RAG Architecture, Embedding Models, Conversational AI"
  },
  { 
    name: "Programming", 
    icon: <Code2 className="w-6 h-6" />, 
    level: 60,
    description: "Python, Advanced SQL, R"
  },
  { 
    name: "Data & ETL", 
    icon: <Database className="w-6 h-6" />, 
    level: 90,
    description: "MS SQL Server, Oracle, Azure Synapse Analytics"
  },
  { 
    name: "Visualization", 
    icon: <BarChart className="w-6 h-6" />, 
    level: 90,
    description: "PowerBI, Tableau, Draw.io, Invision"
  },
];

const education = [
  {
    degree: "Master of Science in Engineering Management",
    school: "Northeastern University",
    year: "Sep. 2017 – Dec 2019",
    location: "Boston, MA",
    description: "CGPA: 3.89/4",
  },
  {
    degree: "Bachelor of Science in Engineering (Mechanical)",
    school: "Visveswaraya Technological University",
    year: "June 2009 – June 2013",
    location: "Bengaluru, India",
    description: "CGPA: 4/4",
  },
];

const otherTechnologies = [
  { fact: "Jupyter Notebook, Azure DevOps, JIRA", icon: <Code2 className="w-6 h-6" /> },
  { fact: "Power Query, Power Automate, Advanced Excel", icon: <Star className="w-6 h-6" /> },
  { fact: "Data warehousing and Business Intelligence", icon: <Database className="w-6 h-6" /> },
  { fact: "Large Language Models, Generative AI", icon: <Brain className="w-6 h-6" /> },
  { fact: "API Consumption (REST and SOAP), SDLC", icon: <Sparkles className="w-6 h-6" /> },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen p-8 animate-fadeIn bg-gradient-to-br from-background via-background/95 to-background/90 relative overflow-hidden">
      {/* Floating shapes */}
      <FloatingShape type="square" className="w-28 h-28 top-40 left-[5%] bg-primary/10 animate-float" />
      <FloatingShape type="pentagon" className="w-20 h-20 bottom-20 right-[8%] bg-secondary/10 animate-float delay-500" />
      <FloatingShape type="triangle" className="w-16 h-16 top-[30%] right-[20%] bg-accent/10 animate-float delay-200" />

      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-pulse mb-4">
          About Me
        </h1>
        <p className="text-lg text-secondary">
          AI Developer passionate about creating intelligent solutions that make a difference.
        </p>
      </motion.div>

      {/* Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-20"
      >
        <Timeline data={timelineData} />
      </motion.div>

      {/* Skills Chart Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto mb-12"
      >
        <SkillsChart />
      </motion.div>

      {/* Education Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-semibold text-accent mb-6 relative">
          Education
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary rounded-full"></span>
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <AccordionItem value={`item-${index}`} className="relative bg-background/50 backdrop-blur-sm border border-primary/20 rounded-lg overflow-hidden">
                <AccordionTrigger className="px-6 hover:no-underline group">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    {edu.degree}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-2 font-medium text-accent">{edu.school}</p>
                    <p className="text-sm text-secondary">{edu.year}</p>
                    <p className="text-sm text-secondary">{edu.location}</p>
                    <p className="mt-2 text-primary font-medium">{edu.description}</p>
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* Additional Technologies Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-accent mb-6 relative">
          Additional Technologies & Skills
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-3">
                  <div className="text-primary">{tech.icon}</div>
                  <p className="text-secondary">{tech.fact}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
