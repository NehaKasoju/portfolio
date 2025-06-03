import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    icon: string;
  }[];
}

const skills: Skill[] = [
  {
    category: "Surgical Systems",
    items: [
      { name: "CAD Design", level: 90, icon: "⚡" },
      { name: "3D Printing", level: 85, icon: "🖨️" },
      { name: "Medical Devices", level: 80, icon: "🔬" },
      { name: "Robotics", level: 75, icon: "🤖" }
    ]
  },
  {
    category: "Control Systems",
    items: [
      { name: "ROS2", level: 85, icon: "🎮" },
      { name: "C++", level: 80, icon: "⚙️" },
      { name: "Python", level: 90, icon: "🐍" },
      { name: "Control Theory", level: 75, icon: "📊" }
    ]
  },
  {
    category: "Research & Development",
    items: [
      { name: "Medical Research", level: 85, icon: "🔍" },
      { name: "Data Analysis", level: 80, icon: "📈" },
      { name: "Prototyping", level: 85, icon: "🔧" },
      { name: "Documentation", level: 90, icon: "📝" }
    ]
  },
  {
    category: "Leadership & Communication",
    items: [
      { name: "Project Management", level: 85, icon: "📋" },
      { name: "Team Leadership", level: 90, icon: "👥" },
      { name: "Public Speaking", level: 85, icon: "🎤" },
      { name: "Policy Development", level: 80, icon: "📜" }
    ]
  }
];

const SkillBar = ({ level, name, icon }: { level: number; name: string; icon: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-neon-blue">{icon}</span>
          <span className="text-sterile-white font-rajdhani">{name}</span>
        </div>
        <span className="text-hud-green font-rajdhani">{level}%</span>
      </div>
      <motion.div
        ref={ref}
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-2 bg-neon-blue/20 rounded-full overflow-hidden"
      >
        <div className="h-full bg-neon-blue rounded-full relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </motion.div>
    </div>
  );
};

const SkillCategory = ({ category, items }: Skill) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-surgical-gray/50 backdrop-blur-sm rounded-lg p-6 border border-neon-blue/20"
    >
      <h3 className="text-2xl font-orbitron text-neon-blue mb-6">{category}</h3>
      <div className="space-y-4">
        {items.map((skill, index) => (
          <SkillBar key={index} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="skills" className="py-20 relative">
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
            <span className="text-neon-blue">System</span> Capabilities
          </h2>
          <p className="text-sterile-white/80 font-rajdhani text-lg">
            Technical expertise and professional competencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCategory key={index} {...skill} />
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