import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "work" | "education" | "achievement";
}

const timelineData: TimelineEvent[] = [
  {
    year: "2023",
    title: "AI Developer",
    description: "Specializing in LLMs and RAG Architecture development",
    type: "work",
  },
  {
    year: "2019",
    title: "Master of Science in Engineering Management",
    description: "Northeastern University, Boston - CGPA: 3.89/4",
    type: "education",
  },
  {
    year: "2017",
    title: "Data Engineer",
    description: "ETL Development and Data Warehousing",
    type: "work",
  },
  {
    year: "2013",
    title: "Bachelor of Science in Engineering",
    description: "Visveswaraya Technological University - CGPA: 4/4",
    type: "education",
  },
];

const getIcon = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "work":
      return <Briefcase className="w-5 h-5" />;
    case "education":
      return <GraduationCap className="w-5 h-5" />;
    case "achievement":
      return <Award className="w-5 h-5" />;
  }
};

const TimelineSection = () => {
  return (
    <div className="max-w-4xl mx-auto my-12">
      <h2 className="text-2xl font-semibold text-accent mb-8 relative">
        Professional Journey
        <span className="absolute bottom-0 left-0 w-20 h-1 bg-primary rounded-full"></span>
      </h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20 md:left-1/2" />

        {timelineData.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`mb-8 flex items-center ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } flex-col md:items-start`}
          >
            {/* Timeline dot */}
            <div
              className={`absolute left-4 w-4 h-4 rounded-full bg-primary md:left-1/2 md:-ml-2 
                ${index % 2 === 0 ? "md:translate-x-0" : "md:translate-x-0"}`}
            />
            
            {/* Content card */}
            <Card className={`w-full md:w-[calc(50%-2rem)] 
              ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}
              bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 
              transition-all duration-300`}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    {getIcon(event.type)}
                  </div>
                  <div>
                    <span className="text-sm font-medium text-primary">{event.year}</span>
                    <h3 className="text-lg font-medium text-accent mb-1">{event.title}</h3>
                    <p className="text-secondary text-sm">{event.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;