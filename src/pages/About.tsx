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

  const skills = [
    { 
      name: "AI/ML Technologies", 
      icon: <Brain className="w-6 h-6" />, 
      level: 95,
      description: "LLM(Open source and SOTA), RAG Architecture, Embedding Models, Conversational AI"
    },
    { 
      name: "Programming", 
      icon: <Code2 className="w-6 h-6" />, 
      level: 90,
      description: "Python, Advanced SQL, R"
    },
    { 
      name: "Data & ETL", 
      icon: <Database className="w-6 h-6" />, 
      level: 85,
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
    <div className="min-h-screen p-8 animate-fadeIn bg-gradient-to-br from-background via-background/95 to-background/90">
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

      {/* Skills Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-semibold text-accent mb-6 relative">
          Technical Skills
          <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <Card className="bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-primary">{skill.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-accent mb-2">{skill.name}</h3>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-primary rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                        />
                      </div>
                      <p className="text-secondary mt-2 text-sm">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline Section */}
      <TimelineSection />

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
