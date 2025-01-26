import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";
import { Brain, Code2, Database, BarChart, Network, Server } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const skills = [
  {
    subject: "AI/ML",
    level: 90,
    icon: Brain,
    description: "LLM, RAG Architecture, Embedding Models, Conversational AI",
  },
  {
    subject: "Programming",
    level: 60,
    icon: Code2,
    description: "Python, Advanced SQL, R, TypeScript",
  },
  {
    subject: "Data & ETL",
    level: 90,
    icon: Database,
    description: "MS SQL Server, Oracle, Azure Synapse Analytics",
  },
  {
    subject: "Cloud & DevOps",
    level: 70,
    icon: Server,
    description: "Azure, AWS, Docker, CI/CD",
  },
  {
    subject: "System Design",
    level: 60,
    icon: Network,
    description: "Distributed Systems, Microservices, API Design",
  },
  {
    subject: "Visualization",
    level: 90,
    icon: BarChart,
    description: "PowerBI, Tableau, D3.js, Data Storytelling",
  },
];

const SkillsChart = () => {
  const chartData = skills.map((skill) => ({
    subject: skill.subject,
    A: skill.level,
    fullMark: 100,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="bg-background/50 backdrop-blur-sm border-primary/20">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-accent">
            Technical Expertise
          </CardTitle>
          <CardDescription className="text-secondary">
            Core competencies and skill levels
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full" role="img" aria-label="Skills radar chart showing technical expertise levels">
            <ChartContainer
              className="[&_.recharts-polar-grid-angle-line]:stroke-muted-foreground/20 [&_.recharts-polar-grid-concentric-circle]:stroke-muted-foreground/20"
              config={{
                skills: {
                  theme: {
                    light: "#9b87f5",
                    dark: "#D6BCFA",
                  },
                },
              }}
            >
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="80%"
                data={chartData}
              >
                <PolarGrid />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={{ fill: "currentColor", fontSize: 12 }}
                />
                <PolarRadiusAxis
                  angle={30}
                  domain={[0, 100]}
                  tick={{ fill: "currentColor", fontSize: 12 }}
                />
                <Radar
                  name="Skill Level"
                  dataKey="A"
                  stroke="var(--color-skills)"
                  fill="var(--color-skills)"
                  fillOpacity={0.3}
                />
                <ChartTooltip content={<CustomTooltip />} />
              </RadarChart>
            </ChartContainer>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill.subject}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
              >
                <skill.icon className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{skill.subject}</p>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const skill = skills.find((s) => s.subject === payload[0].payload.subject);
    if (!skill) return null;

    return (
      <div className="bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-border shadow-lg">
        <p className="font-medium text-foreground">{skill.subject}</p>
        <p className="text-sm text-muted-foreground">{skill.description}</p>
        <p className="text-sm font-medium text-primary mt-1">
          Level: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export default SkillsChart;
