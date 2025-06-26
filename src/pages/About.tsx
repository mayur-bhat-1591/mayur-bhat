import { motion } from "framer-motion";
import { Code2, Brain, Heart, Star, Sparkles, GraduationCap, Database, BarChart, Trophy, Target, Users, Zap, Globe, Rocket, TrendingUp, Award, Building, DollarSign } from "lucide-react";
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
    title: "2020-Present",
    content: (
      <div>
        <p className="text-secondary text-sm md:text-base font-normal mb-4">
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Senior Product Manager - Eze Castle Integration</span>
        </p>
        <p className="text-secondary text-sm md:text-base font-normal mb-6">
          🚀 Led revolutionary transformation of enterprise GenAI platform serving <span className="font-bold text-accent px-2 py-1 bg-accent/10 rounded">600+ users</span> across <span className="font-bold text-primary px-2 py-1 bg-primary/10 rounded">14 enterprise clients</span>
        </p>
        
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="rounded-xl overflow-hidden h-32 md:h-48 lg:h-64 w-full shadow-xl bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border border-primary/30 hover:border-primary/50 transition-all duration-500 group">
            <div className="h-full flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">ELLA GenAI Platform</h3>
              <p className="text-sm text-secondary text-center">Enterprise AI Solution</p>
              <div className="mt-2 px-3 py-1 bg-primary/20 rounded-full">
                <span className="text-xs font-semibold text-primary">$250K+ ARR</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden h-32 md:h-48 lg:h-64 w-full shadow-xl bg-gradient-to-br from-accent/20 via-accent/10 to-secondary/20 border border-accent/30 hover:border-accent/50 transition-all duration-500 group">
            <div className="h-full flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-accent to-secondary p-4 rounded-full mb-4 group-hover:rotate-12 transition-transform duration-300">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-accent mb-2">Enterprise Revenue</h3>
              <p className="text-sm text-secondary text-center">35+ Deals Managed</p>
              <div className="mt-2 px-3 py-1 bg-accent/20 rounded-full">
                <span className="text-xs font-semibold text-accent">$800K Total</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden h-32 md:h-48 lg:h-64 w-full shadow-xl bg-gradient-to-br from-secondary/20 via-primary/10 to-accent/20 border border-secondary/30 hover:border-secondary/50 transition-all duration-500 group">
            <div className="h-full flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-secondary to-primary p-4 rounded-full mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Team Leadership</h3>
              <p className="text-sm text-secondary text-center">Cross-functional Excellence</p>
              <div className="mt-2 px-3 py-1 bg-secondary/20 rounded-full">
                <span className="text-xs font-semibold text-secondary">13+ Professionals</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden h-32 md:h-48 lg:h-64 w-full shadow-xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border border-primary/30 hover:border-primary/50 transition-all duration-500 group">
            <div className="h-full flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full mb-4 group-hover:rotate-12 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Customer Discovery</h3>
              <p className="text-sm text-secondary text-center">Deep User Research</p>
              <div className="mt-2 px-3 py-1 bg-primary/20 rounded-full">
                <span className="text-xs font-semibold text-primary">100+ Interviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/20">
          <h4 className="font-bold text-primary mb-3 flex items-center gap-2">
            <Rocket className="w-5 h-5" />
            Key Achievements
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Data sovereignty architecture for financial services</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Multi-modal document processing implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm">20% NPS improvement through A/B testing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">50% increase in prospect pipeline</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2018-2019",
    content: (
      <div>
        <p className="text-secondary text-sm md:text-base font-normal mb-4">
          <span className="font-bold text-xl bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Educational Excellence & Product Foundation</span>
        </p>
        <p className="text-secondary text-sm md:text-base font-normal mb-6">
          🎓 Earned <span className="font-bold text-accent px-2 py-1 bg-accent/10 rounded">MS in Engineering Management</span> from Northeastern University while gaining hands-on product experience at <span className="font-bold text-primary px-2 py-1 bg-primary/10 rounded">General Electric Lighting</span>
        </p>
        
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="rounded-xl overflow-hidden h-24 md:h-40 lg:h-56 w-full shadow-xl bg-gradient-to-br from-accent/20 via-secondary/10 to-primary/20 border border-accent/30 hover:border-accent/50 transition-all duration-500 group">
            <div className="h-full flex flex-col items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-accent to-secondary p-3 rounded-full mb-3 group-hover:rotate-12 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-accent mb-1">Northeastern University</h3>
              <p className="text-xs text-secondary text-center">MS Engineering Management</p>
              <div className="mt-2 px-2 py-1 bg-accent/20 rounded-full">
                <span className="text-xs font-semibold text-accent">GPA: 3.89/4.0</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-xl overflow-hidden h-24 md:h-40 lg:h-56 w-full shadow-xl bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 border border-primary/30 hover:border-primary/50 transition-all duration-500 group">
            <div className="h-full flex flex-col items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-primary to-accent p-3 rounded-full mb-3 group-hover:rotate-12 transition-transform duration-300">
                <Building className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-base font-bold text-primary mb-1">General Electric</h3>
              <p className="text-xs text-secondary text-center">Product Management Co-op</p>
              <div className="mt-2 px-2 py-1 bg-primary/20 rounded-full">
                <span className="text-xs font-semibold text-primary">IoT Products</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-accent/5 to-secondary/5 p-5 rounded-xl border border-accent/20">
          <h4 className="font-bold text-accent mb-3 flex items-center gap-2">
            <Award className="w-5 h-5" />
            Academic & Professional Highlights
          </h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Designed beta testing programs for IoT smart home products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Conducted user interviews and surveys for product roadmaps</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm">Collaborated with firmware engineers on C by GE products</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "2013-2017",
    content: (
      <div>
        <p className="text-secondary text-sm md:text-base font-normal mb-4">
          <span className="font-bold text-xl bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">Entrepreneurial Foundation & Global Experience</span>
        </p>
        <p className="text-secondary text-sm md:text-base font-normal mb-6">
          🌟 Built entrepreneurial foundation as <span className="font-bold text-secondary px-2 py-1 bg-secondary/10 rounded">Co-founder at Fyndo</span> and gained operational excellence at <span className="font-bold text-primary px-2 py-1 bg-primary/10 rounded">Amazon India</span>
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-secondary/20 to-primary/20 p-4 rounded-xl border border-secondary/30 hover:border-secondary/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-r from-secondary to-primary p-2 rounded-full group-hover:rotate-12 transition-transform duration-300">
                <Rocket className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-secondary">Fyndo X Geospot</h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm">Co-founded location-based platform</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm"><span className="font-bold text-primary">12K users</span> in 5 months</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-secondary" />
                <span className="text-sm">Led team of <span className="font-bold text-secondary">15 professionals</span></span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-xl border border-primary/30 hover:border-primary/50 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-full group-hover:rotate-12 transition-transform duration-300">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-primary">Amazon India</h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm">"Star Performer" recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart className="w-4 h-4 text-primary" />
                <span className="text-sm"><span className="font-bold text-primary">250% efficiency</span> improvement</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-secondary" />
                <span className="text-sm">Managed <span className="font-bold text-secondary">300K+ listings</span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-secondary/5 to-primary/5 p-5 rounded-xl border border-secondary/20">
          <h4 className="font-bold text-secondary mb-3 flex items-center gap-2">
            <Globe className="w-5 h-5" />
            Foundation Skills Developed
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm">Python development and API integration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Data processing and automation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Distributed team leadership</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-sm">Technical operations optimization</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-sm">Quality assurance protocols</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-sm">Entrepreneurial product development</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const skills = [
  { 
    name: "Product Management & Strategy", 
    icon: <Star className="w-6 h-6" />, 
    level: 95,
    description: "Customer Discovery, Requirements Engineering, Product Roadmapping, Feature Prioritization, A/B Testing, Cross-functional Leadership, Stakeholder Management"
  },
  { 
    name: "AI/GenAI Technologies", 
    icon: <Brain className="w-6 h-6" />, 
    level: 92,
    description: "Large Language Models, RAG Architecture, Vector Databases, Multi-modal Processing, Azure AI Services, OpenAI API Integration, Conversational AI, Data Sovereignty"
  },
  { 
    name: "Technical Development", 
    icon: <Code2 className="w-6 h-6" />, 
    level: 85,
    description: "Python, Advanced SQL, R, Azure Cloud Platform, API Integration (REST/SOAP), DevOps, CI/CD, Database Management (SQL Server, Oracle, Cosmos DB)"
  },
  { 
    name: "Analytics & Business Intelligence", 
    icon: <BarChart className="w-6 h-6" />, 
    level: 90,
    description: "PowerBI, Tableau, Advanced Excel, Statistical Analysis, Revenue Generation, Deal Management, Business Operations, Data Visualization"
  },
  { 
    name: "Enterprise Solutions", 
    icon: <Database className="w-6 h-6" />, 
    level: 88,
    description: "SharePoint Migrations, ETL Processes, Azure Synapse Analytics, Enterprise Architecture, Compliance Requirements, Security Implementation"
  },
  { 
    name: "Leadership & Communication", 
    icon: <Users className="w-6 h-6" />, 
    level: 93,
    description: "Cross-functional Team Leadership, International Collaboration, Client Relationship Management, Technical Documentation, Presentation Skills"
  },
];

const education = [
  {
    degree: "Master of Science in Engineering Management",
    school: "Northeastern University",
    year: "Sep 2017 – Dec 2019",
    location: "Boston, MA",
    description: "GPA: 3.89/4.0 - Specialized in product management methodologies, data analytics, operations research, and technical leadership in agile development environments. Developed expertise in cross-functional team management and strategic product planning.",
    highlights: [
      "Product Management & Development",
      "Data Analytics & Statistical Modeling", 
      "Operations Research & Optimization",
      "Agile Project Management",
      "Strategic Leadership"
    ]
  },
  {
    degree: "Bachelor of Science in Engineering (Mechanical)",
    school: "Visveswaraya Technological University",
    year: "June 2009 – June 2013",
    location: "Bengaluru, India",
    description: "GPA: 4.0/4.0 - Strong foundation in analytical thinking, problem-solving methodologies, systems design, and technical project management. Developed core engineering principles that inform product development approach.",
    highlights: [
      "Systems Design & Analysis",
      "Mathematical Modeling",
      "Technical Problem Solving",
      "Project Management",
      "Quality Engineering"
    ]
  },
];

const otherTechnologies = [
  { 
    fact: "Azure DevOps, JIRA, Confluence - Complete agile project management ecosystem for distributed teams",
    icon: <Code2 className="w-6 h-6" />,
    category: "Development Tools"
  },
  { 
    fact: "OpenAI API, Azure AI Services, Vector Databases - Enterprise-grade GenAI implementations with security focus",
    icon: <Brain className="w-6 h-6" />,
    category: "AI Technologies"
  },
  { 
    fact: "Cross-functional Leadership - Successfully managed 13+ technical professionals across multiple time zones",
    icon: <Users className="w-6 h-6" />,
    category: "Leadership"
  },
  { 
    fact: "Revenue Generation & Deal Management - $800K in enterprise deals with 25% win rate and $75K largest deal",
    icon: <DollarSign className="w-6 h-6" />,
    category: "Business Impact"
  },
  { 
    fact: "Customer Discovery & Requirements Engineering - 100+ structured stakeholder interviews conducted",
    icon: <Target className="w-6 h-6" />,
    category: "Product Research"
  },
  { 
    fact: "Data Sovereignty Architecture - Secure AI solutions meeting financial services compliance requirements",
    icon: <Database className="w-6 h-6" />,
    category: "Enterprise Security"
  },
  {
    fact: "Power Platform Suite - PowerBI, Power Automate, Power Query for enterprise automation and analytics",
    icon: <Zap className="w-6 h-6" />,
    category: "Microsoft Stack"
  },
  {
    fact: "International Experience - Global perspective from founding startup in India and scaling products in US",
    icon: <Globe className="w-6 h-6" />,
    category: "Global Experience"
  }
];

const professionalAchievements = [
  {
    title: "Product Innovation Excellence",
    description: "Transformed basic chatbot into enterprise GenAI platform serving 600+ users",
    metric: "$250K+ ARR",
    icon: <Rocket className="w-6 h-6" />
  },
  {
    title: "Revenue Leadership",
    description: "Managed and closed 35+ enterprise deals across multiple solution areas",
    metric: "$800K Total",
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    title: "Team Excellence",
    description: "Led cross-functional teams of 13+ professionals across distributed environments",
    metric: "Global Teams",
    icon: <Users className="w-6 h-6" />
  },
  {
    title: "Customer Focus",
    description: "Conducted systematic customer discovery to drive product-market fit",
    metric: "100+ Interviews",
    icon: <Heart className="w-6 h-6" />
  }
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
      {/* Enhanced Floating shapes */}
      <FloatingShape type="square" className="w-32 h-32 top-20 left-[3%] bg-primary/10 animate-float" />
      <FloatingShape type="pentagon" className="w-24 h-24 bottom-40 right-[5%] bg-secondary/10 animate-float delay-500" />
      <FloatingShape type="triangle" className="w-20 h-20 top-[25%] right-[15%] bg-accent/10 animate-float delay-200" />
      <FloatingShape type="square" className="w-16 h-16 top-[60%] left-[8%] bg-primary/15 animate-float delay-700" />
      <FloatingShape type="pentagon" className="w-28 h-28 bottom-[10%] left-[12%] bg-accent/15 animate-float delay-300" />

      {/* Enhanced Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto mb-16 text-center"
      >
        <div className="relative">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary animate-pulse mb-6 tracking-tight">
            About Me
          </h1>
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/30 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent/40 rounded-full animate-ping delay-200"></div>
        </div>
        <p className="text-xl md:text-2xl text-secondary max-w-4xl mx-auto leading-relaxed">
          Senior Product Manager passionate about building innovative <span className="font-bold text-primary">AI/GenAI solutions</span> that drive real business impact. From <span className="font-bold text-accent">startups to enterprise</span>, I bridge technical complexity with customer needs to create products that matter.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <div className="px-4 py-2 bg-primary/20 rounded-full border border-primary/30">
            <span className="text-primary font-semibold">5+ Years Experience</span>
          </div>
          <div className="px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
            <span className="text-accent font-semibold">AI/GenAI Expert</span>
          </div>
          <div className="px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30">
            <span className="text-secondary font-semibold">Revenue Driver</span>
          </div>
        </div>
      </motion.div>

      {/* Professional Achievements Highlight */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Professional Achievements
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {professionalAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-background/80 to-background/60 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-accent">{achievement.metric}</span>
                </div>
              </div>
              <h3 className="font-bold text-primary mb-2">{achievement.title}</h3>
              <p className="text-sm text-secondary">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Timeline Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mb-24"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Professional Journey
          </span>
        </h2>
        <Timeline data={timelineData} />
      </motion.div>

      {/* Enhanced Skills Chart Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            Core Competencies
          </span>
        </h2>
        <SkillsChart />
        
        {/* Enhanced Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              className="bg-gradient-to-br from-background/70 to-background/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary mb-1">{skill.name}</h3>
                  <div className="w-full bg-background/50 rounded-full h-2">
                    <motion.div 
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-xs text-accent font-semibold">{skill.level}%</span>
                </div>
              </div>
              <p className="text-sm text-secondary leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced Education Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Educational Excellence
          </span>
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <AccordionItem value={`item-${index}`} className="relative bg-gradient-to-br from-background/70 to-background/50 backdrop-blur-sm border border-primary/20 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300">
                <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                  <div className="flex items-center gap-4 w-full">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-bold text-primary text-lg">{edu.degree}</h3>
                      <p className="text-secondary">{edu.school} • {edu.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-accent font-semibold">{edu.year}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <p className="text-secondary leading-relaxed">{edu.description}</p>
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Areas of Study:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-accent rounded-full"></div>
                            <span className="text-sm text-secondary">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>

      {/* Enhanced Additional Technologies Section */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto mb-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Technical Expertise & Specializations
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherTechnologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -3, transition: { duration: 0.2 } }}
              className="relative group"
            >
              <Card className="bg-gradient-to-br from-background/70 to-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 h-full overflow-hidden">
                <CardContent className="p-6 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-primary group-hover:scale-110 transition-transform duration-300 mt-1">
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                          {tech.category}
                        </span>
                      </div>
                      <p className="text-secondary leading-relaxed">{tech.fact}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20"
      >
        <h2 className="text-2xl font-bold mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </span>
        </h2>
        <p className="text-secondary mb-6 text-lg">
          I'm passionate about creating AI-powered products that solve real problems and drive meaningful business impact. Let's connect and explore how we can innovate together.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <div className="px-6 py-3 bg-primary/20 rounded-full border border-primary/30 hover:border-primary/50 transition-all duration-300">
            <span className="text-primary font-semibold flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              Innovation-Focused
            </span>
          </div>
          <div className="px-6 py-3 bg-accent/20 rounded-full border border-accent/30 hover:border-accent/50 transition-all duration-300">
            <span className="text-accent font-semibold flex items-center gap-2">
              <Target className="w-4 h-4" />
              Results-Driven
            </span>
          </div>
          <div className="px-6 py-3 bg-secondary/20 rounded-full border border-secondary/30 hover:border-secondary/50 transition-all duration-300">
            <span className="text-secondary font-semibold flex items-center gap-2">
              <Users className="w-4 h-4" />
              Team-Oriented
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
