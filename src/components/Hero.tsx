import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.from(containerRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-deep-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.1)_0%,transparent_70%)]" />
      </div>

      {/* Robotic Arm Animation */}
      <motion.div
        className="absolute top-0 right-0 w-1/3 h-full"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <div className="w-full h-full bg-[url('/images/robotic-arm.png')] bg-contain bg-no-repeat bg-center opacity-50" />
      </motion.div>

      {/* Main Content */}
      <div ref={containerRef} className="relative z-10 text-center px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-orbitron mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-neon-blue">Neha</span> Kasoju
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl font-rajdhani mb-8 text-hud-green"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Surgical Robotics Engineer
        </motion.p>

        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <button className="px-8 py-4 bg-surgical-gray border-2 border-neon-blue rounded-lg hover:bg-neon-blue hover:text-deep-black transition-all duration-300 group">
            <span className="relative z-10 font-orbitron">BEGIN PROCEDURE</span>
            <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* Scanning Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/10 to-transparent animate-scan" />
        </div>
      </div>

      {/* HUD Elements */}
      <div className="absolute bottom-8 left-8 text-hud-green font-orbitron text-sm">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-hud-green rounded-full animate-pulse" />
          <span>SYSTEM READY</span>
        </div>
      </div>

      <div className="absolute top-8 right-8 text-hud-green font-orbitron text-sm">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 bg-hud-green rounded-full animate-pulse" />
          <span>INITIALIZING...</span>
        </div>
      </div>
    </section>
  );
} 