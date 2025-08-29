import { useState } from "react";
import { motion } from "./micro-animations";
import { ExternalLink, Github, Sparkles } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  codeLink: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Stock Market Investment platform",
    description: "Developed a stock market investment platform using Spring Boot\n- Displays real-time data\n- Secured and user-friendly application",
    image: "src/images/projects/stock.png",
    tags: ["Java", "SpringBoot", "Thymeleaf"],
    codeLink: "https://github.com/NaveenKumar71/SafeCryptoStocks",
  },
  {
    id: 2,
    title: "Donation Managemnet Portal",
    description: "A donation management portal that\n- Allows donors to contribute food, clothing, money, and footwear\n- Simple and user-friendly interface for seamless donation experience.",
    image: "src/images/projects/donation.png",
    tags: ["HTML","CSS","JavaScript","php","MySQL"],
    demoLink: "https://donation-portal-project.vercel.app/",
    codeLink: "https://github.com/NaveenKumar71/Donation-portal-project"
  },
  {
    id: 3,
    title: "Web Based Robot Monotoring System ",
    description: "A web-based robot monitoring system that\n- Tracks and analyzes real-time factory data\n- Enhances operational visibility and efficiency",
    image: "src/images/projects/robot.png",
    tags: ["React", "webot simulation", "Bootstrap"],
    demoLink: "https://factoryflowai.vercel.app/",
    codeLink: "https://github.com/NaveenKumar71/FactoryFlow-AI",
  },
  {
    id: 4,
    title: "Task Manager",
    description: "A simple Task Tracker web app made with React.\n - Uses simple storage to get, add, delete or update tasks.",
    image: "src/images/projects/taskmanager.png",
    tags: ["React", "Javascript","CSS"],
    demoLink: "https://task-management-app-tawny-seven.vercel.app/",
    codeLink: "https://github.com/NaveenKumar71/Task-Management-App",
  },
  {
    id: 5,
    title: "Shipyard website",
    description: "A shipyard website Showcases shipyard services, company information, and contact details with a clean and modern layout",
    image: "src/images/projects/shipyard.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoLink: "https://shipyard-website-alpha.vercel.app/",
    codeLink: "https://github.com/NaveenKumar71/Shipyard-website",
  },
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my notable projects that showcase my skills and expertise in web development.
          </p>
        </motion.div>


        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-[16/9]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx} 
                          className="px-2 py-0.5 bg-primary/80 text-white text-xs font-medium rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-400 text-xs mb-3">{project.description}</p>
                <div className="flex justify-between">
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 text-xs"
                  >
                    <Github className="mr-1 h-3 w-3" /> Code
                  </a>
                  {project.demoLink && project.id !== 1 && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors duration-300 text-xs"
                  >
                    <ExternalLink className="mr-1 h-3 w-3" /> Live Demo
                  </a>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}