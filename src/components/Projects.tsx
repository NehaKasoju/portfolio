import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "DotMatic",
    description: "A Braille Printer for young learners",
    image: "/images/project1.png",
    link: "https://github.com/NehaKasoju/DotMatic",
    technologies: ["C++", "Arduino", "3D Printing", "CAD"]
  },
  {
    title: "Operation Opportunities",
    description: "Connecting students with STEM opportunities",
    image: "/images/project2.png",
    link: "https://github.com/NehaKasoju/hawkhacks-2024",
    technologies: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Surgical Research",
    description: "Improving healthcare accessibility",
    image: "/images/project3.png",
    link: "https://www.womenscollegehospital.ca/wrapping-up-summer-student-research-day-2023/",
    technologies: ["3D Printing", "Medical Research", "CAD", "Prototyping"]
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-surgical-gray rounded-lg overflow-hidden border border-neon-blue/20 hover:border-neon-blue transition-all duration-300"
    >
      <div className="relative group">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <h3 className="text-2xl font-orbitron text-neon-blue mb-2">{project.title}</h3>
            <p className="text-sterile-white/80 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-rajdhani bg-neon-blue/10 text-neon-blue rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-neon-blue hover:text-hud-green transition-colors"
            >
              View Case Study
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="projects" className="py-20 relative">
      {/* HUD Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-neon-blue/50 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue/50 animate-pulse-slow" />

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron mb-4">
            <span className="text-neon-blue">Surgical</span> Cases
          </h2>
          <p className="text-sterile-white/80 font-rajdhani text-lg">
            A collection of innovative solutions and research projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Scanning Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent animate-scan" />
      </div>
    </section>
  );
} 