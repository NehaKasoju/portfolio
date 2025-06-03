import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",
    icon: "🔗"
  },
  {
    name: "GitHub",
    url: "https://github.com/your-username",
    icon: "💻"
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "📧"
  }
];

const ContactLink = ({ name, url, icon }: { name: string; url: string; icon: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="group flex items-center space-x-4 p-4 bg-surgical-gray/50 backdrop-blur-sm rounded-lg border border-neon-blue/20 hover:border-neon-blue transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-neon-blue/10 flex items-center justify-center group-hover:bg-neon-blue/20 transition-colors duration-300">
        <span className="text-2xl">{icon}</span>
      </div>
      <div>
        <h3 className="text-xl font-orbitron text-neon-blue group-hover:text-neon-blue/80 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-sterile-white/60 font-rajdhani text-sm">
          {url.replace(/^https?:\/\//, '').replace(/^mailto:/, '')}
        </p>
      </div>
      <div className="ml-auto">
        <span className="text-hud-green text-2xl">→</span>
      </div>
    </motion.a>
  );
};

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="py-20 relative">
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
            <span className="text-neon-blue">Contact</span> Interface
          </h2>
          <p className="text-sterile-white/80 font-rajdhani text-lg">
            Connect with me through these channels
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-4">
          {socialLinks.map((link, index) => (
            <ContactLink key={index} {...link} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-sterile-white/60 font-rajdhani">
            Available for new opportunities and collaborations
          </p>
        </motion.div>
      </div>

      {/* Scanning Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent animate-scan" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-0 w-32 h-32 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-hud-green/5 rounded-full blur-3xl" />
    </section>
  );
} 