import { motion } from "framer-motion";
import { Code2, Brain, Heart, Star, Sparkles, GraduationCap, Database, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
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

  return (
    <div className="min-h-screen p-8 animate-fadeIn">
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-accent mb-4">About Me</h1>
        <p className="text-lg text-secondary">
          AI Developer passionate about creating intelligent solutions that make a difference.
        </p>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-semibold text-accent mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 bg-background/50 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-primary">{skill.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-accent mb-2">{skill.name}</h3>
                      <div className="h-2 bg-muted rounded-full">
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

      {/* Education Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-2xl font-semibold text-accent mb-6">Education</h2>
        <Accordion type="single" collapsible className="w-full">
          {education.map((edu, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-accent hover:text-primary">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  {edu.degree}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-secondary">
                <p className="mb-2 font-medium">{edu.school}</p>
                <p className="text-sm">{edu.year}</p>
                <p className="text-sm">{edu.location}</p>
                <p className="mt-2 text-primary">{edu.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* Additional Technologies Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-accent mb-6">Additional Technologies & Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 bg-background/50 border-primary/20">
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