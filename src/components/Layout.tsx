import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="min-h-screen bg-deep-black text-sterile-white font-rajdhani">
      {/* Custom Cursor */}
      <motion.div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div className="w-8 h-8 rounded-full bg-neon-blue opacity-50" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sterile-white" />
      </motion.div>

      {/* HUD Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="absolute top-0 left-0 w-full h-1 bg-neon-blue opacity-50 animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-neon-blue opacity-50 animate-pulse-slow" />
        <div className="absolute top-0 left-0 w-1 h-full bg-neon-blue opacity-50 animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-1 h-full bg-neon-blue opacity-50 animate-pulse-slow" />
      </div>

      {/* Main Content */}
      <main
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative z-10"
      >
        {children}
      </main>

      {/* Ambient Sound Toggle */}
      <button
        className="fixed bottom-4 right-4 z-50 bg-surgical-gray p-2 rounded-full hover:bg-neon-blue transition-colors"
        onClick={() => {
          // TODO: Implement sound toggle
        }}
      >
        <span className="text-sterile-white">🔊</span>
      </button>
    </div>
  );
} 