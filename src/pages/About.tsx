import { motion } from "framer-motion";
import { Code2, Brain, Heart, Star, Sparkles, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const skills = [
    { name: "AI Development", icon: <Brain className="w-6 h-6" />, level: 90 },
    { name: "Machine Learning", icon: <Code2 className="w-6 h-6" />, level: 85 },
    { name: "Python", icon: <Code2 className="w-6 h-6" />, level: 95 },
    { name: "Deep Learning", icon: <Brain className="w-6 h-6" />, level: 80 },
  ];

  const funFacts = [
    { fact: "Love solving complex AI problems", icon: <Heart className="w-6 h-6" /> },
    { fact: "Always learning new technologies", icon: <Star className="w-6 h-6" /> },
    { fact: "Passionate about AI ethics", icon: <Sparkles className="w-6 h-6" /> },
  ];

  const education = [
    {
      degree: "Master's in Computer Science",
      school: "University Name",
      year: "2020-2022",
      description: "Specialized in Artificial Intelligence and Machine Learning",
    },
    // Add more education details as needed
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
        <h2 className="text-2xl font-semibold text-accent mb-6">Skills</h2>
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
                <p className="mb-2">{edu.school}</p>
                <p className="text-sm">{edu.year}</p>
                <p className="mt-2">{edu.description}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* Fun Facts Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-semibold text-accent mb-6">Fun Facts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {funFacts.map((fact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.6 }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 bg-background/50 border-primary/20">
                <CardContent className="p-6 flex items-center gap-3">
                  <div className="text-primary">{fact.icon}</div>
                  <p className="text-secondary">{fact.fact}</p>
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