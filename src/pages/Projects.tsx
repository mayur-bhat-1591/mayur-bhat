import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Agent 1",
      description: "Description of your first AI agent and its capabilities.",
      tags: ["Python", "Machine Learning", "NLP"],
      github: "https://github.com/yourusername/project1",
      demo: "https://demo-link-1.com",
    },
    {
      title: "AI Agent 2",
      description: "Description of your second AI agent and its capabilities.",
      tags: ["Python", "Computer Vision", "Deep Learning"],
      github: "https://github.com/yourusername/project2",
      demo: "https://demo-link-2.com",
    },
    {
      title: "AI Agent 3",
      description: "Description of your third AI agent and its capabilities.",
      tags: ["Python", "Computer Vision", "Deep Learning"],
      github: "https://github.com/yourusername/project2",
      demo: "https://demo-link-2.com",
    },
  ];

  return (
    <div className="animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-accent mb-8">My Agents</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-background border border-muted rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] animate-fadeIn"
            style={{
              animationDelay: `${index * 150}ms`,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="p-6 bg-gradient-to-br from-background to-muted/30">
              <h3 className="text-xl font-semibold mb-2 text-primary">{project.title}</h3>
              <p className="text-foreground/80 mb-4">{project.description}</p>
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
              <div className="flex gap-4">
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;