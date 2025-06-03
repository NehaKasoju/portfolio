import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Experience {
  title: string;
  company: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Orthopaedic Surgery Engineering",
    company: "The Hospital for Sick Children",
    description: "Developing innovative surgical solutions for pediatric care",
    highlights: [
      "Designed and tested surgical tools for pediatric patients",
      "Collaborated with medical professionals on device development",
      "Conducted research on surgical techniques and outcomes"
    ],
    technologies: ["CAD", "3D Printing", "Medical Devices", "Research"]
  },
  {
    title: "Vehicle Platform Division Member",
    company: "Watonomous",
    description: "Contributing to autonomous vehicle development",
    highlights: [
      "Developing ROS2 control nodes in C++ for joystick interfaces",
      "Supporting a fully autonomous Kia Soul",
      "Focusing on perception, control, and integration"
    ],
    technologies: ["ROS2", "C++", "Autonomous Systems", "Control Systems"]
  },
  {
    title: "Student Trustee",
    company: "Durham District School Board",
    description: "Representing 83,000+ students in educational policy",
    highlights: [
      "Launched Operation Opportunities database",
      "Led Student Senate and monthly board reports",
      "Passed new Student Trustee policy",
      "Organized mental health conferences"
    ],
    technologies: ["Leadership", "Policy", "Advocacy", "Education"]
  },
  {
    title: "Transition Surgery Researcher",
    company: "Women's College Hospital",
    description: "Improving healthcare accessibility for transgender patients",
    highlights: [
      "Tested 3D-printed speculum for improved biopsy accuracy",
      "Created Transition Surgery Patient Advisory Board",
      "Developed Research Ethics Board proposals"
    ],
    technologies: ["3D Printing", "Medical Research", "Healthcare", "CAD"]
  }
];

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-surgical-gray/50 backdrop-blur-sm rounded-lg p-6 border border-neon-blue/20 hover:border-neon-blue transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl font-orbitron text-neon-blue mb-1">{experience.title}</h3>
          <p className="text-sterile-white/80 font-rajdhani">{experience.company}</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center">
          <span className="text-neon-blue text-xl">⚡</span>
        </div>
      </div>

      <p className="text-sterile-white/70 mb-4 italic">{experience.description}</p>

      <div className="space-y-3 mb-4">
        {experience.highlights.map((highlight, i) => (
          <div key={i} className="flex items-start space-x-2">
            <span className="text-hud-green mt-1">•</span>
            <p className="text-sterile-white/80">{highlight}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs font-rajdhani bg-neon-blue/10 text-neon-blue rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="experience" className="py-20 relative">
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
            <span className="text-neon-blue">Surgical</span> Modules
          </h2>
          <p className="text-sterile-white/80 font-rajdhani text-lg">
            Professional experience and research contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
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